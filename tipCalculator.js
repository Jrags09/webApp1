
function calculateTip() {
    var subtotal, percentage, total;
  
    subtotal = document.getElementById("subtotal").value;
    percentage = document.getElementById("percentage").value;
    total = (1+(percentage/100)) * subtotal;
    document.getElementById("total").innerHTML = total;
  }

