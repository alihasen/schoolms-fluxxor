import React from 'react';
import { FluxMixin, StoreWatchMixin } from './../flux'
var reactMixin = require('react-mixin');
import autobind from "../utils/autobind"

class Application extends React.Component {
  constructor(props) {
    super(props);
  }
  getStateFromFlux() {
    var flux = this.getFlux();
    return {
      data: flux.store("MainStore").data
    }
  }
  componentDidMount() {
    this.getFlux().actions.getInitData();
  }
  render() {
    return <div>
      {this.props.children}
    </div>

  }
};

reactMixin.onClass(Application, FluxMixin)
reactMixin.onClass(Application, StoreWatchMixin('MainStore'))
reactMixin.onClass(Application, autobind(Object.keys(StoreWatchMixin)))

export { Application }
