enum Direction {
  LEFT = 0,
  RIGHT = 1,
}

enum Footprint {
  HORIZONTAL = 0,
  VERTICAL = 1,
  SQUARE = 2,
  ROUND = 3,
}

export const AreaType = {
  PALLET_PORT: '棧板補充機',
  CHARGING_STATION: '充電區',
  INPUT_STATION: '進貨點',
};

type Location = {
  locationId: string;
  x: number;
  y: number;
  canRotate: boolean;
  areaType:
    | '充電區'
    | '充電進貨匯流區'
    | '出貨點'
    | '進貨點'
    | '進貨前置點'
    | '流道暫停卸貨點'
    | '棧板補充機'
    | '第1L流道取貨點'
    | '第1R流道取貨點'
    | '第二流道取貨點'
    | '第三流道取貨點'
    | '第四流道取貨點'
    | '第五流道取貨點'
    | '第六流道取貨點'
    | '第七流道取貨點'
    | '第八流道取貨點'
    | '第九流道取貨點'
    | '第十流道取貨點'
    | '第十一流道取貨點'
    | '第十二流道取貨點'
    | '第十三流道取貨點'
    | '第十四流道取貨點'
    | '第十五流道取貨點'
    | '第16L流道取貨點'
    | '第16R流道取貨點'
    | '預派點';
  cost: number;
  connectedRoadIds: string[];
  rotation?: number; // base on horizontal
  footprint: Footprint;
  neighborIds: string[];
  specifiedNeighbors: string[];
  xyGoalTolerance: number;
  yawGoalTolerance: number;
  tolerance: number;
  inflationRadius: number;
};

type Road = {
  roadId: string;
  roadType: 'oneWayRoad' | 'twoWayRoad';
  spot1Id: string;
  spot2Id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  cost: number;
  tolerance: number;
  validYawList: number[] | '*';
  inflationRadius: number;
};

const FOOTPRINT_MAP = {
  [Footprint.HORIZONTAL]: [1.7, 1.5],
  [Footprint.VERTICAL]: [1.5, 1.7],
  [Footprint.SQUARE]: [1.7, 1.7],
};

const ROTATION_RADIUS = 1.049;

export { Location, Road, Direction, Footprint, FOOTPRINT_MAP, ROTATION_RADIUS };
