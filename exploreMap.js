//var curElement = document.SELECTED?Element;
    //function onClick(e) {
      //          console.log(e);
        //        var outputElement = document.getElementById('output-element');

//var getState = "nh";

//var g = document.querySelector('#fl')
  //      console.log('user clicked ');


//$( "#fl" ).bind( "click", function(){
  //      console.log('user clicked ' + "#");

        /*;(function(){

        var stateID = document.querySelectorAll( 'g' )[0];
        g.addEventListener( 'click', function( e ){

              console.log( e.target, e.currentTarget ); //div, div
              e.preventDefault();

          });

        }());*/

$(document).ready(function(){

    var items = [];

    $.getJSON("stateInfoList.json", function( data ) {
        console.log ( data );//whole JSON object

        $("g").on("click", function (e) {
           console.log(this.id);
           //var $e = $(e.currentTarget);//target should be clicked shape but I can't tell yet
            //clicked.css("background", "blue");//clicked is not defined yet
            var selectedState = (this.id);
              console.log(selectedState);

            $.each ( data.items, function( key, val ){
              console.log ( key, val );//key is "00" or "01", val is whats inside json's { }s

                $.each( data.items, function(){
                    //console.log("Abv: " + this.abv);
                    //console.log("State: " + this.state);
                    //console.log("Contacts: " + this.contacts);

                        if (this.abv = selectedState){
                        console.log("match " + selectedState + key);

                       // var i = selectedState

                        //items.i.push( "<p id='state " + key + "'>" + val.state + "<p id='contacts'>" + val.contacts + "'</p></p>");
                          //console.log( "<p id='state " + key + "'>" + val.state + "<p id='contacts'>" + val.contacts + "'</p></p>");

                        //$("#txtDOT")
                        //  .html( "<p>All new content. <em>You bet!</em></p>" );

                         // $("txtDOT").html(function(index,currentcontent)

                        }

                            else {
                            console.log("selectedState ID doesn't match any abv!")
                            }
                });

          	});

          /*items.push( "<p id='state " + key + "'>" + val.state + "<p id='contacts'>" + val.contacts + "'</p></p>");
          	console.log( "<p id='state " + key + "'>" + val.state + "<p id='contacts'>" + val.contacts + "'</p></p>");

              //add all <p> items to a <ul>
              $( "<ul>", { //style="display:none";>
                    "class": "my-new-list",

                     html:items.join( "" ) //this joins all or **selected element(s)** back into a ~nonformatted~ string.//("")accepts no arguments//
                      //join method only works with arrays, not jquery objects.
              }).appendTo( "#txtDOT" );//

                //jQuery Selector $() function w optional 2nd parameter to do a search within an event handler
                $("p").on("click", function (e) {//Using e is just a short for event. You can pass any variable name you desire.
                     var $e = $(e.target);//target is #txtDOT
                     clicked.css("background", "red");
                });
            */
        });

    });

});

//If I use plain object instead of array, this might work:
//$("#txtDOT").html("<p id='state " + key + "'>" + val.state + "'</p>");
//$("#txtDOT").append("<p id='contacts'>" + val.contacts + "'</p>");
