function myFunctionTwo() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("myBtn2");
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
