var Backbone = require('backbone');

var Entree = Backbone.Model.extend({
  idAttribute: '_id',
});

var EntreeCollection = Backbone.Collection.extend({
  model: Entree,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/prat'
});

var OrderCollection = Backbone.Collection.extend({
  model: Entree,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/pratorder',
  subTotal: function(){

    var subTotal = this.reduce(function(accum, i){
      return accum + i.get('price');
    }, 0);

    return subTotal.toFixed(2);
  }
});

module.exports = {
  Entree,
  EntreeCollection,
  OrderCollection
};
