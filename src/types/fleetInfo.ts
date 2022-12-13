export enum MaintenanceLevel {
  NORMAL = 1,
  SPECIFIC_MISSION_ONLY = 2,
  OCCUPY_ONLY = 3,
  OFFLINE = 4,
}

export type FleetInfo = {
  hasPallet: boolean;
  carrierId: string;
  error: string;
  rosStatus: string;
  machineStatus: string;
  smStatus: string;
  battery: number;
  hasCargo: boolean;
  maintenanceLevel: MaintenanceLevel;
};

export type CarrierInfo = {
  carrierId: string;
};

export type NGPalletInfo = {
  hasNGPallet: boolean;
};
