"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
var Listener = /** @class */ (function () {
    function Listener(client) {
        this.ackWait = 5 * 1000;
        this.client = client;
    }
    Listener.prototype.subscriptionOptions = function () {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable() // the very first time a listener is created -> send all prior events to the listener. This is ignored on restart and only used when we bring the listener online for the first time
            .setManualAckMode(true) // set acknoledge mode true (ensures that publisher knows that event has been processed) - after app process event it will respond successfully published event. If it does not process you can do something with it.  you have to write code to tell listeners you processed successfully
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName); // the events we delivered in the past will be marked as delivered
    };
    Listener.prototype.listen = function () {
        var _this = this;
        // implement queue groups so that we process in a round robin form. Each event is only processed once
        console.log('listening!!!');
        console.log(this.subject);
        console.log(this.queueGroupName);
        console.log(this.subscriptionOptions());
        try {
            var subscription = this.client.subscribe(this.subject, this.queueGroupName, // even if we disconnect all services the durable name will be maintained
            this.subscriptionOptions());
            subscription.on('message', function (msg) {
                console.log("Message received " + _this.subject + " / " + _this.queueGroupName);
                var parsedData = _this.parseMessage(msg);
                _this.onMessage(parsedData, msg);
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    Listener.prototype.parseMessage = function (msg) {
        var data = msg.getData();
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'));
    };
    return Listener;
}());
exports.Listener = Listener;
