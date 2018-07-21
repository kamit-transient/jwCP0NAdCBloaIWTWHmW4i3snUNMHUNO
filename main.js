
    $(function() {
       $('.lazy').Lazy({
        // your configuration goes here
        
        effect: "fadeIn",
         effectTime:2000,
        visibleOnly: true,
        beforeLoad: function(element) {
            // called before an elements gets handled
        },
        afterLoad: function(element) {
            // called after an element was successfully handled
        },
        onError: function(element) {
            // called whenever an element could not be handled
        },
        onFinishedAll: function() {
           
        }
    });
    $('.card-img-top').Lazy({
        // your configuration goes here
        
        effect: "fadeIn",
         effectTime:5000,
        visibleOnly: true,
        beforeLoad: function(element) {
            // called before an elements gets handled
        },
        afterLoad: function(element) {
            // called after an element was successfully handled
        },
        onError: function(element) {
            // called whenever an element could not be handled
        },
        onFinishedAll: function() {
           
        }
    });
       $('.post-footer').Lazy({
        // your configuration goes here
        
        effect: "fadeIn",
         bind:"show",
         effectTime:5000,
        visibleOnly: true,
        beforeLoad: function(element) {
            
        },
        afterLoad: function(element) {
            // called after an element was successfully handled

        },
        onError: function(element) {
            // called whenever an element could not be handled
        },
        onFinishedAll: function() {
           
        }
    });

    });


function createSummaryAndThumb(pID){
var div = document.getElementById(pID).innerText;
var ellipsedText="";

  if(div.length>420){
ellipsedText=div.slice(0,420).concat("...");

  }
  else{
ellipsedText=div.concat("...");

  }

document.getElementById(pID).innerHTML = ellipsedText;
}

function makeImageResponsive(pId){

var size=$("img").length;
var images=$("img");
    for(var i=0;i<size;i++){

      if(images[i].parentElement.hasAttribute("style")){
		images[i].parentElement.removeAttribute("style");

      }
	images[i].className ="img-fluid bt-img-dimen";
    }


  }


 function readTime(pId,pText){


var textsArr=pText.split(" ");
var wordCount=textsArr.length;

var count=wordCount/265;
var requiredRead="";
   if(count < 1){
requiredRead="less than 1 min read"
   }
   else{
requiredRead=Math.round(count)+" min read"

   }
$("#"+pId+" #readTimeContent").text(requiredRead);
return requiredRead;

}


function timeStamp(pId,pText){


var timeagoInstance = timeago();
var requiredTime=timeagoInstance.format(pText);


$("#"+pId+" #timeStampContent").text(requiredTime);


}

  function getFrame(url){
$.ajax({
        type: 'GET',
        url: url })
  .done(function(res) {
debugger;
    alert( "success" );
  })
  .fail(function(res) {
debugger;
    alert( "error" );
  })
  .always(function(res) {
debugger;
    alert( "complete" );
  });

  }
