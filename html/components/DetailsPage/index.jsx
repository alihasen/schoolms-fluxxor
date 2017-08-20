import React from 'react';
import { Router, Route, Link, Navigation, State } from 'react-router'


var Fluxxor = require('fluxxor');
import { FluxMixin, StoreWatchMixin, flux } from './../../flux';

var DetailsPage = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin("MainStore")],
      getStateFromFlux: function() {
          var flux = this.getFlux();
                  return {
                            data : flux.store("MainStore").detailData
			
                         }
    },
  	render: function(){
        return	<h3>this is index page</h3>
	   
  	}
});

export {DetailsPage};
