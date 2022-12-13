export enum StationActReq {
  NO_REQ = 0, // Skip.
  LOAD_REQ = 1, // Location need a pallet. Fire deliver-pallet mission.
  UNLOAD_REQ = 2, // Skip. Shipment mission will fire through CarrierMoveRequest.
}

export type StationInfo = {
  stationId: string;
  isInService: boolean;
  actReq: StationActReq;
  booker: string;
  emptiedAt: Date;
  fulledAt: Date;
};
