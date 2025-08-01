function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("readMore");
    var btnText = document.getElementById("showMoreBtn");
  
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


  function scrollLeft() {
    var container = document.querySelector('.Portfolio_container');
    container.scrollLeft -= 200; // Adjust the scroll distance as needed
  }
  
  // Function to scroll the Portfolio_container right
  function scrollRight() {
    var container = document.querySelector('.Portfolio_container');
    container.scrollLeft += 200; // Adjust the scroll distance as needed
  }