import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  warn = false;

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl(),
    message: new FormControl("", [Validators.required, Validators.minLength(3)])
  })

  formsubmit(){    
    if(this.contactForm.valid === true) {
      this.warn = false;
    }
    else {
      this.warn = true;
    }
  }
}
