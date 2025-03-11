document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });

window.onload = () => {
  const navLinks = document.querySelectorAll('.nav-btn');
  const navLinksMobile = document.querySelectorAll('.nav-btn-mobile');
  // console.log(navLinks);
  
  // navLinks.forEach(navLink => {
  //   navLink.addEventListener('click', (event) =>{
  //     // console.log(event);
  //     // document.querySelector('.active').classList.remove('active');
  //     navLink.classList.add('active');
  //   })
  // })

  let myPageTag = window.location.href;
  console.log(myPageTag);
  if (myPageTag.includes('index')) {
    navLinks[0].classList.add('active');
    navLinksMobile[0].classList.add('active');
    alert("Before you proceed, I just want to let you know that this portfolio is built with pure HTML, CSS, and JavaScript — no frameworks or libraries. I wanted to showcase my foundation in web development. A new React-based portfolio with exciting features and animations is in the works, so stay tuned! For now, feel free to explore this one. Thank you!");
    
  } else if(myPageTag.includes('resume')) {
    navLinks[1].classList.add('active');
    navLinksMobile[1].classList.add('active');
  } else if (myPageTag.includes('skills')) {
    navLinks[2].classList.add('active');
    navLinksMobile[2].classList.add('active');
  } else if (myPageTag.includes('contact-me')) {
    navLinks[3].classList.add('active');
    navLinksMobile[3].classList.add('active');
  }

}
