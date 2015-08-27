var flag = false;	

$(document).on('pagebeforechange', function () {
    if(flag==false) {
        $.mobile.loading( "show" );
        flag=true;
    }
});

$(document).on('pageshow', function () {
	$.mobile.loading( "hide" );
    flag=false;
}); 

var postid = getQueryVariable("id");

$( document ).on( "pagebeforeshow", "#postIndex", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=1&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});




$( document ).on( "pagebeforeshow", "#postLanguage", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=language&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postRace", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=race&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postCulture", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=culture&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postTechnology", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=technology&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postScience", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=science&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postLifeology", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=lifeology&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});


$( document ).on( "pagebeforeshow", "#postFinance", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=finance&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postHistory", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=history&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postPhilosophy", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=philosophy&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});


$( document ).on( "pagebeforeshow", "#postMusic", function() {

	var url = "http://tamilneri.com/api/get_recent_posts/?json=get_category_posts&slug=music&count=100";

		$.ajax({
		   type: 'GET',
		    url: url,
		    async: false,
		    jsonpCallback: 'callback',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(json) {
		    	if(json.status=="ok") {
					posts(json);
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});



$( document ).on( "pagebeforeshow", "#postPage", function() {
                
    var postid = getQueryVariable("id");
    var url = "http://tamilneri.com/api/get_post/?post_id="+postid+"&callback=?";

    $.ajax({
       type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'callback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if(json.status=="ok") {
                post(json);
            }
            else {
                console.log("error");
            }
           
        },
        error: function(e) {
           console.log(e.message);
        }
    });
     
});



function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}

document.addEventListener('deviceready', function() {
 	setTimeout(function() { navigator.splashscreen.hide(); }, 3000);
});



function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function post(json) {

	document.getElementById("title").innerHTML = json.post.title;

    var html = "<h3>"+json.post.title+"</h3>";
    html += "<p>"+json.post.content+"</p>";

	document.getElementById("post").innerHTML = html;
}

function posts(json) {

    var html = "";

  	for (var i = 0; i < json.posts.length; i++)
	{
		
	   
	    if ("url" in json.posts[i]) {
	        var posturl = json.posts[i].url;	     
	    }

	    if ("id" in json.posts[i]) {
	        var postid = json.posts[i].id;	     
	    }
	    
	 	if ("title" in json.posts[i]) {
	      var postcontent = json.posts[i].title;}
		  
		  	if ("thumbnail" in json.posts[i]) {
	      var postthumbnail = json.posts[i].thumbnail;}
		  
		  
		  
	    else
	    if ("content" in json.posts[i]) {
	      var postcontent = json.posts[i].content;}
	    else var postcontent = "Başlıksız";

	    if (postcontent.length > 200) postcontent = strip(postcontent).substring(0,200);
	    else postcontent = strip(postcontent);

		if ("date" in json.posts[i]) {
	      	var date = json.posts[i].date;
	  	}
	  	else {
	  		var date = "null";
	  	}
        
        html = html + "<li data-icon=\"false" + "\">" + "<a href=\"post.html?id=" + postid + "\">" + '<img src="' + postthumbnail + '"/ height="80px"/ width="80px"/>' + "<h3>" + postcontent + "</h3>" + "<p>" + date + "</p></a></li>";
        
        document.getElementById("postsList").innerHTML = html;
        $("#postsList").listview("refresh");

	}	

}

function open_browser(link)
{
    window.open(link, '_blank', 'location=yes','closebuttoncaption=back');
}

function getParameter(query, url) {
 	var query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var expr = "[\\?&]"+query+"=([^&#]*)";
        var regex = new RegExp( expr );
        var results = regex.exec( url );

	if(results!=null) return results[1];
	else return false;
}

