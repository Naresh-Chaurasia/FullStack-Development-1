import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  isButtonDisable:boolean = false;
  greet:string = "Hi There. I am from Component";
  textValue:string='textValue';

  fromComponentToHtml(){
      return "fromComponentToHtml Message";
  }

  onButtonClick(){
    this.greet = "Hi There. Button is clicked";
    this.isButtonDisable = !this.isButtonDisable;
  }

  typingInText(e: Event){
    console.log(e);
    this.textValue = (<HTMLInputElement>e.target).value;
  }
}
