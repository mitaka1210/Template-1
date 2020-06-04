function myFunctionFive() {
    let dots = document.getElementById("dots5");
    let moreText = document.getElementById("more5");
    let btnText = document.getElementById("myBtn5");
    
  
    btnText.classList.toggle("mystyle2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    
    }
}
