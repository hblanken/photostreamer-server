define(function() {

  'use strict';

  // TODO: Don't use global Backbone
  return Backbone.View.extend({

    initialize: function() {
      this.collection.once('sync', this.render, this);
      this.collection.on('reset', this.render, this);
      this.collection.on('add', this.render, this);
    },

    render: function() {
      var l = this.collection.length;

      this.$el.text(l);
    }

  });

});
