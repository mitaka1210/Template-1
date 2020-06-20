function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
    let btnColor = document.querySelector('button');
    btnColor.classList.toggle("mystyle2");
  
   if (dots.style.display === "none" ) {
   
      dots.style.display = "inline";
      
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "az oku"; 
      
      moreText.style.display = "inline";
      
    }
    
}
