var Fluxxor = require('fluxxor');

var constants = require("../constants");

var MainStore = Fluxxor.createStore({

    initialize : function() {
        this.data = {},

        this.bindActions(
            constants.INIT_DATA, this.onInitData
        );
    },

    onInitData: function(payload){
        this.data= payload.data;
        this.emit("change");
    }
 });


module.exports = {MainStore};
