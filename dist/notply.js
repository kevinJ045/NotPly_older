/*

               ██    █████████╗     ██
           ██████    ╚══██╔═══╝     ████
         ████████       ██║         ██████
       ██████████       ██║         ████████
     ████████████       ██║         ██████████
   ██████████████       ██║         ████████████ 
 ████████████████    █████████╗     ██████████████
                     ╚════════╝
 
████████╗██╗  ██╗███████╗███╗   ███╗███████╗███████╗
╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝██╔════╝
   ██║   ███████║█████╗  ██╔████╔██║█████╗  ███████╗
   ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  ╚════██║
   ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗███████║
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝

NotPly version 2.0.6.0.0.221.01

  To Make A notply, See The defaults variable,
  
  =========>>
  Help
  =========>>

  Help: If you don't get it,

  //For\\, For What Component ?, Like Alerts,Notifications...
  //Type\\, The typeof the property like: String, Boolean, Object, Function...
  //Length\\, Length Of property, only if it is an object
  //!important\\, The property Is Important, means must be included
  //Description\\, Tells What the property is


*/



;(function($,window,document){

 var plugin = { 
  name: 'NotPly',
  version: "2.0.6.0.0.221.01"
  },
 defaults = {
  text: "Text", // For: All, Type: String !important, Description: Text to be displayed, 
  title: "Title", // For: All Except notifications, Type: String !important, Description: Title to be displayed, 
  Sbuttons: ['Cancel','Okay'], // For: Alerts, Type: Object, Length: < 3 !important, Description: Buttons. Submit And Cancel, 
  onsubmit: function(){}, // For: All, Type: Function, Description: Function, To be Happening on Submitting, 
  oncancel: function(){}, // For: All, Type: Function, Description: Function, To be Happening on Canceling, 
  callback: function(){}, // For: All, Type: Function, Description: Function, To be Happening on Initiation of any component,
  type: "notply", // For: All, Type: String !important, Description: The type, Which type or component do you want?,
  icon: "", // For: Notifications, Type: String, Description: Icon For notifications,
  theme: "default", // For: All, Type: String, Description: Theme. To add colors or custom css,
  transition: "1s", // For: Notifications And Toasts, Type: String, Description: Animation Duration,
  position: "top", // For: Toasts, Type: String, Description: Position Of toasts,
  borderRadius: "", // For: Toasts, Type: String, Description: Border radius For toasts,
  pt: "text", // For: Alerts, Type: String, Description: Prompt/text type,
  closebtn: true, // For: Toasts, Type: Boolean, Description: Close Button For toasts,
  darkTheme: false, // For: Alerts, Type: Boolean, Description: Makes The Background of alerts dark
}

function NotPly(element,options){

  this.element = element;

  this.settings = $.extend({}, defaults, options);

  this.init();
}

// Add Prototype So The plugin can inherit it's property from it's proto

NotPly.prototype = {

  init: function(element,text){

    // Declare The Main Variables, To use them On the function,


    var that = this,
        title = that.settings.title;
        text = that.settings.text;
        type = that.settings.type;
        icon = that.settings.icon;
        theme = that.settings.theme;
        onsubmit = that.settings.onsubmit;
        oncancel = that.settings.oncancel;
        callback = that.settings.callback;
        buttons = that.settings.Sbuttons;
        transition = that.settings.transition;
        borderRadius = that.settings.borderRadius;
        position = that.settings.position;
        closebtn = that.settings.closebtn;
        pt = that.settings.pt;
        element = that.element;

    // Choose or Match What Kind of notply, by matching the type,

    if(type.match(/notply/i)){ // Making Regular Expressions so it will be case insensitive
      that.notply(element,text,theme,icon,transition,oncancel);
    } else if(type.match(/alert/i)){
      that.alert(element,text,title,theme,type.replace(/alert/i,''),pt,onsubmit,oncancel,buttons)
    } else if(type.match(/toast/i)){
      that.toast(element,text,title,theme,position,borderRadius,closebtn,oncancel)
    } else if(type.match(/sheet/i)){
      that.sheet(element,text,title,theme,transition,oncancel)
    } else {
      that.notply(element,text,theme,icon,transition,oncancel);
    }

    // Initiate The Callback,

    if($.isFunction(callback)){
      callback(title,text,type);
    } else {}

  },

  notply: function(element,NotPlymessage,
    NotPlytheme,NotPlyicon,NotPlytransition,NotPlycancelfun){

    var that = this,ifIcon;

    if(NotPlyicon != ''){
      ifIcon = `<i class="icon ` + NotPlyicon + `"></i>`;
    } else {
      ifIcon = '';
    }
 
     $(".notply [data-close-notply]").click();


        $(element).append(`
          <div style="animation-duration:` +  NotPlytransition + `!important;" 
          class="notply ` + NotPlytheme + ` 
          animated bounceInDown">
          `+ifIcon+`
          `+`<div class="message">` + NotPlymessage + `</div><br>`+`
          <span data-close-notply="true">
          <i class="closeBtn"></i></span>
          </div>`);

         $(".notply > [data-close-notply],.notply .notClose").on("click",function(){

            var CN = $(this).closest(".notply");

            that.close(CN,function(){},
              Number(NotPlytransition.replace('s','') + '000'),function(){
                if($.isFunction(NotPlycancelfun)){
                  NotPlycancelfun(0);
                }
              });

        });

      },

      alert: function(element,text,title,theme,type,pt,onsubmit,oncancel,buttons){

        var that = this,Sbuttons,cbutton,
        darkTheme = that.settings.darkTheme,darkMode,ifHeader,PT;

        if(buttons && typeof buttons == "object" && buttons.length < 3){ // You can Clear The last one,
          Sbuttons = buttons[1];
          cbutton = buttons[0];
        } else {
          Sbuttons = "Okay";
          cbutton = "Cancel";
        }

         $(element).addClass("overflowHidden");

         $("#activeNotAlert").remove();

           if(title != defaults.title){
              var title = title;
           } else {
             var title = "Alert";
           }

           if(pt == 'text' || pt == 'password'){
            PT = pt;
           } else {
            PT = 'text'
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
               Ptheme = theme
             }
          } else{
             Ptheme = "NotAlert-default"
          }


           var ifInput = "";
           var ifConfirm = "";
           var ifLoading = "";

           var isHeader = `
                  <div class="NotAlert-head">
                    <div class="NotAlert-title">
                      <h4>` + title + `</h4>
                    </div>
                  </div>`

          var sB = '<button class="button" id="NotAlertSubmitButton">'+Sbuttons+'</button>',
          cB = '<button class="button" id="NotAlertButton">'+cbutton+'</button>';

           var isConfirm = `
              <div class="NotAlert-buttons">
                `+cB+sB+`
              </div>
             `;
           var isInput = `
              <br>
              <input id="NotAlertInput" type="`+PT+`">
              <br>
            `;
          var isLoading = `<center>
              <div class="notply-chasing-dots">
                <div class="dot1"></div>
                <div class="dot2"></div>
              </div>
              </center>
              <br>`

           if(type == " confirm"){
             ifInput = ``;
             ifConfirm = isConfirm;
             ifLoading = "";
             ifHeader = isHeader;
          } else if (type == " prompt") {
            ifConfirm = isConfirm;
            ifInput = isInput;
            ifLoading = "";
            ifHeader = isHeader;
          } else if (type == " loading") {
            ifConfirm = '';
            ifInput = "";
            ifLoading = isLoading;
            ifHeader = '';
          } else {
            ifLoading = "";
            ifInput = ``;
            ifConfirm = '<div class="NotAlert-buttons">'+sB+'</div>';
            ifHeader = isHeader;
          }

          if(darkTheme == true){
            darkMode = 'dark'
          } else {
            darkMode = ''
          }

          $(element).append(`
           <div class="NotAlert-container ` + darkMode +`" id="activeNotAlert">
              <div class="NotAlert-overlay" id="NotAlertOverlay"></div>
                <div class="NotAlert ` + Ptheme + ` animated " 
                id="NotNotAlert">
                  `+ifHeader+`
                  <div class="NotAlert-body">
                    ` + ifLoading + `
                    ` + text + `
                    ` + ifInput + `
                  </div>
                  ` + ifConfirm + `
                </div>
              </div>
           `);

          $("#NotAlertSubmitButton").click(function(){
            if($.isFunction(onsubmit)){
              if ($("#NotAlertInput")){
                onsubmit($("#NotAlertInput").val());
              } else {
                onsubmit(1);
              }
            }
            that.close($('#activeNotAlert'),function(){},
              1000,function(){
                $(element).removeClass("overflowHidden");
              },$('#activeNotAlert'));
          });

            $("#NotAlertInput").on("keydown",function(e){
              keyboardKey = e.which || e.keyCode;
            if (keyboardKey == 13) {
                 $('#NotAlertSubmitButton').click()
            } else {}
          });

            $("#NotAlertButton,#activeNotAlert .notClose,#NotAlertOverlay").click(function(){
              that.close($('#activeNotAlert'),function(){
                if($.isFunction(oncancel)){
                  oncancel(0);
                }
              },1000,function(){
                $(element).removeClass("overflowHidden");
              },$('#activeNotAlert'));
            });
          },

          toast: function(element,text,title,theme,position,br,closebtn,oncancel){
            
            var that = this;

            $(".NotToast .NotToastClose").click();

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
            Ttheme = "none"
          }          

          var IFclosebtn = '<span class="NotToastClose"></span>';

          if(closebtn !== true){
            IFclosebtn = '<span class="NotToastClose" hidden="" style="display:none"></span>';
          } else {
            IFclosebtn = '<span class="NotToastClose"></span>';
          }

          $(element).append(`<div style="animation-duration:` +  transition + `!important;transition: all ` +  transition + ` !important;border-radius: ` + br + ` !important;" class="` + position +` NotToast animated ` + theme + `"> 
            <span style="border-radius: ` + br + ` !important;" class="NotToastTitle ` + Ttheme + `">` + title + `</span>
              <span>` + text + `</span>
              <div style="border-radius: ` + br + ` !important;" class="NotToastBottom"></div>
              `+IFclosebtn+`
            </div>
          `);

          $(".NotToast > .NotToastClose,.NotToast .notClose").click(function(){
            var CT = $(this).closest(".NotToast");
            that.close(CT,function(){},
              Number(transition.replace('s','') + '000'),function(){
                if($.isFunction(oncancel)){
                  oncancel(0);
                }
              });

          });


          },

          sheet: function(element,template,title,theme,transition,oncancel){

            var that = this;

            $(element).append(`
              <div class="Notbottomsheet">
                <div class="NotbottomsheetOverlay"></div>
                  <div class="Notbottomsheet-content `+theme+`" style="animation-duration:` +  transition + `!important;">
                      <div class="Notbottomsheet-header">
                          <span class="Notbottomsheetend"></span>
                          <h2>` + title + `</h2>
                      </div>
                      <div class="Notbottomsheet-body">
                        ` + template + `
                      </div>
                  </div>
              </div>
            `);

            $(".Notbottomsheetend,.NotbottomsheetOverlay,.Notbottomsheet .notClose").click(function(){
              var THU = $(this).closest(".Notbottomsheet");

              that.close(THU,function(){},
              1000,function(){
                $(".Notbottomsheet").fadeOut(500)
                if($.isFunction(oncancel)){
                  oncancel(0);
                }
              },THU);
              
            });

          },

          close: function(el,beforeClose,interval,afterClose,el2){

            var that = this;

            el.addClass('close');

            if($.isFunction(beforeClose)){
              beforeClose();
            } else {}

              if(el2){
                setTimeout(function(){

                  $(el2).fadeOut('slow',function(){
                    el2.remove();

                      if($.isFunction(afterClose)){
                        afterClose();
                      } else {}

                  });

                },interval)
              } else {
                setTimeout(function(){

                  el.remove();

                  if($.isFunction(afterClose)){
                    afterClose();
                  } else {}


                },interval)
              }
          }

}

// Initiate the jquery plugin, $.fn.name,

$.fn[plugin.name] = function(options) {
    if (!$.data(this, "plugin_" + plugin.name)) {
      $.data(this, "plugin_" + plugin.name, new NotPly(this, options));
    }
  return this;
};

// Initiate the jquery plugin, $.fn

$[plugin.name] = function(options){
  if (!$.data('body', "plugin_" + plugin.name)) {
      $.data('body', "plugin_" + plugin.name, new NotPly('body', options));
    }
  return 'body';
}

// Using data- attribute Function,

$('[data-notply]').click(function(e){
  e.preventDefault();
  var that = $(this),datas = {
    element: that.data('element'),
    text: that.data('text'),
    title: that.data('title'),
    type: that.data('type'),
    icon: that.data('icon'),
    theme: that.data('theme'),
    position: that.data('position'),
    callback: that.data('callback'),
  },
  Callback_data,
  Position_data,
  Theme_data,
  Type_data,
  Icon_data,
  data_defaults;

  if(datas.callback){
    Callback_data = Function(datas.callback)
  } else {
    Callback_data = function(){}
  }

  if(datas.position){
    Position_data = datas.position
  } else {
    Position_data = "top"
  }

  if(datas.theme){
    Theme_data = datas.theme
  } else {
    Theme_data = "default"
  }

  if(datas.icon){
    Icon_data = datas.icon
  } else {
    Icon_data = ""
  }

  if(datas.icon){
    Icon_data = datas.icon
  } else {
    Icon_data = ""
  }

  if(datas.type){
    Type_data = datas.type
  } else {
    Type_data = "notply"
  }

  data_defaults = { 
    text: datas.text,  
    title: datas.title,
    type: Type_data, 
    icon: Icon_data,
    theme: Theme_data,
    position: Position_data,
    callback: Callback_data(),
  };

  if(datas.element){
    $(datas.element).NotPly(data_defaults);
  } else {
    $.NotPly(data_defaults);
  }

});

// Initiate The Informations about the plugin,

$.fn.notply = plugin;

})(jQuery,window,document);
