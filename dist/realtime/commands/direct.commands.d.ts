import { MQTToTClient } from '../../mqttot';
import { MessageSyncMessageTypes } from '../messages';
import { ThriftPacketDescriptor } from '../../thrift';
import { MqttMessageOutgoing } from 'mqtts';
interface ItemBaseType {
    threadId: string;
    clientContext?: string;
}
export interface ForegroundState {
    inForegroundApp?: boolean;
    inForegroundDevice?: boolean;
    keepAliveTimeout?: number;
    subscribeTopics?: string[];
    subscribeGenericTopics?: string[];
    unsubscribeTopics?: string[];
    unsubscribeGenericTopics?: string[];
    requestId?: bigint;
}
export declare class DirectCommands {
    private directDebug;
    private client;
    private chance;
    foregroundStateConfig: ThriftPacketDescriptor[];
    constructor(client: MQTToTClient);
    sendForegroundState(state: ForegroundState): Promise<MqttMessageOutgoing>;
    private sendCommand;
    private sendItem;
    sendHashtag({ text, threadId, hashtag, clientContext, }: {
        text?: string;
        hashtag: string;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
    sendLike({ threadId, clientContext }: ItemBaseType): Promise<MqttMessageOutgoing>;
    sendLocation({ text, locationId, threadId, clientContext, }: {
        text?: string;
        locationId: string;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
    sendMedia({ text, mediaId, threadId, clientContext, }: {
        text?: string;
        mediaId: string;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
    sendProfile({ text, userId, threadId, clientContext, }: {
        text?: string;
        userId: string;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
    sendReaction({ itemId, reactionType, clientContext, threadId, reactionStatus, targetItemType, emoji, }: {
        itemId: string;
        reactionType?: 'like' | string;
        reactionStatus?: 'created' | 'deleted';
        targetItemType?: MessageSyncMessageTypes;
        emoji?: string;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
    sendUserStory({ text, storyId, threadId, clientContext, }: {
        text?: string;
        storyId: string;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
    sendText({ text, clientContext, threadId }: {
        text: string;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
    markAsSeen({ threadId, itemId }: {
        threadId: string;
        itemId: string;
    }): Promise<MqttMessageOutgoing>;
    indicateActivity({ threadId, isActive, clientContext }: {
        isActive?: boolean;
    } & ItemBaseType): Promise<MqttMessageOutgoing>;
}
export {};
