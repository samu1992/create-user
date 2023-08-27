import React from 'react'
import  '../page.css'

interface PropsBolean {
    isSelected: boolean;
}
 const ProcessBars: React.FC<PropsBolean> = ({isSelected}) =>{

    return(
            <div className={`processDiv ${isSelected ?  'processDivActive' : ''}`}/>
    )
}

export default ProcessBars