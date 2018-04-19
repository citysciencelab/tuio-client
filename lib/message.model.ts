export interface TuioMessage {
  profile: string;
}

export interface TuioSourceMessage extends TuioMessage {
  type: 'source';
  address: string;
}

export interface TuioAliveMessage extends TuioMessage {
  type: 'alive';
  sessionIds: number[];
}

export interface TuioSetMessage extends TuioMessage {
  type: 'set';
  sessionId: number;
  classId: number;
  xPosition: number;
  yPosition: number;
  aAngle: number;
  xVelocity: number;
  yVelocity: number;
  aRotationSpeed: number;
  motionAcceleration: number;
  rotationAccleration: number; // sic!
}

export interface TuioFseqMessage extends TuioMessage {
  type: 'fseq';
  frameID: number;
}