/**
 * A TUIO Object Object (an Object Object? whaaat?)
 */
export class Tuio2DObject {
    constructor(message) {
        this.sessionId = message.sessionId;
        this.classId = message.classId;
        this.xPosition = message.xPosition;
        this.yPosition = message.yPosition;
        this.aAngle = message.aAngle;
        this.xVelocity = message.xVelocity;
        this.yVelocity = message.yVelocity;
        this.aRotationSpeed = message.aRotationSpeed;
        this.motionAcceleration = message.motionAcceleration;
        this.rotationAccleration = message.rotationAccleration; // sic!
    }
}
