import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output('formValChange') onFormValChange: EventEmitter<any> =
  new EventEmitter();

  public form!: FormGroup;
  public onEdit:boolean = false


  constructor(private fb: FormBuilder, private datePipe: DatePipe) { }


  onChangeField(type:string, value:any){
    let val = value.target.value 
    if(type === 'expiryDate'){
      val = this.datePipe.transform(val, 'MM/YY')
    }
    console.log(type,value);
    this.onFormValChange.emit({type, val})
  }

  


  private initForm() {
    this.form = this.fb.group({
      cardNumber: new FormControl('', [Validators.required]),
      cardHolder: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      cvvNumber: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit(){
    console.warn(this.form.value)
  }
  ngOnInit(): void {
    this.initForm()
  }

}
