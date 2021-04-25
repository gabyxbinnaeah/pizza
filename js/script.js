//Business Logic
function PizzaOrder(crust,topping) {
  this.crustCost = crust;
  this.toppingCost = topping;
  // this.order=[];
}
PizzaOrder.prototype.order = function(){
  totalCalculation= this.crustCost + this.toppingCost;
  return totalCalculation;
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

    $("#viewbtn").click(function () {
      alert("do you want to add more order?");
       $("#addData").append('<div class="col-md-4 form-group">'+ 
                                          // '<label for="inputState">Pizza Size</label>'+
                                          '<select class="form-select" id="size" aria-label="Default select example">'+
                                              '<option value="1">Small</option>'+
                                              '<option value="2">Medium</option>'+
                                              '<option value="3">Large</option>'+
                                          '</select>'+
                                        '</div>'+
                                        '<div class="col-md-4 form-group ">'+
                                          // '<label for="inputState">Crust</label>'+
                                          '<select class="form-select" id="crust" aria-label="Default select example">'+
                                              '<option value="1">Crispy</option>'+
                                              '<option value="2">Stuffed</option>'+
                                              '<option value="3">Glutten-free</option>'+
                                            '</select>'+
                                        '</div>'+
                                        '<div class="col-md-4 form-group">'+
                                          // '<label for="inputState">Toppings</label>'+
                                            '<select class="form-select" id="toppings" aria-label="Default select example">'+
                                              '<option value="1">Eggs</option>'+
                                              '<option value="2">Mushroom</option>'+
                                              '<option value="3">salad</option>'+
                                            '</select>'+
                                        '</div>'

       );
       
    });
  });
  // $("form#villageformEstate").submit(function(event) {
  //    event.preventDefault();
  //     let deliveryCost=150;
  //     let calCost= deliveryCost+ totalCalculation;
  //     let village=$("#villageEstate").val();
  //     if(village==="1"){
  //       alert("You will be charged  Kshs "+deliveryCost+ " "+ "T0tal cost "+calCost);

  //     }else{
  //       alert ("Kindly come and pick your order");
  //     }
  //     $("div.finalLocation").toggle("2000");
  // });
  // $("form#placeName").submit(function(event) {
  //    event.preventDefault();
  //    let customerLocation=$("#exampleInputEmail1").val();
  //     alert("Your order will be delivered to "+customerLocation);
  // }); 
});