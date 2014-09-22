$(document).ready(function(){

    var items = {};
    $.getJSON("stateInfoList.json", function(data) {
      console.log (data);//whole JSON object

      $(".svg-container").addClass("not-clicked");

        $("g").on("click", function (e) {
           console.log("user clicked " + this.id);

           $(this).removeClass("not-clicked");//not removing the class from 'this' shape on click

           // $(".clicked").on("click", function() {
           //   $(this).addClass("clicked").removeClass("not-clicked").off("click");
           // });

           //$("g").toggleClass("clicked");//try toggleAttribute??
           //$(".svg-content").toggleClass("clicked");

           //$(this).css("fill-opacity", "0.1");//this works but doesn't go off when next shape is clicked. Hmmm.

            /*not hurting or helping
            var $e = $(e.currentTarget);
            $(this).filter(x).css( "fill-opacity", "0.1" );
            */

            selectedState = (this.id);
              console.log("so var selectedState is " + selectedState);

                     $.each ( data, function( key, val ){
                      console.log ( key, val );//key is "nh" or "fl", val is whats inside json's { }s

                        var jsonKey = ( key );
                          console.log ("this is one of all loaded state keys: " + jsonKey);

                           if (jsonKey == selectedState){
                            console.log("selectedState ID " + selectedState + " MATCHES key: " + jsonKey);
                            console.log(val.contacts);

                            var contactsText = (val.contacts);
                              contactsText = contactsText.replace(/\n/g, "<br />");
                              console.log(contactsText);

                              $("#txtDOT").html("<p id='state " + key + "'>" + val.state + "</p>");
                              $("#txtDOT").append("<p id='contacts'>" + contactsText + "</p>");

                           }

                           else {
                           console.log("selectedState ID " + selectedState + " does NOT match key: " + jsonKey)
                           }

                    });

                /*jQuery Selector $() function w optional 2nd parameter to do a search within an event handler
                $("g").on("click", function (e) {//Using e is just a short for event. You can pass any variable name you desire.
                     var $e = $(e.target);//target is #txtDOT
                     clicked.css("background", "red");
                });
                */
        });

    });

});

