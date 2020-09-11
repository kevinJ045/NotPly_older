/*

               ██    █████████     ██
           ██████    ╚══██╔══╝     ████
         ████████       ██║        ██████
       ██████████       ██║        ████████
     ████████████       ██║        ██████████
   ██████████████       ██║        ████████████ 
 ████████████████    █████████╗    ██████████████
                     ╚════════╝
 
████████╗██╗  ██╗███████╗███╗   ███╗███████╗███████╗
╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝██╔════╝
   ██║   ███████║█████╗  ██╔████╔██║█████╗  ███████╗
   ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  ╚════██║
   ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗███████║
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝

NotPly version 1.0.5.6.2.55.1

Sorry Guys. the code is so simple and 100% stupid,
but you can edit everything 
if you have a better method

YOU ARE FREE TO EDIT EVERYTHING


*/

!(function($) {
  "use strict";



  class NotPly;

var LolyCont;

var NotPly.prototype.NotPlyInitiate = function(AppLication){
	LolyCont = AppLication
}

var DocumentTitle = document.title;
var winHref = window.location.hash;

$("[data-notply=true]").click(function(e){
	
e.preventDefault();
 

  $(".notply [data-close-notply]").click();

	var message = $(this).attr("data-notification");
	var themeNotif = $(this).attr("data-notply-theme");
	var iconNotif = $(this).attr("data-notply-icon");
	var notplyPlaceholder = $(this).attr("data-notply-input-placeholder");
	var NotifButton = $(this).attr("data-notply-button");
	var notplyLabel = $(this).attr("data-notply-label");
	var notplyButtonSubmit = $(this).attr("data-notply-button-function");
	var NoTTifBtnClass = $(this).attr("data-notply-button-class");
	var inputNotifId = $(this).attr("data-notply-input-id");
	var inputNotifClass = $(this).attr("data-notply-input-class");
	var NotPlyClose = '<span data-close-notply="true"><i class="closeBtn"></i></span>';
	var NotPlyTransition = $(this).attr("data-notply-transition");

	if ($(this).attr("data-notply-input") == "true"){
		document.title = "Notification : " + notplyLabel;
		$(LolyCont).prepend('<div style="animation-duration:' + NotPlyTransition + '!important;" class="notply notply-input ' + themeNotif + ' animated bounceInDown"><i class="icon ' + iconNotif + '"></i><div class="message"><span class="notply-textInput"><input type="text" id="'+ inputNotifId +'" class="' + inputNotifClass + '" placeholder="' + notplyPlaceholder + '"><br><label for="' + inputNotifId + '">'+ notplyLabel  + '</labe><br><button class="'+NoTTifBtnClass+'" onclick="$(this).closest(\'.notply\').find(\'[data-close-notply]\').click();' + notplyButtonSubmit + '">' + NotifButton + '</button></span></div>' + NotPlyClose + '</div>'); 
	} else if($(this).attr("data-notply-button-init") == "true"){
		document.title = "Notification : text(" + message + ") Button(" + NotifButton + ")";
		$(LolyCont).prepend('<div style="animation-duration:' + NotPlyTransition + '!important;" class="notply ' + themeNotif + ' animated bounceInDown"><i class="icon ' + iconNotif + '"></i><div class="message">' + message + '<br><button class="' + NoTTifBtnClass + '" onclick="$(this).closest(\'.notply\').find(\'[data-close-notply]\').click();' + notplyButtonSubmit + '">' + NotifButton +'</button></div>' + NotPlyClose + '</div>'); 
	} else{
		document.title = "Notification : " + message;
		$(LolyCont).prepend('<div style="animation-duration:' + NotPlyTransition + '!important;" class="notply ' + themeNotif + ' animated bounceInDown"><i class="icon ' + iconNotif + '"></i><div class="message">' + message + '</div>' + NotPlyClose + '</div>'); 
	}
	
	$(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});

});  


var NotPly.prototype.notply = function(NotPlymessage){
	$(".notply [data-close-notply]").click();
	document.title = "Notification : " + NotPlymessage;

  $(LolyCont).prepend('<div class="notply notply-success animated bounceInDown"><div class="message">' + NotPlymessage + '<br></div><span data-close-notply="true"><i class="closeBtn"></i></span></div>')
  
  
 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});
}


var NotPly.prototype.NotifyAsAll = function(NotPlymessage,NotPlytheme,NotPlyicon,NotPlyplaceholder,NotPlybutton,NotPlylabel,NotPlybtfun,NotPlybtclass,NotPlyinputid,NotPlyinputclass,NotPlytransition){
  
  var NotPlymessage,NotPlytheme,NotPlyicon,NotPlyplaceholder,NotPlybutton,NotPlylabel,NotPlybtfun,NotPlybtclass,NotPlyinputid,NotPlyinputclass,NotPlytransition;

 $(".notply [data-close-notply]").click();

  document.title = "Notification : " + NotPlymessage;

  $(LolyCont).prepend('<div style="animation-duration:' +  NotPlytransition + '!important;" class="notply notply-input ' + NotPlytheme + ' animated bounceInDown"><i class="icon ' + NotPlyicon + '"></i><div class="message">' + NotPlymessage + '<br><span class="notply-textInput"><input type="text" id="'+ NotPlyinputid +'" class="' + NotPlyinputclass + '" placeholder="' + NotPlyplaceholder + '"><br><label for="' + NotPlyinputid + '">'+ NotPlylabel  + '</labe><br><button class="' + NotPlybtclass + '" onclick="$(this).closest(\'.notply\').find(\'[data-close-notply]\').click();' + NotPlybtfun + '">' + NotPlybutton + '</button></span></div><span data-close-notply="true"><i class="closeBtn"></i></span></div>')
  
  
 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});

}

var NotPly.prototype.NotifyAsButton = function(NotPlymessage,NotPlytheme,NotPlyicon,NotPlybutton,NotPlybtfun,NotPlybtclass,NotPlytransition){
  
  var NotPlymessage,NotPlytheme,NotPlyicon,NotPlybutton,NotPlybtfun,NotPlybtclass,NotPlytransition;
 

 $(".notply [data-close-notply]").click();

 document.title = "Notification : " + NotPlymessage;

  $(LolyCont).prepend('<div style="animation-duration:' +  NotPlytransition + '!important;" class="notply ' + NotPlytheme + ' animated bounceInDown"><i class="icon ' + NotPlyicon + '"></i><div class="message">' + NotPlymessage + '<br><button class="' + NotPlybtclass + '" onclick="$(this).closest(\'.notply\').find(\'[data-close-notply]\').click();' + NotPlybtfun + '">' + NotPlybutton + '</button></div><span data-close-notply="true"><i class="closeBtn"></i></span></div>')
  
  
 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});

}

var NotPly.prototype.NotifyAs = function(NotPlymessage,NotPlytheme,NotPlyicon,NotPlytransition){
  
  var NotPlymessage,NotPlytheme,NotPlyicon,NotPlyplaceholder,NotPlytransition;

  $(".notply [data-close-notply]").click();

  document.title = "Notification : " + NotPlymessage;
 
  $(LolyCont).prepend('<div style="animation-duration:' +  NotPlytransition + '!important;" class="notply ' + NotPlytheme + ' animated bounceInDown"><i class="icon ' + NotPlyicon + '"></i><div class="message">' + NotPlymessage + '<br></div><span data-close-notply="true"><i class="closeBtn"></i></span></div>')
  
  
 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});

}  


 var NotPly.prototype.notplyDecAsAll = function({
 	message : NotPlymessage,
 	theme : NotPlytheme,
 	icon : NotPlyicon,
 	placeholder : NotPlyplaceholder,
    label : NotPlylabel,
    button : NotPlybutton,
    btfun : NotPlybtfun,
    btclass : NotPlybtclass,
    inputid : NotPlyinputid,
    inputclass : NotPlyinputclass,
    transition: NotPlytransition
 }){

  $(".notply [data-close-notply]").click();
document.title = "Notification : " + NotPlymessage;
 $(LolyCont).prepend('<div style="animation-duration:' +  NotPlytransition + '!important;" class="notply notply-input ' + NotPlytheme + ' animated bounceInDown"><i class="icon ' + NotPlyicon + '"></i><div class="message">' + NotPlymessage + '<br><span class="notply-textInput"><input type="text" id="'+ NotPlyinputid +'" class="' + NotPlyinputclass + '" placeholder="' + NotPlyplaceholder + '"><br><label for="' + NotPlyinputid + '">'+ NotPlylabel  + '</labe><br><button class="' + NotPlybtclass + '" onclick="$(this).closest(\'.notply\').find(\'[data-close-notply]\').click();' + NotPlybtfun + '">' + NotPlybutton + '</button></span></div><span data-close-notply="true"><i class="closeBtn"></i></span></div>')
  

 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});

 }


 var NotPly.prototype.notplyDecAsButton = function({
 	message : NotPlymessage,
 	theme : NotPlytheme,
 	icon : NotPlyicon,
    button : NotPlybutton,
    btfun : NotPlybtfun,
    btclass : NotPlybtclass,
    transition: NotPlytransition
 }){

  $(".notply [data-close-notply]").click();

  document.title = "Notification : " + NotPlymessage;

 $(LolyCont).prepend('<div style="animation-duration:' +  NotPlytransition + '!important;" class="notply ' + NotPlytheme + ' animated bounceInDown"><i class="icon ' + NotPlyicon + '"></i><div class="message">' + NotPlymessage + '<br><button class="' + NotPlybtclass + '" onclick="$(this).closest(\'.notply\').find(\'[data-close-notply]\').click();' + NotPlybtfun + '">' + NotPlybutton + '</button></div><span data-close-notply="true"><i class="closeBtn"></i></span></div>')
  
  
 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});

 }


 var NotPly.prototype.notplyDecAs = function({
 	message : NotPlymessage,
 	theme : NotPlytheme,
 	icon : NotPlyicon,
    transition: NotPlytransition
 }){

  $(".notply [data-close-notply]").click();

  document.title = "Notification : " + NotPlymessage;

 $(LolyCont).prepend('<div style="animation-duration:' +  NotPlytransition + '!important;" class="notply ' + NotPlytheme + ' animated bounceInDown"><i class="icon ' + NotPlyicon + '"></i><div class="message">' + NotPlymessage + '<br></div><span data-close-notply="true"><i class="closeBtn"></i></span></div>')
  
  
 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  CN.remove();
	    }, 2500);
	    document.title = DocumentTitle;
	});

 }

 var NotPly.prototype.notplyAsLoading = function({
 	message : NotPlymessage,
 	theme : NotPlytheme,
 	background : NotPlyBg,
 	delay: Notdelay,
 	Nfunction: Nfunction,
    transition: NotPlytransition
 }){
 	

  $(".notply [data-close-notply]").click();

  document.title = "Notification : " + NotPlymessage;

 $(LolyCont).prepend('<div class="NotAlert-container" id="activeNotAlertNot"><div class="NotAlert-overlay" id="NotAlertOverlay"></div><div style="animation-duration:' +  NotPlytransition + '!important;" class="notply ' + NotPlytheme + ' notply-loading animated bounceInDown"><div class="message">' + NotPlymessage + '<br><div class="notply-progress"><div class="line" style="background: ' + NotPlyBg + '"></div></div></div><span data-close-notply="true" hidden><i class="closeBtn" id="LoadingClose"></i></span></div></div>',muSet())
  
  
 $(".notply > [data-close-notply]").on("click",function(e){
		
		e.preventDefault();

		var CN = $(this).closest(".notply");$(this).closest(".notply").addClass("bounceOutUp");
		setTimeout(function(){
		  $("#activeNotAlertNot").remove();
		  CN.remove();
	    }, 2500);

	    document.title = DocumentTitle;


	});
function muSet(){
 setTimeout(function() {
 	$(".notply > [data-close-notply]").click();
 	notply(Nfunction)
 }, Notdelay);
}

 }


 var NotPly.prototype.alertAs = function(text,title,theme){
 	$("#activeNotAlert").remove();
 	$(LolyCont).addClass("overflowHidden");
 	if(title){
 		 var title = title;
 	} else {
 		var title = "Alert";
 	}

 	var Ptheme;
 	if (theme){
 	if(theme == "success"){
 		Ptheme = "NotAlert-success"
 	} else if(theme == "info"){
 		Ptheme = "NotAlert-info"
 	} else if(theme == "error"){
 		Ptheme = "NotAlert-error"
 	} else if(theme == "warning"){
 		Ptheme = "NotAlert-warning"
 	} else{
 		Ptheme = "NotAlert-default"
 	}
 	} else{
 		Ptheme = "NotAlert-default"
 	}

 	document.title = title + " : " + text;

 	 		$(LolyCont).prepend(`
 		 	<div class="NotAlert-container" id="activeNotAlert">
 		 	<div class="NotAlert-overlay" id="NotAlertOverlay"></div>
 		 		<div class="NotAlert ` + Ptheme + ` animated " id="NotNotAlert">
 		 			<div class="NotAlert-head">
 		 			<div class="NotAlert-title">
 		 				<h4>` + title + `</h4>
 		 			</div>
 		 			</div>
 		 			<div class="NotAlert-body">
 		 				` + text + `
 		 			</div>
 		 			<div class="NotAlert-buttons">
 		 				<button class="button" id="NotAlertButton">okay</button>
 		 			</div>
 		 		</div>
 		 	</div>
 		 	`)
 	 	$("#NotAlertButton").click(function(){
 	 		$("#NotAlertOverlay").click()
 	 	})
 	 	$("#NotAlertOverlay").click(function(){
 	 		$("#activeNotAlert").remove();
 	 		document.title = DocumentTitle;
 	 		$(LolyCont).removeClass("overflowHidden");
 	 	})
 }

 var NotPly.prototype.alertAsConfirm = function(text,title,sbutton,onsubmit,oncancel,theme){
 	$("#activeNotAlert").remove();
 	$(LolyCont).addClass("overflowHidden");
 	if(title){
 		 var title = title;
 	} else {
 		var title = "Alert";
 	}

 	var Ptheme;
 	if (theme){
 	if(theme == "success"){
 		Ptheme = "NotAlert-success"
 	} else if(theme == "info"){
 		Ptheme = "NotAlert-info"
 	} else if(theme == "error"){
 		Ptheme = "NotAlert-error"
 	} else if(theme == "warning"){
 		Ptheme = "NotAlert-warning"
 	} else{
 		Ptheme = "NotAlert-default"
 	}
 	} else{
 		Ptheme = "NotAlert-default"
 	}

 	document.title = "Confirm(" + title + " : " + text + ")";

 	 		$(LolyCont).prepend(`
 		 	<div class="NotAlert-container" id="activeNotAlert">
 		 	<div class="NotAlert-overlay" id="NotAlertOverlay" onclick="` + oncancel + `"></div>
 		 		<div class="NotAlert ` + Ptheme + ` animated " id="NotNotAlert">
 		 			<div class="NotAlert-head">
 		 			<div class="NotAlert-title">
 		 				<h4>` + title + `</h4>
 		 			</div>
 		 			</div>
 		 			<div class="NotAlert-body">
 		 				` + text + `
 		 			</div>
 		 			<div class="NotAlert-buttons">
 		 				<button class="button" id="NotAlertButton">Cancel</button>
 		 				<button class="button" id="NotAlertSubmiyButton" onclick="` + onsubmit + `">` + sbutton + `</button>
 		 			</div>
 		 		</div>
 		 	</div>
 		 	`)
 	 	$("#NotAlertButton,#NotAlertSubmiyButton").click(function(){
 	 		$("#NotAlertOverlay").click()
 	 	})
 	 	$("#NotAlertOverlay").click(function(){
 	 		$("#activeNotAlert").remove();
 	 		document.title = DocumentTitle;
 	 		$(LolyCont).removeClass("overflowHidden");
 	 	})
 }

var NotPly.prototype.alertAsPrompt = function(text,title,sbutton,onsubmit,oncancel,theme){
	$("#activeNotAlert").remove();
	$(LolyCont).addClass("overflowHidden");
 	if(title){
 		 var title = title;
 	} else {
 		var title = "Alert";
 	}

 	var Ptheme;
 	if (theme){
 	if(theme == "success"){
 		Ptheme = "NotAlert-success"
 	} else if(theme == "info"){
 		Ptheme = "NotAlert-info"
 	} else if(theme == "error"){
 		Ptheme = "NotAlert-error"
 	} else if(theme == "warning"){
 		Ptheme = "NotAlert-warning"
 	} else{
 		Ptheme = "NotAlert-default"
 	}
 	} else{
 		Ptheme = "NotAlert-default"
 	}

 	document.title = "Prompt(" + title + " : " + text + ")";

 	 		$(LolyCont).prepend(`
 		 	<div class="NotAlert-container" id="activeNotAlert">
 		 	<div class="NotAlert-overlay" id="NotAlertOverlay" onclick="` + oncancel + `"></div>
 		 		<div class="NotAlert ` + Ptheme + ` animated " id="NotNotAlert">
 		 			<div class="NotAlert-head">
 		 			<div class="NotAlert-title">
 		 				<h4>` + title + `</h4>
 		 			</div>
 		 			</div>
 		 			<div class="NotAlert-body">
 		 				` + text + `<br>
 		 				<input id="NotAlertInput" type="text" oninput="document.title = 'Prompt(`+title+` : `+text+`,' + $(this).val() + ')'">
 		 				<br>
 		 			</div>
 		 			<div class="NotAlert-buttons">
 		 				<button class="button" id="NotAlertButton">Cancel</button>
 		 				<button class="button" id="NotAlertSubmiyButton" onclick="` + onsubmit + `">` + sbutton + `</button>
 		 			</div>
 		 		</div>
 		 	</div>
 		 	`);
 	 				$("#NotAlertInput").on("keydown",function(e){
 		 				keyboardKey = e.which || e.keyCode;
       						if (keyboardKey == 13) {
       						$('#NotAlertSubmiyButton').click()
       						}});
 	 	$("#NotAlertButton,#NotAlertSubmiyButton").click(function(){
 	 		$("#NotAlertOverlay").click()
 	 	})
 	 	$("#NotAlertOverlay").click(function(){
 	 		$("#activeNotAlert").remove();
 	 		document.title = DocumentTitle;
 	 		$(LolyCont).removeClass("overflowHidden");
 	 	})
 }

function NotAlertInput(){
 	return $("#NotAlertInput").val();
}

var NotPly.prototype.alertAsLoading = function(text,delay,Mfunction,theme){
	$("#activeNotAlert").remove();
	$(LolyCont).addClass("overflowHidden");

	document.title = text;

	var Ptheme;
 	if (theme){
 	if(theme == "success"){
 		Ptheme = "NotAlert-success"
 	} else if(theme == "info"){
 		Ptheme = "NotAlert-info"
 	} else if(theme == "error"){
 		Ptheme = "NotAlert-error"
 	} else if(theme == "warning"){
 		Ptheme = "NotAlert-warning"
 	} else{
 		Ptheme = "NotAlert-default"
 	}
 	} else{
 		Ptheme = "NotAlert-default"
 	}
	
	$(LolyCont).prepend(`
 		 	<div class="NotAlert-container" id="activeNotAlert">
 		 	<div class="NotAlert-overlay" id="NotAlertOverlay"></div>
 		 		<div class="NotAlert ` + Ptheme + ` animated " id="NotNotAlert">
 		 			<div class="NotAlert-body">
 		 			  <center>
 		 				<div class="notply-chasing-dots">
 		 					<div class="dot1"></div>
 		 					<div class="dot2"></div>
 		 				</div>
 		 			  </center>
 		 				<br>
 		 				` + text + `
 		 			</div>
 		 		</div>
 		 	</div>
 		 	`)

 	 	setTimeout(function(){
 	 		$("#activeNotAlert").remove("",fOOLNuM());
 	 		
 	 	}, delay)

 	 	function fOOLNuM(){
 	 		$(LolyCont).removeClass("overflowHidden");
 	 		document.title = DocumentTitle;
 	 		alertAs(Mfunction);
 	 	}
}

var NotPly.prototype.notToast = function({
				text : text,
				title : title,
				theme : theme,
				position : position,
				transition : transition,
				Doctitle : Doctitle,
				borderRaius: br
				}){


	$(".NotToast .NotToastClose").click();

	if(Doctitle == false){
		document.title = DocumentTitle
	} else {
		document.title = "Toast(" + title + " : " + text + ")";
	}


	if(position){
		if (position == "bottom"){
			position = "NotToast-bottom"
		} else if (position == "top-left"){
			position = "NotToast-top-left"
		} else if (position == "top-right"){
			position = "NotToast-top-right"
		} else if (position == "center"){
			position = "NotToast-center"
		} else if (position == "bottom-left"){
			position = "NotToast-bottom-left"
		} else if (position == "bottom-right"){
			position = "NotToast-bottom-right"
		} else {
			position = "NotToast-top"
		}
	} else {
		position = "NotToast-top"
	}

	var Ttheme = "none";

	if(theme){
		if (theme == "success"){
			theme = "NotToast-success"
		} else if (theme == "info"){
			theme = "NotToast-info"
		} else if (theme == "warning"){
			theme = "NotToast-warning"
		} else if (theme == "error"){
			theme = "NotToast-error"
		} else {
			Ttheme = theme
		}
	} else {
	}

	if(transition){
		transition = transition
	} else {

	}


	$(LolyCont).prepend(`<div style="animation-duration:` +  transition + `!important;border-radius: ` + br + ` !important;" class="` + position +` NotToast animated ` + theme + `"> 
			<span style="border-radius: ` + br + ` !important;" class="NotToastTitle ` + Ttheme + `">` + title + `</span>
			<span>` + text + `</span>
			<div style="border-radius: ` + br + ` !important;" class="NotToastBottom"></div>
			<span class="NotToastClose"></span>
		</div>
		`);

	$(".NotToast > .NotToastClose").click(function(){
		var CT = $(this).closest(".NotToast");
		setTimeout(function(){
		  CT.remove();
	    }, 1000);
		$(this).closest(".NotToast").fadeOut("slow");
	    document.title = DocumentTitle;
	});

}

var NotPly.prototype.notSheet  = function({
	title:title,
	text:template,
	themeColor: themeColor,
	textColor: textColor,
	bodyColor: bodyColor
}){
	$(LolyCont).prepend(`
		<div class="Notbottomsheet">
		<div class="NotbottomsheetOverlay"></div>
         <div class="Notbottomsheet-content" style="color:`+textColor+`">
            <div class="Notbottomsheet-header" style="background: ` + themeColor + `;color:`+textColor+`">
               <span class="Notbottomsheetend"></span>
               <h2>` + title + `</h2>
            </div>
            <div class="Notbottomsheet-body" style="background: ` + bodyColor + `">
               <p>` + template + `</p>
            </div>
         </div>
      	</div>
		`)

	$(".Notbottomsheetend,.NotbottomsheetOverlay").click(function(){
		$(this).closest(".Notbottomsheet").remove()
	});

}

var NotPly.prototype.wind = function({
			title:title,
			location: Wlocation,
			height:height,
			width:width,
			resizable: resizable,
			scrollbars: scrollbars,
			html: html
		}){

	if(html){
		var open_wind = window.open('', 'open_wind', 'width='+ width +', height='+ height +', resizable='+resizable+', scrollbars=' + scrollbars );
		open_wind.document.write(html);
	} else if(location){
		var open_wind = window.open(Wlocation, 'open_wind', 'width='+ width +', height='+ height +', resizable='+resizable+', scrollbars=' + scrollbars );
	} else {
		var open_wind = window.open('', 'open_wind', 'width='+ width +', height='+ height +', resizable='+resizable+', scrollbars=' + scrollbars );
		open_wind.document.write(title + " Has Nothing To do");
	}
    
}



})(jQuery);
