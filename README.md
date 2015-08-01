#All Ghost Themes

These are the theme files used for http://allghostthemes.com

###Quick Overview
On the home page and tag pages, we are using Datatables.js to sort and allow for instant searching.

As Ghost goes through each post, it does the following:

* Finds a picture in the asset/images folder that has the same name as the title of the post
* Checks the post for a tag with a $ and posts it in the price column
* Searches for a tag with just a number to put into the columns
* Puts an excerpt into the description

Tag Pages do the same as above just for the specific tags

Each post has a description and and embedded iframe to show the demo directly inside the page

###How to use
	git clone https://github.com/HowtoGhost/allghostthemes.git
	cd allghostthemes
	git submodule init
	git submodule update
	mkdir partials
	cp global-resources/partials/* partials/.
	sass assets/sass/screen.scss assets/css/style.css --style compressed
	
###How to Update
	git pull
	git submodule foreach git pull origin master
	chown -R ghost:ghost ./*
	chmod g+w ./*
	cp global-resources/partials/* partials/.
	sass assets/sass/screen.scss assets/css/style.css --style compressed


###PR's and suggestions welcome :D