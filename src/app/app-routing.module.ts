import { NgModule } from "@angular/core";
import { PartageImageListComponent } from "./partage-image-list/partage-image-list.component";
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponentComponent } from "./landing-page-component/landing-page-component.component";
import { SimplePartageImageComponent } from "./simple-partage-image/simple-partage-image.component";

const routes: Routes = [
    { path: 'monPartage/:id', component: SimplePartageImageComponent },
    { path: 'monPartage', component: PartageImageListComponent },
    { path: '', component: LandingPageComponentComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }