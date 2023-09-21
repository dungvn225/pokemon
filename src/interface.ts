export   interface Pokemon {  
    id:number, 
    name:string,
    sprites:{
      back_default:string
    }
   }


export interface PokemonViewDetail extends Pokemon {
  abilities :{  
    name:string
  }[] 
}