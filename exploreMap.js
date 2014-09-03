$(document).ready(function(){

//var curElement = document.SELECTED?Element;
    //function onClick(e) {
      //          console.log(e);
        //        var outputElement = document.getElementById('output-element');

//var getState = "nh";

//var g = document.querySelector('#fl')
  //      console.log('user clicked ');

  //    g.dataId

//$( "#fl" ).bind( "click", function(){
  //      console.log('user clicked ' + "#");

        /*;(function(){

        var stateID = document.querySelectorAll( 'g' )[0];
        g.addEventListener( 'click', function( e ){

              console.log( e.target, e.currentTarget ); //div, div
              e.preventDefault();

          });

        }());*/

  $('g').on('click', function (event) {
     console.log(this.id);
       //var id = key

       	var states = {};

        //function = $.getJSON();
		  $.getJSON("stateInfoList.json", function( data ) {  //get resource function
			console.log(data);//


			      $.each(data, function( key, val ) { //each() Iterate over a jQuery object, executing a function for **each matched element.
				  console.log( key, val ); //key is 'fl', val is whats inside { }, members are state, contacts.

				//.push() is a function that adds an element on the end of the ARRAY and expands the array respectively.

				data.push( "<p id=state'" + key + "'>" + val.state + "<p id=contacts'>" + val.contacts + "'</p></p>");
				  console.log( "<p id=state'" + key + "'>" + val.state + "<p id=contacts'>" + val.contacts + "'</p></p>");

					  //add all <p> items to a not displayed <ul> element
					 /* $( "<ul/>", {
					  "class": "my-new-list",
					  html: items.join( "" ) //this joins all or **selected element(s)** back into a ~nonformatted~ string.//Put g#id in ("")?//
					  //join method only works with arrays, not jquery objects.

					  //jill from wwc rec'd i add a stop function in this loop.

					  }).appendTo( "#txtDOT" );//"class": "txtDOT",*/
				});//end each() iterator function

            //jQuery Selector $() function w optional 2nd parameter to do a search within an event handler
            //**This isn't doing anything
			$("li").on("click", function (e) {//Using e is just a short for event. You can pass any variable name you desire.
                				var $e = $(e.target);
                				clicked.css('background', 'red');
                				});

          });
  });

});

