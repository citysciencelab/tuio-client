import { TuioPacket } from './packet.model';
import { TuioSourceMessage, TuioAliveMessage, TuioSetMessage, TuioFseqMessage } from './message.model';
import { Tuio2DCursor } from './2d-cursor.model';
import { Tuio2DObject } from './2d-object.model';
/**
 * Service implementing TUIO cursor and object events. Touch functionality is based on PointerEvent,
 * so it only works with clients supporting PointerEvent.
 */
export declare class TuioClient {
    protocol: string;
    socketUrl: string;
    defaultPacketSource: string;
    private socket;
    private connected;
    private cursors;
    private objects;
    private clientSupportsPointerEvent;
    constructor();
    connect(socketUrl: string): void;
    onConnect(): void;
    onDisconnect(): void;
    ensureArraysAreInitialized(key: string): void;
    processPacket(packet: TuioPacket): void;
    process2DCursor(packet: TuioPacket, message: TuioSourceMessage | TuioAliveMessage | TuioSetMessage | TuioFseqMessage): void;
    process2DObject(packet: TuioPacket, message: TuioSourceMessage | TuioAliveMessage | TuioSetMessage | TuioFseqMessage): void;
    createPointerEvent(type: string, cursor: Tuio2DCursor): void;
    createObjectEvent(type: string, object: Tuio2DObject): void;
}
