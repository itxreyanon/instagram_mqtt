import { IgApiClient } from 'instagram-private-api';
import { FbnsClient } from './fbns';
import { RealtimeClient, Mixin } from './realtime';
export interface StateHook<T> {
    name: string;
    onExport: (client: IgApiClientExt) => PromiseLike<T> | T;
    onImport: (data: T, client: IgApiClientExt) => PromiseLike<void> | void;
}
export declare class IgApiClientExt extends IgApiClient {
    protected sateHooks: StateHook<any>[];
    exportState(): Promise<string>;
    importState(state: string | Record<string, unknown>): Promise<void>;
    constructor();
    addStateHook(hook: StateHook<any>): void;
}
export type IgApiClientFbns = IgApiClientExt & {
    fbns: FbnsClient;
};
export type IgApiClientRealtime = IgApiClientExt & {
    realtime: RealtimeClient;
};
export type IgApiClientMQTT = IgApiClientFbns & IgApiClientRealtime;
export declare function withFbns(client: IgApiClient | IgApiClientExt): IgApiClientFbns;
export declare function withRealtime(client: IgApiClient | IgApiClientExt, mixins?: Mixin[]): IgApiClientRealtime;
export declare function withFbnsAndRealtime(client: IgApiClient | IgApiClientExt, mixins?: Mixin[]): IgApiClientMQTT;
