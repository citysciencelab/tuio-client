import { TuioSetMessage } from './message.model';
/**
 * A TUIO Object Object (an Object Object? whaaat?)
 */
export declare class Tuio2DObject {
    sessionId: number;
    classId: number;
    xPosition: number;
    yPosition: number;
    aAngle: number;
    xVelocity: number;
    yVelocity: number;
    aRotationSpeed: number;
    motionAcceleration: number;
    rotationAccleration: number;
    constructor(message: TuioSetMessage);
}
