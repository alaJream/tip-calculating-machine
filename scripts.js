function caculateTip() {
    var price = doucment.getElementById("total").value;
    var queantity = document.getElementById("quantity").value;
    var satisfaction = doucment.getElementById("satisfaction").value;

    var tip = ((price * satisfaction) / quantity);


}