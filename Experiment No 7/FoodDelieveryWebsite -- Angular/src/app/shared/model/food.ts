export class Food{
    id!:string;  // ! is used to declare value in data.ts
    name!:string;
    price!:number;
    tags?:string[];
    favourite!:boolean;
    stars!:number;
    imageUrl!:string;
    cookTime!:string;
}