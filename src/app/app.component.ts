import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cvvNumber!:string
  public cardHolder!:string
  public cardNumber!:string
  public expiryDate!:string
  
  public onFormChange(val:any){
    if(val.type === "cvvNumber"){
      this.cvvNumber = val.val
    }
    if(val.type === "cardHolder"){
      this.cardHolder = val.val
    }
    if(val.type === "cardNumber"){
      this.cardNumber = val.val
    }
    if(val.type === "expiryDate"){
      this.expiryDate = val.val
    }
    console.log(val)
  }




}
