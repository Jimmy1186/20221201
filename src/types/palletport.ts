export type PalletPortInfo = {
  palletPortId: string;
  isInService: boolean;
  count: number;
  lowestPalletId?: string;
};

export enum PalletPortAction {
  Load = 0,
  Offload = 1,
  CollectionOffload = 2,
}

export default undefined;
