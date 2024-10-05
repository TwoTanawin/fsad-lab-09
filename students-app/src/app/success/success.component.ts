import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent {
  names: string[] = ['John', 'Rick', 'Goku', 'Gojo'];

  showNames: boolean = false;

  get buttonLabel(){
    return this.showNames ? 'Hide Names' : 'Show Names'
  }

  toggleNames() {
    this.showNames = !this.showNames;
  }
}
