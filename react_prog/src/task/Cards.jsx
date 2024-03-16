import React from 'react'
import "./App.css"  

export const Cards = (props) => {
  return (
        <div className='cards'>
            <div className="card">
                <img src={props.img} alt="" />
                { <div className="card-body">
                    <span className='card-categary'>{props.cardcat}</span>
                    <h3 className='title'>{props.title}</h3>
                    <a href={props.add}>
                        <button>Watch</button>
                    </a>
                </div> }
            </div>
        </div>
  )
}
