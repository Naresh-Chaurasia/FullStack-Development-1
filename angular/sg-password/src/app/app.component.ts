import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password:string = '';
  includeletter:boolean = false;
  length:number = 0;

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    if(!isNaN(parsedValue)) this.length = parsedValue;
  }

  onButtonClick() {
    console.log(this.includeletter);
    console.log('Button was clicked');
    console.log(this.length);
    this.password = "password";
  }

  getPassword(){
    return this.password;
  }

  onChangeUseLetters(){
    this.includeletter = !this.includeletter;
  }
}
