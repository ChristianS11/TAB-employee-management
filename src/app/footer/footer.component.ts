import { Location, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public is_access: boolean = false;

  constructor(private location: Location) {}
  
  checkFooter() {
    this.is_access = false;
    var path = this.location.path();
    
    if(path != '/login' && path != '')
      this.is_access = true;
    
    return this.is_access;
  }

}
