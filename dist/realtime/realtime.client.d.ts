/// <reference types="node" />
import { IgApiClient } from 'instagram-private-api';
import { Commands, DirectCommands } from './commands';
import { ToEventFn } from '../shared';
import { MQTToTClient, MQTToTConnectionClientInfo } from '../mqttot';
import { MqttMessageOutgoing } from 'mqtts';
import { EventEmitter } from 'eventemitter3';
import { RealtimeClientEvents } from './realtime.client.events';
import { Mixin } from './mixins';
import { SocksProxy } from 'socks';
import { ConnectionOptions } from 'tls';
export interface RealtimeClientInitOptions {
    graphQlSubs?: string[];
    skywalkerSubs?: string[];
    irisData?: {
        seq_id: number;
        snapshot_at_ms: number;
    };
    connectOverrides?: MQTToTConnectionClientInfo;
    enableTrace?: boolean;
    autoReconnect?: boolean;
    mixins?: Mixin[];
    socksOptions?: SocksProxy;
    additionalTlsOptions?: ConnectionOptions;
}
export declare class RealtimeClient extends EventEmitter<ToEventFn<RealtimeClientEvents>> {
    get mqtt(): MQTToTClient | undefined;
    private realtimeDebug;
    private messageDebug;
    private _mqtt?;
    private connection?;
    private readonly ig;
    private initOptions?;
    private safeDisconnect;
    commands?: Commands;
    direct?: DirectCommands;
    /**
     *
     * @param {IgApiClient} ig
     * @param mixins - by default MessageSync and Realtime mixins are used
     */
    constructor(ig: IgApiClient, mixins?: Mixin[]);
    private setInitOptions;
    private constructConnection;
    connect(initOptions?: RealtimeClientInitOptions | string[]): Promise<any>;
    private emitError;
    private emitWarning;
    disconnect(): Promise<void>;
    graphQlSubscribe(sub: string | string[]): Promise<MqttMessageOutgoing>;
    skywalkerSubscribe(sub: string | string[]): Promise<MqttMessageOutgoing>;
    irisSubscribe({ seq_id, snapshot_at_ms, }: {
        seq_id: number;
        snapshot_at_ms: number;
    }): Promise<MqttMessageOutgoing>;
}
