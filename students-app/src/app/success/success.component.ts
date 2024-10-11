import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  showNames: boolean = false;
  names: string[] = [
    'Johny',
    'Raul',
    'Mark',
    'Ronaldo'
  ]
  constructor(public authService: AuthService) { }
  get user() {
    return this.authService.getUser()
  }
  get buttonLabel() {
    return this.showNames ? 'Hide Names' : 'Show Names'
  }
  changeShowNames() {
    this.showNames = !this.showNames;
  }

  logout() {
    this.authService.logout();
  }
}