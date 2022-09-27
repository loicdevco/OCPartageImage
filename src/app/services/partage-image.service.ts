import { Injectable } from "@angular/core";
import { PartageImage } from "../partage-image/models/partage-image.model";

@Injectable({
    providedIn: 'root'
})
export class PartageImageService {
    monPartage: PartageImage[] = [
        {
            id: 1,
            title: 'html',
            description: 'Langage de génération de page statique',
            imageUrl: '../assets/img/logoHtml.webp',
            dateCreation: new Date(),
            like: 15,
            location: 'Pôle nord',
        },

        {
            id: 2,
            title: 'css 3',
            description: 'Langage de paramètrage de style',
            imageUrl: '../assets/img/logoCss.webp',
            dateCreation: new Date(),
            like: 4,
            location: 'Chine',
        },

        {
            id: 3,
            title: 'js',
            description: 'Langage pour créer des pages interactives',
            imageUrl: '../assets/img/logoJs.webp',
            dateCreation: new Date(),
            like: 14,
        }
    ];

    getAllPartageImage(): PartageImage[] {
        return this.monPartage;
    }

    getPartageImageById(partageImageId: number): PartageImage {
        const PartageImage = this.monPartage.find(PartageImage => PartageImage.id === partageImageId);
        if (!PartageImage) {
            throw new Error('Image non trouvée');
        } else {
            return PartageImage;
        }
    }
    likePartageImageById(partageImageId: number, likeType: 'like' | 'unlike'): void {
        const partageImage = this.getPartageImageById(partageImageId);
        likeType === 'like' ? partageImage.like++ : partageImage.like--;

    }

    // unlikePartageImageById(partageImageId: number): void {
    //     const PartageImage = this.monPartage.find(PartageImage => PartageImage.id === partageImageId);
    //     if (PartageImage) {
    //         PartageImage.like--;
    //     } else {
    //         throw new Error('Image non trouvée');
    //     }
    // }
}