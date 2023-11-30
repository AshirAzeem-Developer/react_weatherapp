import { CloudSnow } from 'lucide-react'
import React from 'react'

const ForecastCard = () => {
    return (
        <>
            <div className='text-center flex flex-col items-center text-white hover:backdrop-blur-sm hover:bg-slate-500/20 px-4 py-1 rounded-2xl'>
                <h3>Now</h3>
                <h1>
                    28°
                </h1>
                <CloudSnow size={20} color='white' />
            </div>
        </>
    )
}

export default ForecastCard