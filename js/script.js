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
    let size = $("#size1").val();
    let crust = $("#crust2").val();
    let topping = $("#toppings").val();
    let toppingCost = 0;
    let crustCost = 0;
    if (crust ==="Crispy") {
      crustCost +=250;
    }
    else if (crust ==="Stuffed") {
      crustCost+=300;
    }
    else if (crust ==="Glutten-free") {
      crustCost+=350;
    }
    if (topping === "Eggs") {
      toppingCost+=100;
    }
    else if (topping === "Mushroom") {
      toppingCost+= 200;
    }
    else if (topping === "salad") {
      toppingCost += 300;
    }
    if (size === "Small") {
      toppingCost = toppingCost*1.5;
    }
    else if (size === "Medium") {
      toppingCost = toppingCost*2.5;
    }
    else if (size === "Large" ) {
      toppingCost = toppingCost*3.5;
    }

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
    let newOrder = new PizzaOrder(crustCost,toppingCost);
     $("#totalBalance").text(newOrder.order());


     $("#deliveredSize").append("Pizza Size: "+size);
     $("#deliveredCrust").append("Crust: " +crust);
     $("#deliveredTopping").append("Tooping: " +topping);
   
  });
  $("form#villageformEstate").submit(function(event) {
     event.preventDefault();
      let deliveryCost=150;
      let calCost1= deliveryCost+ totalCalculation;
      let village=$("#villageEstate").val();
      if(village==="Yes"){
        alert("You will be charged  Kshs "+deliveryCost+ " "+ "for delivery.");

      }else{
        alert ("Kindly come and pick your order");
      }
      $("div.finalLocation").toggle("2000");

      $("#deliveyAcknowlement").append("Acknowleged: " +village);
      $("#deliveryCosts").append( "Delivery charges: "+ deliveryCost);
      $("#totalOrderedCost").append("Total Order Cost: "+calCost1);
    
  });
  $("form#placeName").submit(function(event) {
     event.preventDefault();
     let customerLocation=$("#exampleInputEmail1").val();
      alert("Your order will be delivered to "+customerLocation);


      $("#deliveryPoint").append("Delivery point: "+customerLocation);
      
  }); 

  $("button#lastoutput").click(function(){
    $(".show-display").show();
  });

});
