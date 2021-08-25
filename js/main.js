console.log('Hello World!');


function tanya(){
         var tanya = confirm("Mau ga kamu jadi pacarku ?");
         
         if(tanya === true) {
           alert("Makasihhhh I Love you so much");
         }else{
            alert("It's okay kita temenan aja :)");
         }
         
}

function Confirm() {
    var confirm_value = document.createElement("INPUT");
    confirm_value.type = "hidden";
    confirm_value.name = "confirm_value";
    if (confirm("Do you want to block hour?")) {
        confirm_value.value = "Yes";
    } else {
        confirm_value.value = "NO";
    }
    document.forms[0].appendChild(confirm_value);
}

function mau(){
  alert("Makasihhh I love you so much :)");
}