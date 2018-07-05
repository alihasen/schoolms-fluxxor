import React from 'react';
import { FluxMixin, StoreWatchMixin } from './../flux'

var XLSX = require("xlsx");

var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("MainStore")],
    getStateFromFlux: function() {
            var flux = this.getFlux();
                  return {
                            data: flux.store("MainStore").data
                         }
    },
    getInitialState: function(){
      return {username: "", password: "", table: []}
    },
    componentDidMount: function(){
	   this.getFlux().actions.getInitData();
    },
    handleSubmitClick: function(e){
      this.getFlux().actions.login(this.state.username, this.state.password)
      // this.getFlux().actions.submitTable(this.state.table);
    },
    handleUserChange: function(e){
      this.setState({username: e.target.value});
    },
    handlePasswordChange: function(e){
      this.setState({password: e.target.value});
    },
    readFile: function(e){
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
            workbook = XLSX.read(data, {type: 'binary'});
          } else {
            /* if array buffer, convert to base64 */
            var arr = fixdata(data);
            workbook = XLSX.read(btoa(arr), {type: 'base64'});
          }

          var first_sheet_name = workbook.SheetNames[0];
          var workSheet = workbook.Sheets[first_sheet_name];
          // console.log(workbook);
          /* DO SOMETHING WITH workbook HERE */
          var table = XLSX.utils.sheet_to_json(workSheet);
          console.log(table);
          self.setState({"table": table})
        };
        reader.readAsBinaryString(f);
      }
    },
    render: function(){
    	return	<div>
                Username:  <input type = "text" onChange = {this.handleUserChange} value = {this.state.username} />
                Password: <input type= "password" onChange = {this.handlePasswordChange} value = {this.state.password} />
                <button type = "button" onClick = {this.handleSubmitClick}>Submit</button> 
                <input type  = "file" onChange = {this.readFile}/>
              </div>

  }
});

export {Application}
