"use strict";

var $ = require("jquery");
var Backbone = require("Backbone");
var _ = require("underscore");
Backbone.$ = $;
var HeadView = require("../../header/views/headview");
var MovieCollection = require("../models/moviemodel");
var MovieView = require("./movieview");

module.exports = Backbone.View.extend({
    el: "main",
    initialize: function() {
        this.listenTo(this.collection, "reset", this.render);
        this.render();
    },
    render: function() {
        new HeadView();
        new MovieView({
            collection: this.items
        });
        return this;
    },
    fillData: function() {
        this.model.getNewMovies(function(data) {
            new MovieCollection().reset(data);
        });
    }
});