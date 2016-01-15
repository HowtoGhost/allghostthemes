//Loads images and then initializes Datatables

function loadAllImages(table) {
    table.api().rows().every(function(rowIdx, tableLoop, rowLoop) {
        var data = this.data();
        for (i; i < data.length; i++) {
            $('.tableImage')[i].innerHTML = data.image;
        }

    });
}