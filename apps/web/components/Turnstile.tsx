'use client';

import React, { forwardRef, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact' | 'invisible';
          callback?: (token: string) => void;
          'error-callback'?: (error?: unknown) => void;
          'expired-callback'?: () => void;
        }
      ) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
      getResponse: (id?: string) => string | undefined;
    };
  }
}

export interface TurnstileProps {
  siteKey: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact' | 'invisible';
  onVerify: (token: string) => void;
  onError?: (error?: unknown) => void;
  onExpire?: () => void;
  className?: string;
}

export interface TurnstileRef {
  reset: () => void;
  getResponse: () => string | undefined;
}

export const Turnstile = forwardRef<TurnstileRef, TurnstileProps>(
  ({ siteKey, theme = 'auto', size = 'normal', onVerify, onError, onExpire, className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | undefined>(undefined);

    const onVerifyRef = useRef(onVerify);
    const onErrorRef = useRef(onError);
    const onExpireRef = useRef(onExpire);

    useEffect(() => {
      onVerifyRef.current = onVerify;
      onErrorRef.current = onError;
      onExpireRef.current = onExpire;
    });

    const renderWidget = useCallback(() => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme,
            size,
            callback: (token) => onVerifyRef.current(token),
            'error-callback': (err) => onErrorRef.current?.(err),
            'expired-callback': () => onExpireRef.current?.(),
          });
        } catch (err) {
          console.error('Failed to render Turnstile widget:', err);
          if (onErrorRef.current) onErrorRef.current(err);
        }
      }
    }, [siteKey, theme, size]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      },
      getResponse: () => {
        if (window.turnstile && widgetIdRef.current) {
          return window.turnstile.getResponse(widgetIdRef.current);
        }
        return undefined;
      },
    }));

    useEffect(() => {
      if (window.turnstile) {
        renderWidget();
      }

      return () => {
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = undefined;
        }
      };
    }, [renderWidget]);

    return (
      <div className={className}>
        <div ref={containerRef} />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          onLoad={renderWidget}
          strategy="afterInteractive"
        />
      </div>
    );
  }
);

Turnstile.displayName = 'Turnstile';
