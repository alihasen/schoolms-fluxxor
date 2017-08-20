var constants = require("../constants");


/*When the page loads, getinitData function will called*/

var actions = {
	getInitData: function(){
			$.ajax({
			  	//The URL to process the request
			    'url' : '/abc',
			  	//The type of request, also known as the "method" in HTML forms
			  	//Can be 'GET' or 'POST'
			    'type' : 'GET',
			 
			  	//The response from the server
			    'success' : function(data) {
                    console.log(data);
			    	//You can use any jQuery/JavaScript here!!!
			      	if (data) {
				   		console.log('request sent!');
			      	} else {
			        	console.log("failed request");
			      	}
			    }
			  });

 	}
};


module.exports = {actions};
