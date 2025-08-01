export declare const QueryIDs: {
    appPresence: string;
    asyncAdSub: string;
    clientConfigUpdate: string;
    directStatus: string;
    directTyping: string;
    liveWave: string;
    interactivityActivateQuestion: string;
    interactivityRealtimeQuestionSubmissionsStatus: string;
    interactivitySub: string;
    liveRealtimeComments: string;
    liveTypingIndicator: string;
    mediaFeedback: string;
    reactNativeOTA: string;
    videoCallCoWatchControl: string;
    videoCallInAlert: string;
    videoCallPrototypePublish: string;
    zeroProvision: string;
};
export interface GraphQLSubscription {
    subscriptionQueryId: string;
    inputParams: Record<string, any>;
}
export interface GraphQLSubBaseOptions {
    subscriptionId?: string;
    clientLogged?: boolean;
}
export declare class GraphQLSubscriptions {
    private static formatSubscriptionString;
    static getAppPresenceSubscription: (options?: GraphQLSubBaseOptions) => string;
    static getAsyncAdSubscription: (userId: string, options?: GraphQLSubBaseOptions) => string;
    static getClientConfigUpdateSubscription: (options?: GraphQLSubBaseOptions) => string;
    static getDirectStatusSubscription: (options?: GraphQLSubBaseOptions) => string;
    static getDirectTypingSubscription: (userId: string, clientLogged?: boolean) => string;
    static getIgLiveWaveSubscription: (broadcastId: string, receiverId: string, options?: GraphQLSubBaseOptions) => string;
    static getInteractivityActivateQuestionSubscription: (broadcastId: string, options?: GraphQLSubBaseOptions) => string;
    static getInteractivityRealtimeQuestionSubmissionsStatusSubscription: (broadcastId: string, options?: GraphQLSubBaseOptions) => string;
    static getInteractivitySubscription: (broadcastId: string, options?: GraphQLSubBaseOptions) => string;
    static getLiveRealtimeCommentsSubscription: (broadcastId: string, options?: GraphQLSubBaseOptions) => string;
    static getLiveTypingIndicatorSubscription: (broadcastId: string, options?: GraphQLSubBaseOptions) => string;
    static getMediaFeedbackSubscription: (feedbackId: string, options?: GraphQLSubBaseOptions) => string;
    static getReactNativeOTAUpdateSubscription: (buildNumber: string, options?: GraphQLSubBaseOptions) => string;
    static getVideoCallCoWatchControlSubscription: (videoCallId: string, options?: GraphQLSubBaseOptions) => string;
    static getVideoCallInCallAlertSubscription: (videoCallId: string, options?: GraphQLSubBaseOptions) => string;
    static getVideoCallPrototypePublishSubscription: (videoCallId: string, options?: GraphQLSubBaseOptions) => string;
    static getZeroProvisionSubscription: (deviceId: string, options?: GraphQLSubBaseOptions) => string;
}
