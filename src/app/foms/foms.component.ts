import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-foms',
  templateUrl: './foms.component.html',
  styleUrls: ['./foms.component.css']
})
export class FomsComponent implements OnInit {
form:any;
emailRegex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
contactRegex:string="[789][0-9]{9}";
  constructor(private route:ActivatedRoute) { 
    this.form=new FormGroup({
      fullName: new FormControl('',
    [Validators.required,Validators.minLength(5)]
    ),
      email: new FormControl('',
      [Validators.required,Validators.pattern(this.emailRegex)]),
      address: new FormControl('',
      Validators.required), 
      contactDetails:new FormGroup({
        shippingAddress:new FormControl('',Validators.required),
        contactNo:new FormControl('',[Validators.required,Validators.pattern(this.contactRegex)])
      }),
      skills:new FormArray([])
    });
  }

  ngOnInit():void {
this.route.paramMap.subscribe(value=>{
let id=value.get('id');
const title=value.get('title');
console.log(id);
console.log(title);
})
  }
onSubmit(f:NgForm){
  console.log(f.value);
}
getValue(f:FormControl){
  console.log(f);
}
get fullname(){
  return this.form.get('fullName');
}
get Email(){
return this.form.get('email');
}
get Address(){
  return this.form.get('address');
}
get ShippingAddress(){
  return this.form.get('contactDetails.shippingAddress');
}
get ContactNo(){
  return this.form.get('contactDetails.contactNo');
}
get Skills(){
  return this.form.get('skills') as FormArray;
}
addSkills(skills:HTMLInputElement){
  this.Skills.push(
    new FormControl(skills.value))
    //console.log(skills.value);

    skills.value='';
    console.log(this.form.value);
}
removeSkills(index){
  this.Skills.removeAt(index);
}
onSubmit1(){
  this.form.value
  console.log(this.form.value)
}
}
