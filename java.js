document.querySelector('.btn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});
 
 
 
 
function cookiemelding(){
    document.querySelector(".cookie-message").style.display="none"
    console.log("accepted");
   
}
 
function lightmode(){
    document.querySelector(".home").classList.toggle("lightmode");
 
}
function cookiemelding(){
    document.querySelector(".cookie-message").style.display="none"
    console.log("decline");
}
{
 // Zet de begroeting in het div-element met id "greeting"
 document.getElementById("greeting").textContent = greeting;
}
 
// Roep de functie aan zodra de pagina is geladen
window.onload = getTimeBasedGreeting;
 
 
function toggleMenu() {
    //Elke keer dat deze functie wordt gecalled voeg de show-mobile-nav toe aan de #mobile-nav.
    //Als de #mobile-nav al actief is omdat er al 1 keer is op geklikt, haal de class weer weg
    document.getElementById("mobile-nav").classList.toggle("show-mobile-nav");
  }