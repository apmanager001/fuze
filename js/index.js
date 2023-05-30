class header extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    <header>
    <div class="header-container">
        <div class="header-title">
            <a href="index.html"><h1>ProFuze</h1></a>
        </div>
        <div class="header-login"><a href="signup.html"class="fa fa-user" aria-hidden="true"></a></div>
    </div>
    </header>
    `
    }
}

customElements.define('page-header', header)

class footer extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    <footer class="footer-container">
    <div class="footer-contact">
        <a href="#" class="footer-cats"> Contact</a></div>
    <div class="footer-about">
        <a href="#" class="footer-cats"> About</a></div>
    <div class="footer-faq">
        <a href="#" class="footer-cats"> FAQ</a></div>
    <div class="footer-social">
        <a href=""  class="footer-cats "> Social</a></div>
    <div class="footer-icon1">
        <i class="fa fa-instagram" href="#"></i></div>
    <div class="footer-icon2">
        <i class="fa fa-twitter" href="#"></i></div>
    <div class="footer-icon3">
        <i class="fa fa-facebook-f" href="#"></i></div>
    </footer>
    `
    }
}

customElements.define('page-footer', footer)

const signup = document.getElementById('signup');
const signin = document.getElementById('signin');
const formSignup = document.getElementById('formSignup');
const formSignin = document.getElementById('formSignin');

// Add event listeners to the links
signup.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the link from navigating

  formSignup.style.display = 'block'; 
  formSignin.style.display = 'none'; 
});

signin.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the link from navigating

  formSignin.style.display = 'block'; // Hide form 1
  formSignup.style.display = 'none'; // Show form 2
});