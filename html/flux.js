var Fluxxor = require('fluxxor');
var React = require('react');

var actions  = require('./actions/actions');
var MainStore = require('./stores/MainStore');

var stores = {
  MainStore: new MainStore.MainStore()
};

var flux = new Fluxxor.Flux(stores, actions.actions);
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;


module.exports = {flux , FluxMixin,  StoreWatchMixin } ;