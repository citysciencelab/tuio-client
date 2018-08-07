import { TuioSetMessage } from './message.model';
/**
 * A TUIO Cursor Object
 */
export declare class Tuio2DCursor {
    sessionId: number;
    xPosition: number;
    yPosition: number;
    xVelocity: number;
    yVelocity: number;
    motionAcceleration: number;
    constructor(message: TuioSetMessage);
}
