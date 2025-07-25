/// <reference types="node" />
import { ThriftMessage, ThriftPacketDescriptor } from './thrift';
export declare function thriftRead(message: Buffer): ThriftMessage[];
export type ThriftToObjectResult<T> = Partial<T> & {
    otherFindings?: (ThriftMessage | ThriftToObjectStruct)[];
};
export interface ThriftToObjectStruct {
    fieldPath: number[];
    items: ThriftMessage[];
}
export declare function thriftReadToObject<T extends Record<string, any>>(message: Buffer, descriptors: ThriftPacketDescriptor[]): ThriftToObjectResult<T>;
export declare class BufferReader {
    private buffer;
    private _stack;
    get stack(): number[];
    private _position;
    get position(): number;
    get length(): number;
    private _field;
    get field(): number;
    readInt16: () => number;
    readInt32: () => number;
    constructor(buffer: Buffer);
    private move;
    readByte: () => number;
    readSByte: () => number;
    readVarInt(): number;
    readVarBigint(): bigint;
    zigzagToBigint(n: bigint): bigint;
    readBigint(): {
        int: bigint;
        num: number;
    };
    readSmallInt(): number;
    readField(): number;
    readString: (len: number) => string;
    readList(size: number, type: number): (number | boolean | string)[];
    pushStack(): void;
    popStack(): void;
    static fromZigZag: (n: number) => number;
}
