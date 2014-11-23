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
