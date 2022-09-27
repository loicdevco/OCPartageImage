import { Component, OnInit } from '@angular/core';
import { PartageImage } from '../partage-image/models/partage-image.model';
import { PartageImageService } from '../services/partage-image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-simple-partage-image',
  templateUrl: './simple-partage-image.component.html',
  styleUrls: ['./simple-partage-image.component.scss']
})
export class SimplePartageImageComponent implements OnInit {

  partageImage!: PartageImage;

  buttonText!: string;

  constructor(private partageImageService: PartageImageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = "😊 Good 😊";
    const partageImageId = +this.route.snapshot.params['id'];
    this.partageImage = this.partageImageService.getPartageImageById(partageImageId);
  }

  onAddLike() {
    if (this.buttonText === "😊 Good 😊") {
      this.partageImageService.likePartageImageById(this.partageImage.id, 'like');
      this.buttonText = "😈 Bad 😈";
    } else {
      this.partageImageService.likePartageImageById(this.partageImage.id, 'unlike');
      this.buttonText = "😊 Good 😊";
    }
  }

}
