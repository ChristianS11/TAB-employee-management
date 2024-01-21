import { Location, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isOpen:boolean = false;
  public is_access: boolean = false;

  constructor(private location: Location, private router:Router) {}
  
  checkHeader() {
    this.is_access = false;
    var path = this.location.path();
    
    if(path != '/login' && path != '')
      this.is_access = true;
    
    return this.is_access;
  }

  signOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
