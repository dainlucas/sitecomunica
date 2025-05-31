class NavigationMenu {
  constructor() {
    this.menuToggle = document.querySelector('.menu-toggle');
    this.mainNav = document.querySelector('.main-nav');
    this.isOpen = false;

    this.init();
  }

  init() {
    this.menuToggle?.addEventListener('click', () => this.toggleMenu());
    this.setupCloseOnClick();
    this.setupAccessibility();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.mainNav?.classList.toggle('active');
    this.menuToggle?.classList.toggle('active');
    
    // Update ARIA attributes
    this.menuToggle?.setAttribute('aria-expanded', String(this.isOpen));
  }

  setupCloseOnClick() {
    document.querySelectorAll('.main-nav a')?.forEach(link => {
      link.addEventListener('click', () => {
        this.isOpen = false;
        this.mainNav?.classList.remove('active');
        this.menuToggle?.classList.remove('active');
        this.menuToggle?.setAttribute('aria-expanded', 'false');
      });
    });
  }

  setupAccessibility() {
    // Add proper ARIA attributes
    this.menuToggle?.setAttribute('aria-controls', 'main-nav');
    this.menuToggle?.setAttribute('aria-expanded', 'false');
    this.mainNav?.setAttribute('role', 'navigation');
    this.mainNav?.setAttribute('aria-label', 'Menu principal');
  }
}

// Initialize the navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new NavigationMenu();
});
