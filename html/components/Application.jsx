import React from 'react';
import {render} from 'react-dom';

var Fluxxor = require('fluxxor');
import { FluxMixin, StoreWatchMixin, flux } from './../flux'


var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("MainStore")],
    getStateFromFlux: function() {
            var flux = this.getFlux();
                  return {
                            data: flux.store("MainStore").data
                         }
    },
componentDidMount: function(){
	this.getFlux().actions.getInitData();
},
  render: function(){
    	return	<h1>hhhhhhhhhhiiiiiiiii</h1>;

  }
});

export {Application}
