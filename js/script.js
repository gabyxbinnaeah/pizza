//Business Logic
function PizzaOrder(crust,topping) {
  this.crustCost = crust;
  this.toppingCost = topping;
}
PizzaOrder.prototype.order = function(){
  return this.crustCost + this.toppingCost;
}



//User Interface Logic
$(document).ready(function() {
  $("form#showOrder1").submit(function(event) {
    event.preventDefault();
    let size = $("#size").val();
    let crust = $("#crust").val();
    let topping = $("#toppings").val();
    let toppingCost = 0;
    let crustCost = 0;
    if (crust ==="1") {
      crustCost +=250;
    }
    else if (crust ==="2") {
      crustCost+=300;
    }
    else if (crust ==="3") {
      crustCost+=350;
    }
    if (topping === "1") {
      toppingCost+=100;
    }
    else if (topping === "2") {
      toppingCost+= 200;
    }
    else if (topping === "3") {
      toppingCost += 300;
    }
    if (size === "1") {
      toppingCost = toppingCost*1.5;
    }
    else if (size === "2") {
      toppingCost = toppingCost*2.5;
    }
    else if (size === "3" ) {
      toppingCost = toppingCost*3.5;
    }

    let newOrder = new PizzaOrder(crustCost,toppingCost);
   // $("#user").text("Account Name: " + userName);
    $("#totalBalance").text(newOrder.order());
  });
});