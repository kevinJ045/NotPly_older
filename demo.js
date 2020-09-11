$(window).scroll(function () {
    
    var top = $(this).scrollTop();
    
	if (top > 100) {
    	$('.github-corner svg').css({"top":"0","right":"0"});
    } else {
    	$('.github-corner svg').css({"top":"-60px","right":"-60px"});
    }

}); 

var daffy = `
.yourtheme{\n
  background-color: BackGround;\n
}\n
.yourtheme .NotAlert-head{\n
  background-color: Header Background Color;\n
  color: HeaderColor;\n
}\n
\n
.yourtheme .dot1, .yourtheme .dot2 {\n
  background-color: loaders;\n
}\n
\n
.yourtheme .button,.yourtheme .NotAlert-body{\n
  color: body color;\n
}\n
\n
.yourtheme .button:last-child{\n
  background-color: ;
  color: button color;\n
}\n
\n
.yourtheme input {\n
    color: input color;\n
    border-color:  border color;\n
}\n
`

function callback(){
    $('body').NotPly({
        text: 'I am callback',
        title: 'Callback',
        type: 'notply',
    });
}

$.ajax({
    url: 'https://api.github.com/repos/kevinj045/notply/commits/v1-dev',
    dataType: 'json',
    success: function(data) {
      var sha = data.sha;
      $('.github-commit')
        .html('GitHub Forks: '+sha)
        .attr('href', data.html_url);
    }
});  


