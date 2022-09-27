import { Component, OnInit, Input } from '@angular/core';
import { PartageImageService } from '../services/partage-image.service';
import { PartageImage } from './models/partage-image.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partage-image',
  templateUrl: './partage-image.component.html',
  styleUrls: ['./partage-image.component.scss']
})

export class PartageImageComponent implements OnInit {
  @Input() partageImage!: PartageImage;

  buttonText!: string;

  constructor(private partageImageService: PartageImageService,
    private router: Router) { }

  ngOnInit() {
    this.buttonText = "😊 Good 😊";
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

  onViewImage() {
    this.router.navigateByUrl(`monPartage/${this.partageImage.id}`);
  }
}
