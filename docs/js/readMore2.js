function myFunctionTwo() {
    var dots = document.getElementById("dots");
    var moreText2 = document.getElementById("more2");
    
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText2.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText2.style.display = "inline";
    }
}
