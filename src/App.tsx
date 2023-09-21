import React, { useEffect, useState } from 'react';
import './App.css';
import { getPokemonDetailService, getPokemonNexteService, getPokemonsService } from './services/PokemonServices';
import Pokemons from './components/Pokemons/Pokemons';
import { Pokemon } from './interface';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import { PokemonViewDetail } from './interface';
interface Pokemons {
  name:string,
  url:string
 }

const App:React.FC=()=> {
   
 const [pokemons,setPokemons]=useState<PokemonViewDetail[]>([])  
 const [nextUrl,setNextUrl]=useState<string>('')
 const [loading,setLoading]=useState<boolean>(false)
 const [selected,setSelected]=useState<boolean>(false)
 const [viewDetail,setViewDetail]=useState<PokemonViewDetail>({
    id:0, 
    name:'',
    sprites:{
      back_default:''
    },
    abilities :[
      {  
        name:''
      }
    ]  
 })

   const fetchPokemons= async()=>{
       setLoading(true)
      const res= await getPokemonsService();
       setNextUrl(res.data.next)
       res.data.results.forEach( async(pokemon :Pokemon  ) => {  
           const poke= await getPokemonDetailService(pokemon.name)
           setPokemons(prev=>[...prev,poke.data])
       });
       setLoading(false)
   }
   
   useEffect(()=>{
      fetchPokemons();
   },[])

    const handleLoadMore= async()=>{
         setLoading(true)
         const res= await getPokemonNexteService(nextUrl);
         res.data.results.forEach( async(pokemon :Pokemon  ) => {  
          const poke= await getPokemonDetailService(pokemon.name)
          setPokemons(prev=>[...prev,poke.data])
         
      });
      setLoading(false)
    }
  return (
    <div className=" bg-slate-500 h-screen overflow-auto">
        
       <Pokemons pokemons = {pokemons}  setSelected ={setSelected}  setViewDetail={setViewDetail}/> 
       <div className='text-center'>
        <button className='bg-green-500 rounded-lg text-[20px] font-bold p-2'
        onClick={()=>handleLoadMore()}>{!loading?'Load more':'Loading...'}</button>
       </div>
       {selected ? <PokemonDetail setSelected ={setSelected} viewDetail={viewDetail} setViewDetail={setViewDetail}/>:''}
    </div>
  );
}

export default App;
