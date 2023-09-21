import React from 'react'
import PokemonItem from '../PokemonItem/PokemonItem';
import { PokemonViewDetail } from '../../interface';

interface Props {
   pokemons:  PokemonViewDetail[] ,
   setSelected: React.Dispatch<React.SetStateAction<boolean>>
   setViewDetail:React.Dispatch<React.SetStateAction<PokemonViewDetail>>
}
const Pokemons:React.FC<Props> = (props) => {  
   const {pokemons,setSelected,setViewDetail}=props;
  
   
  return (
    <div className=' bg-slate-500 '>
       <div className=' text-green-400 font-bold text-[30px] pt-8 text-center'>POKEMON</div>
       <div className=' w-[80%] flex justify-center flex-wrap mx-auto'>
          {
            pokemons.map((item,index)=>{
               
               const abilities=item.abilities.map((el:any)=>{
                   return {
                    name:el.ability.name
                   }
               });
             
              return <PokemonItem 
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.sprites.back_default}
              setSelected= {setSelected}
              setViewDetail={setViewDetail}
              abilities={abilities}


              />
            })
          }
       </div>
       
    </div>
  )
}

export default Pokemons