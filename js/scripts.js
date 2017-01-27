function Pizza(size, toppings){
  this.size = size;
  this.toppings = [toppings];
}

Pizza.prototype.price = function() {
  var smlPrice = 4.99;
  var medPrice = 7.99;
  var lrgPrice = 9.99;
  var sizePrice = 0;
  if (this.size === "small") {
    sizePrice += smlPrice;
  }else if (this.size === "medium"){
    sizePrice += medPrice;
  }else if (this.size === "large") {
    sizePrice += lrgPrice;
  }

  var finalPrice = sizePrice + (.5 * this.toppings[0].length);
  return finalPrice;
  console.log(finalPrice);
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
    $(".size-order").append(newPizza.size);
    $(".final-price").append(newPizza.price());
    $("#price").show();


    //console.log(newPizza.price())
  });
});
