

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
                    // console.log(data);
			    	//You can use any jQuery/JavaScript here!!!
			      	if (data) {
				   		console.log('request sent!');
			      	} else {
			        	console.log("failed request");
			      	}
			    }
			  });
 	},
 	login: function(username, password){
 			$.ajax({
			  	//The URL to process the request
			    'url' : '/login',
			  	//The type of request, also known as the "method" in HTML forms
			  	//Can be 'GET' or 'POST'
			    'type' : 'POST',
			    'contentType': 'application/json',
			 	'data': JSON.stringify({"username": username, "password": password}),
			  	//The response from the server
			    'success' : function(data) {
                    console.log(data);
			    	//You can use any jQuery/JavaScript here!!!
			      	if (data === "success") {
				   		console.log('login successful');
			      	} else {
			        	console.log("login failed");
			      	}
			    }
			});
 	},

 	submitTable: function(table){
 			$.ajax({
			  	//The URL to process the request
			    'url' : '/insertdata',
			  	//The type of request, also known as the "method" in HTML forms
			  	//Can be 'GET' or 'POST'
			    'type' : 'POST',
			    'contentType': 'application/json',
			 	'data': JSON.stringify(table),
			  	//The response from the server
			    'success' : function(data) {
                    console.log(data);
			    	//You can use any jQuery/JavaScript here!!!
			      	if (data === "success") {
				   		console.log('login successful');
			      	} else {
			        	console.log("login failed");
			      	}
			    }
			});
 	}
};


module.exports = {actions};
