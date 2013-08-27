/* global $*/

var Wp_Widget = function (options) {
    this.initialize.apply(this, arguments);
    this.delegateEvents();
};

$.extend(Wp_Widget.prototype, {
    initialize: function () {
        console.log(arguments);
    },
    delegateEvents : function (events) {
        console.log('EVENTS fire!');
    }
});

Wp_Widget.extend = function (options) {
    $.extend(Wp_Widget.prototype, options);
    return new Wp_Widget();
};


