import { Component, OnInit } from '@angular/core';
import { PartageImage } from '../partage-image/models/partage-image.model';
import { PartageImageService } from '../services/partage-image.service';

@Component({
  selector: 'app-partage-image-list',
  templateUrl: './partage-image-list.component.html',
  styleUrls: ['./partage-image-list.component.scss']
})

export class PartageImageListComponent implements OnInit {

  monPartage!: PartageImage[];

  constructor(private PartageImageService: PartageImageService) { }

  ngOnInit(): void {
    this.monPartage = this.PartageImageService.getAllPartageImage();
  }

}
