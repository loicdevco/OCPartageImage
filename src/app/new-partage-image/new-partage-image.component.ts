import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PartageImage } from '../partage-image/models/partage-image.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-partage-image',
  templateUrl: './new-partage-image.component.html',
  styleUrls: ['./new-partage-image.component.scss']
})
export class NewPartageImageComponent implements OnInit {

  partageForm!: FormGroup;
  partageImageApercu$!: Observable<PartageImage>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.partageForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    });
    this.partageImageApercu$ = this.partageForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        dateCreation: new Date(),
        id: 0,
        like: 0
      }))
    );
  }

  onSubmitForm(): void {
    console.log(this.partageForm.value);
  }
}
