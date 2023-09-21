import React from 'react'
import { PokemonViewDetail } from '../../interface'
interface Props {
    setSelected: React.Dispatch<React.SetStateAction<boolean>>,
    viewDetail:PokemonViewDetail,
    setViewDetail:React.Dispatch<React.SetStateAction<PokemonViewDetail>>,
}
const PokemonDetail:React.FC<Props> = (props) => {
    const {setSelected,viewDetail}=props;
  
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-slate-500 flex justify-center items-center'>
         <div className='bg-white border rounded m-2 pb-2 w-1/8  text-[24px] text-slate-500 relative'  >
            <div className='absolute top-0 right-2 cursor-pointer '
            onClick={()=>setSelected(false)}>X</div>
           <div className='flex items-center border-b   bg-gradient-to-b from-yellow-500 to-white' > 
            <div className='text-center mx-auto flex justify-center w-1/2'><img width={'100%'}  src={viewDetail.sprites.back_default}/></div>
            <div className='text-center w-1/2 font-medium'>{viewDetail.name}</div>
           </div>
         <div className='w-[300px] flex flex-wrap px-2'><span className='mr-2'>Ablities: </span>{viewDetail.abilities.map((el :any)=>{
            return <span> {el.name}</span>
         })}</div>
        
    </div>
    </div>
  )
}

export default PokemonDetail