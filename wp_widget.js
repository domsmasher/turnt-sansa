/* global $*/
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

var Wp_Widget = function (options) {
    this.initialize.apply(this, arguments);
    this.delegateEvents();
};

$.extend(Wp_Widget.prototype, {
    initialize: function () {
        console.log(arguments);
    },
    delegateEvents : function (events) {
        events = this.events
//        if (!events || !(events = this.events)) {
//            return this;
//        }
        for (var key in events) {
            var method = events[key];
            var match = key.match(delegateEventSplitter);
            var eventName = match[1], selector = match[2];
            method = $.proxy(method, this);
            eventName += '.delegateEvents' + this.cid;
            if (selector === '') {
                this.$el.on(eventName, method);
            } else {
                this.$el.on(eventName, selector, method);
            }
        }
        console.log(this.events);
        console.log('EVENTS fire!');

        return this;
    }
});

Wp_Widget.extend = function (options) {
    $.extend(Wp_Widget.prototype, options);
    return new Wp_Widget();
};


