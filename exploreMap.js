$(document).ready(function(){

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

  $("g").on("click", function (e) {
     console.log(this.id);
       //var $( "g" ).data( "key" ) === this; or  this.id === this; still trying to zero in on the selected state key in JSON file
        var $e = $(e.currentTarget);//target is this.id
        //clicked.css('background', 'blue');//clicked is not defined yet

        var items = [];

        $.getJSON('stateInfoList.json', function( data ) {
            console.log ( data );//whole JSON object

            $.each ( data, function( key, val ){
              console.log ( key, val );//key is 'fl', val is whats inside { }s

              items.push( "<p id=state " + key + ">" + val.state + "<p id=contacts>" + val.contacts + "</p></p>");
               console.log( "<p id=state " + key + ">" + val.state + "<p id=contacts>" + val.contacts + "</p></p>");

                  //add all <p> items to a <ul>
                  $( "<ul>", { //style='display:none';>"
                        "class": "my-new-list",

                         html: items.join( "" ) //this joins all or **selected element(s)** back into a ~nonformatted~ string.//Put g#id in ("")?//
                          //join method only works with arrays, not jquery objects.
                  }).appendTo( "#txtDOT" );//

                    //jQuery Selector $() function w optional 2nd parameter to do a search within an event handler
                    $("p").on("click", function (e) {//Using e is just a short for event. You can pass any variable name you desire.
                        var $e = $(e.target);//target is #txtDOT
                        clicked.css('background', 'red');
                    });

            });

                         //$('#txtDOT').html('<p id=state" + key + "'>' + val.state + '"</p>'); If I used plain object instead of array,
                         //$('#txtDOT').append('<p id=contacts">' + val.contacts + '"</p>'); this might have worked

        });

  });

});

