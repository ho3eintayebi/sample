function emailValidation(){
    var x = document.forms["myForm"].value;
    if (x == "")
        return true;
    else{
      var atpos=x.indexOf("@");
      var dotpos=x.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
         {
            alert ("Please enter a valid e-mail address")
          return false;
         }
    }
}



function blockForm () {
    document.getElementById('firstform').style.display="none";
    document.getElementById('secondform').style.display="block";
}
document.getElementById('btn').addEventListener('click',blockForm);

function closeForm(){
    document.getElementById('firstform').style.display="block";
    document.getElementById('secondform').style.display="none";
}
document.getElementById('closebtn').addEventListener('click',closeForm);

function completeInformation() {
    document.getElementById('firstform').style.display="none";
    document.getElementById('secondform').style.display="none";
    document.getElementById('thirdform').style.display="block";
}
document.getElementById('signbtn').addEventListener('click',completeInformation);

function closebtn2() {
    document.getElementById('thirdform').style.display="none";
    document.getElementById('firstform').style.display="block";
}
document.getElementById('closebtn2').addEventListener('click',closebtn2);


    if(emailValidation===true){
        function signbtn2(){
    document.getElementById('thirdform').style.display="none";
    document.getElementById('firstform').style.display="block";
    }
}
document.getElementById('signbtn').addEventListener('click',emailValidation);

