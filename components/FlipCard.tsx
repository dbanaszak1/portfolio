import React from 'react'

interface props{
    cards: {
        imageurl: string;
        text1: string;
        text2: string;
        text3: string;
    }[]
}
const FlipCard = ({cards}:props) => {
    
  return (
    cards.map((cards, index)=>(
        <div key={index} className="flex  items-center justify-center py-6">
            <div className="group h-96 w-80 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" 
                    src={cards.imageurl} 
                    alt="" />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">{cards.text1}</h1>
                    <p className="text-lg">{cards.text2}</p>
                    <p className="text-sm">{cards.text3}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>        
    ))
  )
}

export default FlipCard
