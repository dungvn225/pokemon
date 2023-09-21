import React from 'react'
import { PokemonViewDetail } from '../../interface'
interface Props {
 
    id:number,
    name:string,
    image:string,
    abilities:  {  
      name:''
    }[]
    setSelected:  React.Dispatch<React.SetStateAction<boolean>>
    setViewDetail: React.Dispatch<React.SetStateAction<PokemonViewDetail>>
}
const PokemonItem:React.FC<Props> = (props) => {
   const {id,name,image,setSelected,setViewDetail,abilities}=props
   
 
   const handelClickItem=()=>{
      setSelected(prev=>!prev)
      setViewDetail({
        id,
        name,
        sprites:{
          back_default:image
        },
         abilities
      })
   }
  return (
    <div className='bg-white border rounded m-2 p-2 w-1/8 cursor-pointer' 
    onClick={()=>handelClickItem()}>
         <div className='text-center'>{name}</div>
         <div className='text-center mx-auto flex justify-center'><img  src={image}/></div>
    </div>
  )
}

export default PokemonItem