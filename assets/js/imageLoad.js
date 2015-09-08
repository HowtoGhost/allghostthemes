//Loads images and then initializes Datatables

function loadAllImages() {
	var tableTitle = $('.tableImage');
	var imageTitle = $('.tableTitle a');
	var i = 0;

	
	for (i; i < tableTitle.length; i++) {
		var imageLink = imageTitle[i].textContent.toLowerCase();
		$('.tableImage')[i].innerHTML = "<a href='/" + imageLink + "/'" + "><img src='//cdn.allghostthemes.com/assets/images/" + encodeURI(imageTitle[i].textContent) + ".jpg' /></a>";
	}
}

function loadSingleImage() {
	$('.tableImage').click(function() {
		var imageTitle = $(this).prev('.tableTitle').children('a').html();
		var imageLink = imageTitle.toLowerCase();
		console.log($(this).html());

		$(this).html("<a href='/" + imageLink + "/'" + "><img src='//cdn.allghostthemes.com/assets/images/" + encodeURI(imageTitle) + ".jpg' /></a>");
	})
}

$(window).load(function() {
	if ($(window).width() > 760) {
		loadAllImages();
	} else {
		loadSingleImage();
	}
});