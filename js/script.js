function validacija()                                 
{ 
    var ime = document.forms["FormaNarucivanje"]["Ime"];               
    var email = document.forms["FormaNarucivanje"]["EMail"];    
    var telefon = document.forms["FormaNarucivanje"]["Telefon"];   
    var adresa = document.forms["FormaNarucivanje"]["Adresa"];  

    if (ime.value == "")                                  
    { 
        event.preventDefault();
        window.alert("Niste uneli svoje ime."); 
        ime.focus(); 
        return false; 
    } 
   
    if (adresa.value == "")                               
    { 
        event.preventDefault();
        window.alert("Niste uneli svoju adresu."); 
        adresa.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        event.preventDefault();
        window.alert("Niste uneli svoju e-mail adresu"); 
        email.focus(); 
        return false; 
    } 
    if (!telefon.value.match(/^[0-9]{10}$/))                           
    { 
        event.preventDefault();
        window.alert("Niste ispravno uneli broj telefona"); 
        telefon.focus(); 
        return false; 
    } 

    if(confirm("Da li ste sigurni da ste dobro popunili?[AKO JESTE PRITISNITE OK]"))
    {
        return true;
    }
    event.preventDefault;
    return false;
}

function kliknuto() {
    let checkBox = document.getElementById("potvrda");
    let text = document.getElementById("zapis");

    if (checkBox.checked == true){
      text.style.display = "";
    } else {
      text.style.display = "none";
    }
  }

function newsletter(){
    var email = document.forms["News"]["Email"];
    if(email.value!=""){
        return true;
    }
    else {
        event.preventDefault;
        email.focus();
        return false;
    }
  }