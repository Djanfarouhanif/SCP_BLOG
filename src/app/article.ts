export interface Article {
    id:string;
    title:string;
    post:string;
    post_image:string;
    data_to_create:string;
}


export interface ArticleComment{
    article: Article;
    
    
}


export class Person{

    username!:string;
    email!: string;
    password!: string;
    password2!: string;
}