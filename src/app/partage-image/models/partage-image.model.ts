export class PartageImage {
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    dateCreation!: Date;
    like!: number;
    location?: string;

    // // En rajoutant le mot public dans les paramètres du constructeur pas besoin de dupliquer les paramètres
    // constructor(public title: string,
    //     public description: string,
    //     public imageUrl: string,
    //     public dateCreation: Date,
    //     public like: number,
    //     public location?: string) {
    //     // this.title = title;
    //     // this.description = description;
    //     // this.imageUrl = imageUrl;
    //     // this.dateCreation = dateCreation;
    //     // this.like = like;
    // }
}