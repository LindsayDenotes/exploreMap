
function userClicked(getVal){
        alert('user clicked: ' + getVal);
        return getVal;
        }

$(document).ready(function(){

/*var curElement = document.SELECTED?Element;
    function onClick(e) {
                console.log(e);
                var outputElement = document.getElementById('output-element');
    //**can i put a function here $(clicked on <#g>).ready(function(){...?*/

        //$( "#fl" ).bind( "click", function() { //Do I need to write 52 binding functions that will pass unique ID to the getJSON function?
        //alert( "User clicked on 'fl.'" );

        //});

       //var getState = "nh";


		var items = [];//**use object instead of array? http://www.mkyong.com/javascript/how-to-access-json-object-in-javascript

		  $.getJSON("stateInfoList.json", function( data ) {  //get resource function
			console.log(data);//Since you have array in your JSON, you need to target each instead in for loop below

			    //var getState = abv

			    $.each(data.items, function( key, val ) { //each() Iterate over a jQuery object, executing a function for **each matched element.
				  console.log( key, val ); //key is jsons index, val is whats inside jsons{ }, members or properties are abv, state, contacts.

                //**Can I specify unique ID in these parameters?

				//.push() is a function that adds an element on the end of the ARRAY and expands the array respectively.

				items.push( "<p id=state'" + key + "'>" + val.state + "<p id=contacts'>" + val.contacts + "'</p></p>");
				  console.log( "<p id=state'" + key + "'>" + val.state + "<p id=contacts'>" + val.contacts + "'</p></p>");

					  //add all <p> items to a not displayed <ul> element
					  $( "<ul/>", {
					  "class": "my-new-list",
					  html: items.join( "" ) //this joins all or **selected element(s)** back into a ~nonformatted~ string.//Put g#id in ("")?//
					  //join method only works with arrays, not jquery objects.

					  //jill from wwc rec'd i add a stop function in this loop.

					  }).appendTo( "#txtDOT" );//"class": "txtDOT",
				});//end each() iterator function

            //jQuery Selector $() function w optional 2nd parameter to do a search within an event handler
            //**This isn't doing anything
			$("li").on("click", function (e) {//Using e is just a short for event. You can pass any variable name you desire.
                				var $e = $(e.target);
                				clicked.css('background', 'red');
                				});

          });

});