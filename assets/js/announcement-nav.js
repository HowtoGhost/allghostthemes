//Script to affect styles on the announcement bar

$(window).load(function(){
	borderFix();
});

$(window).resize(function() {
	borderFix();
});

function borderFix () {
	if ($('.nav-flex').height() > 50) {
		$('.nav-action-flex').css("border-left", "0");
		$('.nav-action-flex').css("border-top", "1px solid black");
	} else {
		$('.nav-action-flex').css("border-left", "3px solid white");
		$('.nav-action-flex').css("border-top", "0");
	}
}