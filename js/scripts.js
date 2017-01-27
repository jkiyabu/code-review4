$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = ($("select#size").val()).toLowerCase();
    var topping = [$("input:checkbox[name=topping]:checked").val()];

    $(".topping").append("<li>" + topping + "</li>");
    $(".size-order").append(size);
    $("#price").show;
  });
});
