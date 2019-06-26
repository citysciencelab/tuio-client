/**
 * Adapted from: https://github.com/ekryski/caress-client
 * License: MIT
 * Copyright 2012 Eric Kryski
 */
import { TuioPacket } from './packet.model';
import { TuioSourceMessage, TuioAliveMessage, TuioSetMessage, TuioFseqMessage } from './message.model';
import { Tuio2DCursor } from './2d-cursor.model';
import { Tuio2DObject } from './2d-object.model';
export interface TuioClientOptions {
    enableCursorEvent?: boolean;
    enableObjectEvent?: boolean;
}
/**
 * Service implementing TUIO cursor and object events. Touch functionality is based on PointerEvent,
 * so it only works with clients supporting PointerEvent.
 */
export declare class TuioClient {
    private options;
    protocol: string;
    socketUrl: string;
    defaultPacketSource: string;
    connected: boolean;
    private socket;
    private cursors;
    private objects;
    private clientSupportsPointerEvent;
    constructor(options?: TuioClientOptions);
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
