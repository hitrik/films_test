"use strict";

var $ = require("jquery");
var Backbone = require("Backbone");
var _ = require("underscore");
Backbone.$ = $;

module.exports = Backbone.View.extend({
    el: "header",
    initialize: function() {
        this.render();
    },
    render: function() {
        return this;
    }
});