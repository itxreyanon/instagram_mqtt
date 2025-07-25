import { FbnsDeviceAuth } from './fbns.device-auth';
export interface FbnsMessageData {
    token?: string;
    pn?: string;
    nid?: string;
    ck?: string;
    fbpushnotif?: string;
    num_endpoints?: string;
}
export interface FbPushNotif {
    t?: string;
    m?: string;
    tt?: string;
    ig?: string;
    collapse_key?: string;
    i?: string;
    a?: string;
    sound?: string;
    pi?: string;
    c?: string;
    u?: string;
    s?: string;
    igo?: string;
    bc?: string;
    ia?: string;
    it?: string;
    si?: string;
    PushNotifID?: string;
}
export interface FbnsBadgeCount {
    direct?: number;
    ds?: number;
    activities?: number;
}
export type FbnsNotificationUnknown = FbnsNotification<unknown>;
export interface FbnsNotification<T> {
    original: FbPushNotif;
    title?: string;
    message?: string;
    tickerText?: string;
    igAction?: string;
    igActionOverride?: string;
    optionalImage?: string;
    optionalAvatarUrl?: string;
    collapseKey?: string;
    sound?: string;
    pushId?: string;
    pushCategory?: string;
    intendedRecipientUserId?: string;
    sourceUserId?: string;
    badgeCount?: FbnsBadgeCount;
    inAppActors?: string;
    actionPath?: string;
    actionParams?: T;
    higherPriorityApps?: string;
}
export type NotificationCallback<N, A> = FuncArg<N, FbnsNotification<A>>;
export type FuncArg<E, T> = [E, (e: T) => void];
/**
 * See: https://github.com/mgp25/Instagram-API/blob/master/src/Push.php
 * TODO: inspect
 * TODO: add regex?
 * The following events are emitted:
 */
export type NotificationEventCallback = FuncArg<'warning' | 'error', Error | Record<string, any>> | FuncArg<'auth', FbnsDeviceAuth> | FuncArg<'push' | 'silent_push', FbnsNotificationUnknown> | FuncArg<'exp_logging', {
    beacon_id: number;
}> | FuncArg<'pp', string> | FuncArg<'message', FbnsMessageData> | NotificationCallback<'post', {
    id: string;
}> | NotificationCallback<'first_post', {
    username: string;
}> | NotificationCallback<'resurrected_user_post', {
    id: string;
}> | NotificationCallback<'recent_follow_post', {
    id: string;
}> | NotificationCallback<'fb_first_post', {
    username: string;
}> | NotificationCallback<'first_bestie_post', {
    username: string;
    launch_reel?: string;
}> | NotificationCallback<'first_reel_post', {
    username: string;
    launch_reel?: string;
}> | NotificationCallback<'resurrected_reel_post' | 'story_poll_vote' | 'story_poll_close' | 'story_producer_expire_media' | 'story_poll_result_share' | 'story_daily_digest' | 'new_follower' | 'private_user_follow_request' | 'follow_request_approved' | 'contactjoined' | 'contact_joined_email' | 'fb_friend_connected' | 'follower_follow' | 'follower_activity_reminders' | 'comment' | 'mentioned_comment' | 'comment_on_tag' | 'comment_subscribed' | 'comment_subscribed_on_like' | 'reply_to_comment_with_threading' | 'like' | 'like_on_tag' | 'comment_like' | 'direct_v2_message' | 'live_broadcast' | 'live_with_broadcast' | 'live_broadcast_revoke' | 'aymt' | 'ad_preview' | 'branded_content_tagged' | 'business_profile' | 'usertag' | 'video_view_count' | 'copyright_video' | 'report_updated' | 'promote_account' | 'unseen_notification_reminders', unknown> | FuncArg<string, any> | [string, (...args: string[]) => void];
