$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = ($("select#size").val()).toLowerCase();
    $(".size-order").append(size);
    $("#price").show;
  });
});
