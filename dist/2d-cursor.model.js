/**
 * A TUIO Cursor Object
 */
export class Tuio2DCursor {
    constructor(message) {
        this.sessionId = message.sessionId;
        this.xPosition = message.xPosition;
        this.yPosition = message.yPosition;
        this.xVelocity = message.xVelocity;
        this.yVelocity = message.yVelocity;
        this.motionAcceleration = message.motionAcceleration;
    }
}
