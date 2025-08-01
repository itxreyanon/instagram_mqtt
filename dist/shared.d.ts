/// <reference types="node" />
import { IgApiClient } from 'instagram-private-api';
import { Debugger } from 'debug';
import { MqttClient } from 'mqtts';
export declare function createFbnsUserAgent(ig: IgApiClient): string;
export declare function compressDeflate(data: string | Buffer): Promise<Buffer>;
export declare function unzipAsync(data: string | Buffer): Promise<Buffer>;
export declare function tryUnzipAsync(data: Buffer): Promise<Buffer>;
export declare function isJson(buffer: Buffer): boolean;
/**
 * Returns a debug function with a path starting with ig:mqtt
 * @param {string} path
 * @returns {(msg: string, ...additionalData: any) => void}
 */
export declare const debugChannel: (...path: string[]) => Debugger;
export declare function notUndefined<T>(a: T | undefined): a is T;
export type BigInteger = string | number | bigint;
export type ToEventFn<T> = {
    [x in keyof T]: T[x] extends Array<unknown> ? (...args: T[x]) => void : (e: T[x]) => void;
};
export declare function listenOnce<T>(client: MqttClient<any, any>, topic: string): Promise<T>;
export declare function prepareLogString(value: string): string;
