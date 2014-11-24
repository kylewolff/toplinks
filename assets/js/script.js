$(function aboutLoad(){
    // don't cache ajax or content won't be fresh
    $.ajaxSetup ({
        cache: false
    });
      var ajax_load = "<img src='http://automobiles.honda.com/images/current-offers/small-loading.gif' alt='loading...' />";
    // load() functions
    var loadUrl = "pages/about.html";
    $("#about").click(function(){
        $("#mainContent").html(ajax_load).load(loadUrl);
    });

// end  
});

//Footer - About AJAX Load
$(function aboutLoad(){
    // don't cache ajax or content won't be fresh
    $.ajaxSetup ({
        cache: false
    });
      var ajax_load = "<img src='http://automobiles.honda.com/images/current-offers/small-loading.gif' alt='loading...' />";
    // load() functions
    var loadUrl = "pages/about.html";
    $("#aboutFooter").click(function(){
        $("#mainContent").html(ajax_load).load(loadUrl);
    });

// end  
});



$(function linkLoad(){
    // don't cache ajax or content won't be fresh
    $.ajaxSetup ({
        cache: false
    });
      var ajax_load1 = "<img src='http://automobiles.honda.com/images/current-offers/small-loading.gif' alt='loading...' />";
    // load() functions
    var loadUrl1 = "pages/mainContent.html";
    $("#logo").click(function(){
        $("#mainContent").html(ajax_load1).load(loadUrl1);
    });

// end  
});

//Modal AJAX - Message
$.ajax({
  dataType: 'jsonp',
  url: "http://getsimpleform.com/messages/ajax?form_api_token=53909f2953627d4a7f2ee999608aa018",
  data: {
    name: "John",
    message: "Boston",
  }
}).done(function() {
  //callback which can be used to show a thank you message
  //and reset the form
  alert("Thank you, for contacting us");
});
