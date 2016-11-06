<html>
<head>
<title>Nepal Java Interview Questions| Nabin Khadka|Java|Android|Python</title>   
<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<meta content="utf-8" http-equiv="encoding">
<meta name="description" content="Nepal Java Interview Questions. Nabin Khadka Computer Engineer, Java, Android, Python developer. Personal Portfolio, Personal Website, Nepal, Kathmandu, Dang" /> 
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src='_include/js/jquery-1.12.4.min.js'></script>
<link rel="shortcut icon" href="_include/img/myicon.ico" />
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.php">Back to Main Page</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Nepal Java Interview Questions</a></li>
      <li><a href="http://nabinkhadka.hubpages.com/" target="_blank">View Hubpages Blogs</a></li>
      <li><a href="#">StackOverFlow</a></li> 
      <li><a href="miscellanous.php">Miscellanous Blogs</a></li> 
    </ul>
  </div>
</nav>
<div class="container">
<h2>Java Interview Questions</h2>
        	<h5>I am going to share with you the java questions 
        	I have faced at inteviews in different IT companies here in Nepal
        	 (Like Deerwalk Inc, Verisk IT, Himalayan Technology, etc. I hope you find these helpful.)</h5>
    <div class="row">
        <div class="col-md-6">
            <div id="post_div" class="list-group"></div>
        </div>
        <div class="col-md-6">
            <div id="post_details_div">
            	<h2 id="post_details_div_title">Important Message</h2>
            	<h5 id="post_details_div_date"><span></span></h5>
            	<br>
            	<div id="post_details_div_body">I have tried my best to give answer in my own way. I don't claim to have 100% accurate answers to all the questions. My major concern is to share possible questions that you may face at Nepalese IT companies and share what I know to anyone out there.
            	<br><br>I am happy to hear any suggestions/corrections from you. Please message me at nbnkhadka14@gmail.com if you want to improve my answers.<br><br><br>Thanking you!!!<br>Regards,<br>Nabin Khadka<br>Kathmandu, Nepal.</div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">

	function displayFunc(data){
		var j = JSON.stringify(data);
		var json = $.parseJSON(j);
		var post_details_div = document.getElementById("post_details_div");
		for(var i in json){
			for(var j in json[i]){
				var post_title = document.getElementById("post_details_div_title");
				var post_body = document.getElementById("post_details_div_body");
				var post_date = document.getElementById("post_details_div_date");
				post_title.innerHTML = json[i][j].post_title;
				post_body.innerHTML = json[i][j].post_body;
				post_date.innerHTML = " "+json[i][j].post_date;
				post_date.className = "glyphicon glyphicon-time";
			}
		}
	}
	
	function displayBlog(){
		$.ajax({
    url: 'http://nabinkhadka.orgfree.com/php_files/get_blog_by_id.php?post_id='+this.id,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(data) { },
    error: function(request, status, error) {
    	console.log('Failed!');
    	console.log(request);
    	console.log(status);
    	console.log(error);
    }
});
	}
	function func(data){
		var j = JSON.stringify(data);
		var json = $.parseJSON(j);
		var post_div = document.getElementById("post_div");
		var counter = 1;
		for (var i in json) {
		   for (var j in json[i]) {
		     // console.log(json[i][j].post_title);
		     var title_anchor = document.createElement("a");
		     var title_span = document.createElement("span");

		     title_anchor.innerHTML = counter+". "+json[i][j].post_title;
		     counter = counter + 1;
		     title_anchor.className = "list-group-item";
		     title_anchor.href = "#";
		     title_anchor.id = json[i][j].post_id;
		     title_anchor.addEventListener("click", displayBlog, false);

		     var t = json[i][j].post_date.split(/[- :]/);
			 var dateObj = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
			 var month = dateObj.getUTCMonth() + 1; //months from 1-12
			 var day = dateObj.getUTCDate();
			 var year = dateObj.getUTCFullYear();
		     title_span.innerHTML = year + "/" + month + "/" + day;
		     title_span.className = "badge";
		     title_anchor.appendChild(title_span);		     
		     post_div.appendChild(title_anchor);
		   }
		   counter = counter + 1;
		}
	}
	$.ajax({
    url: 'http://nabinkhadka.orgfree.com/php_files/get_all_blogs_titles.php',
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(data) { },
    error: function(request, status, error) {
    	console.log('Failed!');
    	console.log(request);
    	console.log(status);
    	console.log(error);
    }
});
</script>

</body>
</html>