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
    getInitialState: function(){
      return {username: "", password: ""}
    },
    componentDidMount: function(){
	   this.getFlux().actions.getInitData();
    },
    handleSubmitClick: function(e){
      this.getFlux().actions.login(this.state.username, this.state.password);
    },
    handleUserChange: function(e){
      this.setState({username: e.target.value});
    },
    handlePasswordChange: function(e){
      this.setState({password: e.target.value});
    },
    render: function(){
    	return	<div>
                Username:  <input type = "text" onChange = {this.handleUserChange} value = {this.state.username} />
                Password: <input type= "password" onChange = {this.handlePasswordChange} value = {this.state.password} />
                <button type = "button" onClick = {this.handleSubmitClick}>Submit</button> 
              </div>

  }
});

export {Application}
