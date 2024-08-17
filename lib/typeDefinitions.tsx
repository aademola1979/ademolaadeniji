export type Message = {
    name:string,
    email:string,
    content:string

}

export type Work={
    id:string,
    title:string,
    description:string,
    imgUrl:string,
    category:string,
    siteUrl:string
}

export type WorkCardRop = {
    work:Work,
    index:number,
    active: string,
}