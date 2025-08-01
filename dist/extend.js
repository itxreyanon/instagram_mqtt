"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withFbnsAndRealtime = exports.withRealtime = exports.withFbns = exports.IgApiClientExt = void 0;
const instagram_private_api_1 = require("instagram-private-api");
const fbns_1 = require("./fbns");
const realtime_1 = require("./realtime");
const errors_1 = require("./errors");
class IgApiClientExt extends instagram_private_api_1.IgApiClient {
    async exportState() {
        const data = {};
        for (const hook of this.sateHooks) {
            data[hook.name] = await hook.onExport(this);
        }
        return JSON.stringify(data);
    }
    async importState(state) {
        if (typeof state === 'string')
            state = JSON.parse(state);
        for (const [key, value] of Object.entries(state)) {
            const hook = this.sateHooks.find(x => x.name === key);
            if (hook) {
                await hook.onImport(value, this);
            }
        }
    }
    constructor() {
        super();
        this.sateHooks = [];
        this.addStateHook({
            name: 'client',
            // we want to remove 'constants'
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onExport: async (client) => await client.state.serialize().then(({ constants, ...state }) => state),
            onImport: (data, client) => client.state.deserialize(data),
        });
    }
    addStateHook(hook) {
        if (this.sateHooks.some(x => x.name === hook.name))
            throw new errors_1.InvalidStateError('Hook already registered');
        this.sateHooks.push(hook);
    }
}
exports.IgApiClientExt = IgApiClientExt;
function withFbns(client) {
    client = assertClient(client);
    Object.defineProperty(client, 'fbns', { value: new fbns_1.FbnsClient(client), enumerable: false });
    if (client instanceof IgApiClientExt) {
        client.addStateHook({
            name: 'fbns',
            // @ts-ignore
            onExport: (client) => client.fbns.auth.toString(),
            // @ts-ignore
            onImport: (data, client) => client.fbns.auth.read(data),
        });
    }
    // @ts-ignore
    return client;
}
exports.withFbns = withFbns;
function withRealtime(client, mixins) {
    client = assertClient(client);
    Object.defineProperty(client, 'realtime', { value: new realtime_1.RealtimeClient(client, mixins), enumerable: false });
    // @ts-ignore
    return client;
}
exports.withRealtime = withRealtime;
function withFbnsAndRealtime(client, mixins) {
    client = assertClient(client);
    Object.defineProperty(client, 'fbns', { value: new fbns_1.FbnsClient(client), enumerable: false });
    Object.defineProperty(client, 'realtime', { value: new realtime_1.RealtimeClient(client, mixins), enumerable: false });
    if (client instanceof IgApiClientExt) {
        client.addStateHook({
            name: 'fbns',
            // @ts-ignore
            onExport: (client) => client.fbns.auth.toString(),
            // @ts-ignore
            onImport: (data, client) => client.fbns.auth.read(data),
        });
    }
    // @ts-ignore
    return client;
}
exports.withFbnsAndRealtime = withFbnsAndRealtime;
function assertClient(client) {
    if (!(client instanceof IgApiClientExt)) {
        return new IgApiClientExt();
    }
    // @ts-ignore
    return client;
}
//# sourceMappingURL=extend.js.map