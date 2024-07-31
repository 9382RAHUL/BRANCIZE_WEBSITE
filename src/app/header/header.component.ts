import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    //   this.router.navigate(['/content']);
  }

  mobileMenuOpen = true;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    console.log(this.mobileMenuOpen);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
