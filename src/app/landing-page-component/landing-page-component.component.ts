import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})
export class LandingPageComponentComponent implements OnInit {

  userEmail!: string;
  userPhone!: string;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }

}
