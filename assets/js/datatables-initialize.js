//JS to initialize both of the datatables instances

function datatableInitialize() {
    $('#indexTable').dataTable({
      paging:   false,
      responsive: true,
      responsive: {
          details: {
              type: 'column',
              target: -1
          }
      },
      dom:     'Tl<"datatables-flex"i<"search-input"f>><"clear">rtp',
      columnDefs:   [
        {"sType": "currency", "aTargets":[2]},
        {"bSortable": false, "aTargets":[1]},
        {classname: "tablet-p", "targets": [2,3,4]},
        {className: 'control', orderable: false, targets:   -1},
        {"width": "250px", "targets": 1}
      ],
      oLanguage:    {
        "sInfo": "Number of Themes = _TOTAL_",
        "sInfoEmpty": "Number of Themes = _TOTAL_",
        "sInfoFiltered": " (filtered from _MAX_)"
      }
    } );
}