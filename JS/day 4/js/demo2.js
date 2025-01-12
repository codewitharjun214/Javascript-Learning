function alertbox() {
    alert("alert box is called")
}

function promptbox() {
    let strName = prompt("Enter the Name: ");
    alert("Hi, " + strName);
}

function confirmbox() {
   if( confirm("do you want to delete the record")){
    alert("deleted successfully")
   }else{
    alert("thank you visit again")
   }
}