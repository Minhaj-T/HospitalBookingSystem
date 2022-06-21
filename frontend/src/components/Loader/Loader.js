import React from 'react'
import loadingAnim from "../../images/512x512.gif"
import "./Loader.css"

function Loader() {
  return (
    <div className='loader-wrapper'>
        <img className='load-anim' src={loadingAnim} alt='' draggable={false}/>
    </div>
  )
}

export default Loader