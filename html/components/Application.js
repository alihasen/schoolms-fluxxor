import React from 'react';
import { FluxMixin, StoreWatchMixin } from './../flux'
var reactMixin = require('react-mixin');

import XLSX, { read, utils } from "xlsx";

class Application extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {username: "", password: "", table: []};

      this.handleSubmitClick = this.handleSubmitClick.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    getStateFromFlux() {
            var flux = this.getFlux();
                  return {
                            data: flux.store("MainStore").data
                         }
    }
    componentDidMount(){
	   this.getFlux().actions.getInitData();
    }
    handleSubmitClick(e){
      this.getFlux().actions.login(this.state.username, this.state.password)
      // this.getFlux().actions.submitTable(this.state.table);
    }
    handleUserChange(e){
      this.setState({username: e.target.value});
    }
    handlePasswordChange(e){
      this.setState({password: e.target.value});
    }
    readFile(e){
      var self = this;
      function fixdata(data) {
        var o = "", l = 0, w = 10240;
        for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
        o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
        return o;
      }

      var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer

      var files = e.target.files;
      var i,f;
      for (i = 0; i != files.length; ++i) {
        f = files[i];
        var reader = new FileReader();
        var name = f.name;
        reader.onload = function(e) {
          var data = e.target.result;

          var workbook;
          if(rABS) {
            /* if binary string, read with type 'binary' */
            workbook = read(data, {type: 'binary'});
          } else {
            /* if array buffer, convert to base64 */
            var arr = fixdata(data);
            workbook = read(btoa(arr), {type: 'base64'});
          }

          var first_sheet_name = workbook.SheetNames[0];
          var workSheet = workbook.Sheets[first_sheet_name];
          // console.log(workbook);
          /* DO SOMETHING WITH workbook HERE */
          var table = utils.sheet_to_json(workSheet);
          console.log(table);
          self.setState({"table": table})
        };
        reader.readAsBinaryString(f);
      }
    }
    render(){
    	return	<div>
                Username:  <input type = "text" onChange = {this.handleUserChange} value = {this.state.username} />
                Password: <input type= "password" onChange = {this.handlePasswordChange} value = {this.state.password} />
                <button type = "button" onClick = {this.handleSubmitClick}>Submit</button> 
                <input type  = "file" onChange = {this.readFile}/>
              </div>

  }
};

function autobind(methodNames) {
  return {
    componentWillMount: function() {
      methodNames.forEach((name) => {
        this[name] = this[name].bind(this)
      })

      if(this._componentWillMount)
        this._componentWillMount()
    }
  }
}


reactMixin.onClass(Application, FluxMixin)
reactMixin.onClass(Application, StoreWatchMixin('MainStore'))
reactMixin.onClass(Application, autobind(Object.keys(StoreWatchMixin)))

export {Application}
