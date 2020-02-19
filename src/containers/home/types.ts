// DATA TYPES ------------------------
// readonly olmasının sebebi datanın mutate olmaması için 

// post list item object structure
export interface IPostListItem{
    readonly id?:number,
    readonly userId?:number,
    readonly title?:string
    readonly body?:string,
}