function Pizza(size, toppings){
  this.size = size;
  this.toppings = [toppings];
}


$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = ($("select#size").val()).toLowerCase();
    var toppings = [];

    $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val());
    })

    var newPizza = new Pizza(size, toppings);

    $("#toppings").append(newPizza.toppings);
    $(".size-order").append(size);
    $("#price").show();


    console.log(toppings)
  });
});
