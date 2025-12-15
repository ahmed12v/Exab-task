import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

   navbarOpen = false;
   isFixed = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar(){
    this.navbarOpen =false
  }
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.isFixed = scrollY > 100; 
  }

}
