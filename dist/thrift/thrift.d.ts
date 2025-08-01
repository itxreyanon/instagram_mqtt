export interface ThriftMessage {
    context: string;
    field: number;
    value: any;
    type: number;
}
export type ThriftSerializable = string | number | boolean | bigint | Array<ThriftSerializable> | {
    [x: string]: ThriftSerializable;
} | Record<string, any>;
export declare const ThriftTypes: {
    STOP: number;
    TRUE: number;
    FALSE: number;
    BYTE: number;
    INT_16: number;
    INT_32: number;
    INT_64: number;
    DOUBLE: number;
    BINARY: number;
    LIST: number;
    SET: number;
    MAP: number;
    STRUCT: number;
    LIST_INT_16: number;
    LIST_INT_32: number;
    LIST_INT_64: number;
    LIST_BINARY: number;
    MAP_BINARY_BINARY: number;
    BOOLEAN: number;
};
export declare function isThriftBoolean(type: number): boolean;
export interface ThriftPacketDescriptor {
    fieldName: string;
    field: number;
    type: number;
    structDescriptors?: ThriftPacketDescriptor[];
}
export declare const ThriftDescriptors: {
    boolean: (fieldName: string, field: number) => ThriftPacketDescriptor;
    byte: (fieldName: string, field: number) => ThriftPacketDescriptor;
    int16: (fieldName: string, field: number) => ThriftPacketDescriptor;
    int32: (fieldName: string, field: number) => ThriftPacketDescriptor;
    int64: (fieldName: string, field: number) => ThriftPacketDescriptor;
    double: (fieldName: string, field: number) => ThriftPacketDescriptor;
    binary: (fieldName: string, field: number) => ThriftPacketDescriptor;
    listOfInt16: (fieldName: string, field: number) => ThriftPacketDescriptor;
    listOfInt32: (fieldName: string, field: number) => ThriftPacketDescriptor;
    listOfInt64: (fieldName: string, field: number) => ThriftPacketDescriptor;
    listOfBinary: (fieldName: string, field: number) => ThriftPacketDescriptor;
    mapBinaryBinary: (fieldName: string, field: number) => ThriftPacketDescriptor;
    struct: (fieldName: string, field: number, descriptors: ThriftPacketDescriptor[]) => {
        field: number;
        fieldName: string;
        type: number;
        structDescriptors: ThriftPacketDescriptor[];
    };
};
export type Int64 = number | bigint;
export declare function int64ToNumber(i64: Int64): number;
