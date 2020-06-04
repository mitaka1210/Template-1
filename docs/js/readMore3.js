function myFunctionThree() {
    let dots = document.getElementById("dots3");
    let moreText = document.getElementById("more3");
    let btnText = document.getElementById("myBtn3");

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
