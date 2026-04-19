export const MONTHS_IN_YEAR = 12;
export const COMPLAINTS_PER_WARD_PER_MONTH = 1860;

export const SOFTWARE_CLOUD_YEAR1_ONE_WARD = 237000;
export const SOFTWARE_CLOUD_MONTHLY_ONE_WARD = Math.round(
  SOFTWARE_CLOUD_YEAR1_ONE_WARD / MONTHS_IN_YEAR
);

export const PROJECT_COST_LINE_ITEMS = {
  prototypeTesting: 450000,
  machineryHardware: 0,
  teamStipends: 990000,
  executionDeployment: 50000,
  dashboardAppDev: 60000,
  contingencyFund: 142700,
} as const;

export const PROJECT_FIXED_EXCL_GST =
  PROJECT_COST_LINE_ITEMS.prototypeTesting +
  PROJECT_COST_LINE_ITEMS.machineryHardware +
  PROJECT_COST_LINE_ITEMS.teamStipends +
  PROJECT_COST_LINE_ITEMS.executionDeployment +
  PROJECT_COST_LINE_ITEMS.dashboardAppDev +
  PROJECT_COST_LINE_ITEMS.contingencyFund;

export const MAINTENANCE_COSTS = {
  cloudInfrastructureAnnual: 160000,
  developerSupportAnnual: 120000,
  apiRenewalsAnnual: 36000,
} as const;

export const MAINTENANCE_TOTAL_ANNUAL =
  MAINTENANCE_COSTS.cloudInfrastructureAnnual +
  MAINTENANCE_COSTS.developerSupportAnnual +
  MAINTENANCE_COSTS.apiRenewalsAnnual;

export function getComplaintsPerYear(wards: number): number {
  return wards * COMPLAINTS_PER_WARD_PER_MONTH * MONTHS_IN_YEAR;
}

export function getInfraAnnualCost(wards: number): number {
  return SOFTWARE_CLOUD_YEAR1_ONE_WARD * wards;
}

export function getInfraMonthlyCost(wards: number): number {
  return Math.round(getInfraAnnualCost(wards) / MONTHS_IN_YEAR);
}

export function getInfraPerGrievance(wards: number): number {
  return getInfraAnnualCost(wards) / getComplaintsPerYear(wards);
}

export function getProjectTotalExclGst(wards: number): number {
  return PROJECT_FIXED_EXCL_GST + getInfraAnnualCost(wards);
}

export function getProjectPerGrievanceExclGst(wards: number): number {
  return getProjectTotalExclGst(wards) / getComplaintsPerYear(wards);
}

export function formatInr(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function formatInrTwoDecimals(value: number): string {
  return `₹${value.toFixed(2)}`;
}

export function formatInrCompact(value: number): string {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`;
  }
  return formatInr(value);
}
