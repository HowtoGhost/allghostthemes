//JS to initialize both of the datatables instances
function datatableInitialize(tagPage) {
    var tagFilter = "";
    if (typeof(tagPage) !== "undefined") {
         tagFilter = "tag:" + tagPage;
                 console.log(tagFilter);

    }
    var indexDatatable = $('#indexTable').on('xhr.dt', function(e, settings, json, xhr) {
        //transform data before being put into datatables
        for (i = 0; i < json.posts.length; i++) {
            //Grab the html content content and turn into a jQuery object
            var descContent = $(json.posts[i].html);
            //Split into array by dashes
            var descSplit = descContent.text().split(" - ", 10);
            var descSlice = "";

            //For each object in array, don't include first two dashes to strip beginning of content
            for (var k = 0; k < descSplit.length; k++) {
                if (k >= 2) {
                    descSlice = descSlice + descSplit[k];
                }
            };
            //Save new data as the html variable
            json.posts[i].html = descSlice;
            //encode url into hidden div that then gets replaced on the init below
            json.posts[i].image = "<a href='" + json.posts[i].url + "'><img src='//cdn.allghostthemes.com/assets/images/" + encodeURI(json.posts[i].title) + ".jpg' /></a>";
        }
    }).on( 'init.dt', function () {
        loadAllImages(indexDatatable);
    }).dataTable({
        ajax: {
            url: ghost.url.api('posts', {
                limit: "all",
                filter: tagFilter,
                include: 'tags,author'
            }),
            dataSrc: "posts"
        },
        paging: false,
        responsive: true,
        columns: [{
            "data": null,
            "render": function(data) {
                return "<a href='" + data.url + "'>" + data.title + "</a>"
            },
            "class": "tableTitle"
        }, {
            "data": "image",
            "class": "tableImage"
        }, {
            "data": null,
            "render": function(data) {
                var tags_array = [];
                for (i = 0; i < data.tags.length; i++) {
                    tags_array.push(data.tags[i].name);
                }
                tags_array.sort();
                return tags_array[0];
            },
            "class": "tdCenter"
        }, {
            "data": "html"
        }, {
            "data": null,
            "render": function(data) {
                var tags_array = [];
                for (i = 0; i < data.tags.length; i++) {
                    tags_array.push(data.tags[i].name);
                }
                tags_array.sort();
                return String(tags_array[1]);
                // return "1";
            },
            "class": "tdCenter"
        }],
        dom: 'Tl<"datatables-flex"i<"search-input"f>><"clear">rtp',
        oLanguage: {
            "sInfo": "Number of Themes = _TOTAL_",
            "sInfoEmpty": "Number of Themes = _TOTAL_",
            "sInfoFiltered": " (filtered from _MAX_)"
        }
    });

    $("tbody tr").each(function() {
        var tags = $(this).find("input[name='tags']").val();
        tags = tags.replace(/[A-Za-z-]/g, "");
        var tags_array = tags.split(",");
        tags_array = tags_array.filter(String);
        tags_array.sort();

        $(this).find(".price").html(tags_array[0]);
        $(this).find(".columns").html(tags_array[1]);
    });
}
