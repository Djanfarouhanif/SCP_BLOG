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