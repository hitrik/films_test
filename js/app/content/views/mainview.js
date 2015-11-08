"use strict";

var $ = require("jquery");
var Backbone = require("Backbone");
var _ = require("underscore");
Backbone.$ = $;
var HeadView = require("../../header/views/headview");

module.exports = Backbone.View.extend({
    el: "main",
    initialize: function() {
        this.render();
    },
    render: function() {
        new HeadView();
        return this;
    }
});