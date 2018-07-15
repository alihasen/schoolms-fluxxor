import React from 'react';

import { FluxMixin, StoreWatchMixin } from './../../flux';

var reactMixin = require('react-mixin');

import autobind from "../../utils/autobind"

class DetailsPage extends React.Component {
      constructor(props) {
            super(props);
      }
      getStateFromFlux() {
            var flux = this.getFlux();
            return {
                  data: flux.store("MainStore").detailData

            }
      }
      render() {
            return <h3>this is index page</h3>

      }
}


reactMixin.onClass(DetailsPage, FluxMixin)
reactMixin.onClass(DetailsPage, StoreWatchMixin('MainStore'))
reactMixin.onClass(DetailsPage, autobind(Object.keys(StoreWatchMixin)))

export { DetailsPage };
