function caculateTip() {
    var price = doucment.getElementById("total").value;
    var quantity = document.getElementById("quantity").value;
    var satisfaction = doucment.getElementById("satisfaction").value;

    var tip = ((price * satisfaction) / quantity);

    if(price === "" || price === "0") {
        alert("Please Enter Valid Price");
    }   else if(quantity === "" || quantity === "0") {
        alert("Please Enter Valid Number Of People");

    }   else {
        var front = document.getElementById("front");
    front.style.display = "none";
    var back = document.getElementById("back")
    back.style.display = "block";

    document.getElementById("tip").innerHTML = ("Your tip split between " + quantity + " person(s) is $" + tip.toFixed(2)); 
    }
}

function back() {
    var front = document.getElementById("front");
    front.style.display = "block";
    var back = document.getElementById("back");
    back.style.display = "none";

    document.getElementById("myform").reset();
    
}