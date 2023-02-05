import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { noSpace } from '../validators/validators';
@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
form:any;
emailRegex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
contactRegex:string="[789][0-9]{9}";

  constructor(fb:FormBuilder) { 
    this.form=fb.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.pattern(this.emailRegex),Validators.email]],
      contactDetails:fb.group({
        address:['',Validators.required],
        shippingAddress:['',Validators.required],
        contactNo:['',Validators.pattern(this.contactRegex)]
      }),
      skills:fb.array([]),
      username:['',[Validators.required,Validators.minLength(5),
        noSpace.noSpaceValidations
      ]
    ],
      password:['',Validators.required]
    })
  }

  ngOnInit() {
  }
   get fc(){
    return this.form.controls;
    this.fc.password;
   }
}
