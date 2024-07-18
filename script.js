function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  
  }
  
  
  var typed = new Typed(".typetext",
    {
      strings: ["an artist", "a computer scientist", "a student", "youtuber"],
      typeSpeed:200,
      backSpeed:100,
      backDelay:1000,
      loop:true
    });
  