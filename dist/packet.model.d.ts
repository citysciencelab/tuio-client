import { TuioSourceMessage, TuioAliveMessage, TuioSetMessage, TuioFseqMessage } from './message.model';
export interface TuioPacket {
    bundle: boolean;
    duplicate: boolean;
    messages: (TuioSourceMessage | TuioAliveMessage | TuioSetMessage | TuioFseqMessage)[];
    source: string;
}
