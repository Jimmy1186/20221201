export type OpMoveCommand = {
  cmdId: number;
  type: 'move';
  x: number;
  y: number;
  tolerance: number;
  inflationRadius: number;
};

export type OpStayCommand = {
  cmdId: number;
  type: 'stay';
  x: number;
  y: number;
  tolerance: number;
  inflationRadius: number;
};

export type OpParkCommand = {
  cmdId: number;
  type: 'park';
  x: number;
  y: number;
  yaw: number;
  locationId: string;
  xyGoalTolerance: number;
  yawGoalTolerance: number;
  tolerance: number;
  inflationRadius: number;
};

export type OpRotateCommand = {
  cmdId: number;
  type: 'rotate';
  yaw: number;
  tolerance: number;
  inflationRadius: number;
};

export type OperatingCommand =
  | OpMoveCommand
  | OpStayCommand
  | OpParkCommand
  | OpRotateCommand;
