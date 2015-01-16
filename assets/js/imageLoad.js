//Loads images and then initializes Datatables

var tableTitle = $('.tableImage');
var imageTitle = $('.tableTitle a');

for (i; i < tableTitle.length; i++) {
	// imageTitle = $('.tableTitle a').innerHTML;
	$('.tableImage')[i].innerHTML = "<a href=''><img src='http://cdn.allghostthemes.com/assets/images/" + imageTitle[i].innerText + ".jpg' /></a>";
	// console.log(imageTitle[i].innerText);
	// console.log(tableTitle[i].innerText);
}