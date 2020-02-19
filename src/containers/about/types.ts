
// DATA TYPES ------------------------
// readonly olmasının sebebi datanın mutate olmaması için 

// base person object 
export interface IPerson {
    readonly id?:number,
    readonly name?:string,
    readonly username?:string,
    readonly email?:string,
    readonly address?:IAddress  
    readonly phone?:string,
    readonly website?:string,
    readonly company?: ICompany
};

// if needed as a type sub props can be divided  !!!! 

// base address object. used anywhere needed
interface IAddress {
    readonly street?: string,
    readonly suite?:string,
    readonly city?:string,
    readonly zipcode?:string,
    readonly geo?:{
        lat:string,
        lng:string
    }
};

// base address object. used anywhere needed
interface ICompany {
    readonly name?:string,
    readonly catchPhrase?:string,
    readonly bs?:string
};
