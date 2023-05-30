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