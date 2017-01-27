function Pizza(size, meat, veggies){
  this.size = size;
  this.meat = [meat];
  this.veggies = [veggies];
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

  var finalPrice = sizePrice + (.5 * this.veggies[0].length) + (this.meat[0].length);
  return finalPrice;
  console.log(finalPrice);
}


$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = ($("select#size").val()).toLowerCase();
    var meat = [];
    var veggies = [];

    $("input:checkbox[name=veggies]:checked").each(function(){
      veggies.push($(this).val());
    })

    $("input:checkbox[name=meat]:checked").each(function(){
      meat.push($(this).val());
    })

    var newPizza = new Pizza(size, meat, veggies);

    $("#veggies").append("Veggies: " + newPizza.veggies);
    $("#meat").append("Meat: " + newPizza.meat);
    $(".size-order").append(newPizza.size);
    $(".final-price").append("$" + newPizza.price());

    if((newPizza.veggies[0].length) + (newPizza.meat[0].length) === 0) {
      var fadeSpeed = 100;
      $("#price2").fadeIn();
      $("form").fadeOut();
    }else{
      var fadeSpeed = 100;
      $("#price1").fadeIn();
      $("form").fadeOut();
    }

  });
});
