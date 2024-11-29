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