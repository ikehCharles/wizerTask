import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
  @Input() cardNumber!:string
  @Input() cardHolder!:string
  @Input() expiryDate!:string
  @Input() cvvNumber!:string


  constructor() { }

  ngOnInit(): void {
  }

}
