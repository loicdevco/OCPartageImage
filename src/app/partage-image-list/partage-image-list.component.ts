import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, tap, takeUntil, Subject } from 'rxjs';
import { PartageImage } from '../partage-image/models/partage-image.model';
import { PartageImageService } from '../services/partage-image.service';

@Component({
  selector: 'app-partage-image-list',
  templateUrl: './partage-image-list.component.html',
  styleUrls: ['./partage-image-list.component.scss']
})

export class PartageImageListComponent implements OnInit, OnDestroy {

  monPartage!: PartageImage[];
  private destroy$!: Subject<boolean>;

  constructor(private PartageImageService: PartageImageService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.monPartage = this.PartageImageService.getAllPartageImage();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(value => console.log(value))
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
