# Graph Report - web  (2026-06-16)

## Corpus Check
- 175 files · ~265,282 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1111 nodes · 1742 edges · 86 communities (68 shown, 18 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5acd489e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 82|Community 82]]

## God Nodes (most connected - your core abstractions)
1. `useTheme()` - 55 edges
2. `supabase` - 41 edges
3. `Database` - 28 edges
4. `compilerOptions` - 17 edges
5. `POST()` - 11 edges
6. `getSeverityConfig()` - 11 edges
7. `MegaFooter()` - 10 edges
8. `getSeverityConfig()` - 9 edges
9. `isBreached()` - 8 edges
10. `MappedComplaint` - 8 edges

## Surprising Connections (you probably didn't know these)
- `AboutPage()` --calls--> `useTheme()`  [EXTRACTED]
  app/about/page.tsx → components/ThemeProvider.tsx
- `AuthorityMapView()` --calls--> `useTheme()`  [EXTRACTED]
  app/authority/map/_components/AuthorityMapView.tsx → components/ThemeProvider.tsx
- `DocumentationClient()` --calls--> `useTheme()`  [EXTRACTED]
  app/documentation/DocumentationClient.tsx → components/ThemeProvider.tsx
- `LeaderboardPage()` --calls--> `useTheme()`  [EXTRACTED]
  app/leaderboard/page.tsx → components/ThemeProvider.tsx
- `Home()` --calls--> `useTheme()`  [INFERRED]
  app/map/page.tsx → components/ThemeProvider.tsx

## Import Cycles
- None detected.

## Communities (86 total, 18 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (56): supabase, ALLOWED_ORIGINS, GeminiApiContent, GeminiApiResponse, GeminiCandidate, getCorsHeaders(), OPTIONS(), POST() (+48 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (44): AUTHORITY_NAMES, CHILD_CATEGORIES, ChildCategory, childMap, getGroupedResults(), ManualReportForm(), NearbyTicketsMap, PARENT_CATEGORIES (+36 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (49): metadata, backendDeliverables, CapabilityRow, capabilityRows, cx(), Deliverable, frontendDeliverables, getQuotationSections() (+41 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (35): ComplaintRow, TicketCard(), TicketCardProps, formatStatus(), formatTimestamp(), getSeverityDotColor(), statusClasses(), CurrentTicketCard() (+27 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (27): CameraCard(), CameraCardProps, CameraData, DashcamBox, DashcamFrame, DashcamOverlayState, DashcamPolicy, DashcamPrecomputedArtifact (+19 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (31): AuthorityMapView(), ComplaintStatus, MapTicket, MarkerClusterGroup, parseEwkbHexPoint(), parseLocation(), SEV_BADGE, SEV_COLOR (+23 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (28): ChatPanel(), CONFIRMATION_PATTERNS, DeviceLocation, DisplayMessage, DuplicateContext, DuplicateMatch, GeoDetails, ImageTicketPreview (+20 more)

### Community 7 - "Community 7"
Cohesion: 0.05
Nodes (37): dependencies, gsap, @gsap/react, leaflet, leaflet.heat, lucide-react, next, react (+29 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (14): RatingProps, CitizenTicketsPageContent(), ComplaintRow, filterAndSortTickets(), formatStatus(), parseEwkbHexPoint(), parseLocation(), TicketListRow (+6 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (23): 10. Authority Detail Page Layout, 11. Worker Assignment, 12. Grid Layout System, 13. Workload Indicator, 14. Page Components, 15. Folder Structure, 16. Benefits of Card-Based Authority Layout, 17. Summary (+15 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (22): 10. PriorityBadge Component, 11. TicketActions Component, 12. Pagination Component, 13. Component Hierarchy, 14. Benefits of Component-Based Design, 15. Summary, 1. Overview, 2. Page Structure (+14 more)

### Community 11 - "Community 11"
Cohesion: 0.10
Nodes (16): TicketSearch(), TicketSearchProps, TicketsHeader(), TicketsHeaderProps, AdminComplaintsPayload, authorityExamples, categoryExamples, CategoryOption (+8 more)

### Community 12 - "Community 12"
Cohesion: 0.10
Nodes (11): avgDays(), CAT_PALETTE, Complaint, GRAN_OPTIONS, Granularity, LocalStatus, pct(), ReportsPage() (+3 more)

### Community 13 - "Community 13"
Cohesion: 0.16
Nodes (11): Props, Props, UrgentRow(), AssignDropdown(), ComplaintDetailPanel(), SlaDisplay(), isBreached(), STATUS_META (+3 more)

### Community 14 - "Community 14"
Cohesion: 0.15
Nodes (15): AboutPage(), capabilities, processes, teamMembers, HomePage(), defaultTheme, FadedText(), FadedTextProps (+7 more)

### Community 15 - "Community 15"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 16 - "Community 16"
Cohesion: 0.10
Nodes (19): architectureRows, comparisonRows, differentiatorRows, DocumentationSection, envRows, failureRows, fastApiRows, glossaryRows (+11 more)

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (10): ComplaintRow, NotificationRow, defaultSidebarConfig, Sidebar(), SIDEBAR_DARK_COLORS, SIDEBAR_LIGHT_COLORS, SidebarBottomNavigationItem, SidebarConfig (+2 more)

### Community 18 - "Community 18"
Cohesion: 0.11
Nodes (10): ComplaintRow, ComplaintRow, supabase, CompositeTypes, Constants, DatabaseWithoutInternals, DefaultSchema, Json (+2 more)

### Community 19 - "Community 19"
Cohesion: 0.15
Nodes (10): Footer(), footerLinks, LandNavbar(), PhoneMockup(), timelineEntries, useTheme(), ContactPage(), Home() (+2 more)

### Community 20 - "Community 20"
Cohesion: 0.12
Nodes (13): defaultTheme, Header(), HeaderProps, HeaderTheme, defaultColors, ThemeToggle(), ThemeToggleProps, ToggleColors (+5 more)

### Community 21 - "Community 21"
Cohesion: 0.13
Nodes (15): getSeverityConfig(), getStatusMeta(), ALL_STATUSES, Complaint, getInitialTrackCache(), LocalStatus, MapComponent, Sev (+7 more)

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (13): geistMono, geistSans, metadata, playfair, viewport, AnimatedText(), AnimatedTextProps, AnimatedTextTheme (+5 more)

### Community 23 - "Community 23"
Cohesion: 0.16
Nodes (10): AdminStatCard(), AdminStatCardProps, AdminStatsOverview(), DashboardStats, formatAverageDays(), formatNumber(), initialStats, numberFormatter (+2 more)

### Community 24 - "Community 24"
Cohesion: 0.17
Nodes (11): AnimatedAuth(), AnimatedAuthProps, AUTH_COLORS_DARK, AUTH_COLORS_LIGHT, Role, roles, Turnstile, TurnstileProps (+3 more)

### Community 25 - "Community 25"
Cohesion: 0.14
Nodes (7): AuthorityFilters(), AuthorityFiltersProps, activeStatuses, activeStatusSet, baseDepartments, WorkerComplaintAssignmentRow, WorkerProfileRow

### Community 26 - "Community 26"
Cohesion: 0.23
Nodes (7): supabase, GAMIFICATION_CONFIG, GamificationReason, gamificationService, supabase, supabase, Database

### Community 27 - "Community 27"
Cohesion: 0.14
Nodes (13): ACTIVE_STATUSES, BY_LCODE, BY_STRING, ComplaintStatus, ESCALATED_STATUSES, PENDING_STATUSES, SEVERITY_RANK, SeverityConfig (+5 more)

### Community 28 - "Community 28"
Cohesion: 0.17
Nodes (5): activeStatuses, activeStatusSet, baseDepartments, AuthoritySearch(), AuthoritySearchProps

### Community 29 - "Community 29"
Cohesion: 0.19
Nodes (6): AuthorityProfileRow, CategoryRow, WorkerProfileRow, WorkloadLevel, activeStatuses, activeStatusSet

### Community 30 - "Community 30"
Cohesion: 0.19
Nodes (6): DepartmentPerformance, initialData, ComplaintRow, supabase, MaterialRequest, WarehouseItem

### Community 31 - "Community 31"
Cohesion: 0.19
Nodes (9): formatRelativeCreated(), TicketActions(), TicketActionsProps, TicketRow(), TicketRowProps, columnWidths, headers, TicketsTableProps (+1 more)

### Community 32 - "Community 32"
Cohesion: 0.15
Nodes (4): ComplaintRow, InventoryItem, MaterialRequestModalProps, RequestItem

### Community 33 - "Community 33"
Cohesion: 0.21
Nodes (8): Option, priorityOptions, statusOptions, TicketFiltersProps, initialFilters, PriorityFilter, TicketFiltersState, TicketStatusFilter

### Community 34 - "Community 34"
Cohesion: 0.18
Nodes (6): AuthorityLayout(), PAGE_META, usePageMeta(), KIND_CONFIG, Notif, NotifKind

### Community 35 - "Community 35"
Cohesion: 0.20
Nodes (8): Complaint, parseEwkbHexPoint(), parseLocation(), WORKFLOW_STEPS, AccountabilityHandles, CATEGORY_TWITTER_HANDLES, DEPARTMENT_TWITTER_HANDLES, getTieredTwitterHandles()

### Community 36 - "Community 36"
Cohesion: 0.35
Nodes (10): AuthorityDashboardPage(), buildAllTrends(), DashboardPayload, transformPayload(), buildDayBuckets(), buildSixMonthBuckets(), computeStats(), dayLabel() (+2 more)

### Community 37 - "Community 37"
Cohesion: 0.18
Nodes (7): PassTier, progressPassBase, RewardCatalogItem, RewardKind, RewardVisual, Wallet, WalletResponse

### Community 38 - "Community 38"
Cohesion: 0.20
Nodes (4): ComplaintAssignmentRow, activeStatuses, activeStatusSet, WorkerProfileRow

### Community 39 - "Community 39"
Cohesion: 0.38
Nodes (9): AssignDepartmentPayload, CreateAuthorityPayload, GET(), getBearerToken(), getSupabaseAdminClient(), isValidEmail(), PATCH(), POST() (+1 more)

### Community 40 - "Community 40"
Cohesion: 0.38
Nodes (9): AssignDepartmentPayload, CreateWorkerPayload, GET(), getBearerToken(), getSupabaseAdminClient(), isValidEmail(), PATCH(), POST() (+1 more)

### Community 41 - "Community 41"
Cohesion: 0.33
Nodes (7): AuthoritiesGrid(), AuthoritiesGridProps, AuthorityCard(), AuthorityCardProps, getInitials(), getWorkloadMeta(), AuthorityRecord

### Community 42 - "Community 42"
Cohesion: 0.22
Nodes (5): LINES, Props, VIEW_OPTIONS, ViewMode, TrendPoint

### Community 43 - "Community 43"
Cohesion: 0.43
Nodes (6): formatPriorityLabel(), severityToPriority(), PriorityBadge(), PriorityBadgeProps, priorityStyles, SeverityLevel

### Community 44 - "Community 44"
Cohesion: 0.25
Nodes (3): KIND_CONFIG, Notif, NotifKind

### Community 45 - "Community 45"
Cohesion: 0.25
Nodes (3): ComplaintRow, NotificationBellProps, WorkerNotification

### Community 46 - "Community 46"
Cohesion: 0.25
Nodes (3): KIND_CONFIG, Notif, NotifKind

### Community 47 - "Community 47"
Cohesion: 0.46
Nodes (7): extractBearerToken(), GET(), getAuthClient(), getServiceClient(), POST(), RedeemRequestBody, resolveUserId()

### Community 48 - "Community 48"
Cohesion: 0.29
Nodes (3): Props, StatCardProps, DashboardStats

### Community 49 - "Community 49"
Cohesion: 0.33
Nodes (5): AuthorityStatusBreakdown(), Props, STATUS_STYLES, AuthorityComplaintRow, getStatusBreakdown()

### Community 50 - "Community 50"
Cohesion: 0.40
Nodes (5): formatStatusLabel(), StatusBadge(), StatusBadgeProps, statusStyles, ComplaintStatus

### Community 51 - "Community 51"
Cohesion: 0.40
Nodes (5): supabase, ComplaintRow, GET(), parsePriorityToSeverity(), Enums

### Community 52 - "Community 52"
Cohesion: 0.33
Nodes (4): LeaderboardResponse, LeaderboardRow, LeaderboardTable(), LeaderboardPage()

### Community 53 - "Community 53"
Cohesion: 0.40
Nodes (4): DecorativeLine(), DecorativeLineProps, DecorativeLineTheme, defaultTheme

### Community 54 - "Community 54"
Cohesion: 0.40
Nodes (4): defaultTheme, Login3DTheme, LoginButton3D(), LoginButtonProps

### Community 55 - "Community 55"
Cohesion: 0.40
Nodes (3): defaultTheme, MapVisualProps, MapVisualTheme

### Community 58 - "Community 58"
Cohesion: 0.50
Nodes (3): AnimatedLeaderboard(), initialPlayers, Player

### Community 59 - "Community 59"
Cohesion: 0.83
Nodes (3): GET(), getAuthClient(), getServiceClient()

### Community 60 - "Community 60"
Cohesion: 0.83
Nodes (3): getAuthClient(), getServiceClient(), POST()

## Knowledge Gaps
- **461 isolated node(s):** `MapComponent`, `teamMembers`, `capabilities`, `processes`, `NotifKind` (+456 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `supabase` connect `Community 30` to `Community 1`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 8`, `Community 11`, `Community 12`, `Community 13`, `Community 17`, `Community 18`, `Community 21`, `Community 23`, `Community 24`, `Community 25`, `Community 28`, `Community 29`, `Community 32`, `Community 34`, `Community 35`, `Community 36`, `Community 37`, `Community 38`, `Community 44`, `Community 45`, `Community 46`, `Community 68`?**
  _High betweenness centrality (0.206) - this node is a cross-community bridge._
- **Why does `useTheme()` connect `Community 19` to `Community 1`, `Community 2`, `Community 3`, `Community 5`, `Community 14`, `Community 17`, `Community 20`, `Community 53`, `Community 22`, `Community 52`, `Community 24`, `Community 54`, `Community 58`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `Database` connect `Community 26` to `Community 0`, `Community 32`, `Community 35`, `Community 68`, `Community 3`, `Community 69`, `Community 39`, `Community 8`, `Community 40`, `Community 45`, `Community 47`, `Community 17`, `Community 18`, `Community 51`, `Community 56`, `Community 59`, `Community 60`, `Community 30`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **What connects `MapComponent`, `teamMembers`, `capabilities` to the rest of the system?**
  _461 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0576271186440678 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06078316773816481 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05389610389610389 - nodes in this community are weakly interconnected._