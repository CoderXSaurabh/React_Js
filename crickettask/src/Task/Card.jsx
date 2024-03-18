import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <>
            <div className='cards'>
            <div className="card">
                <img src={this.props.img} alt="" />
                 <div className="card-body">
                    <span className='card-categary'>{this.props.head}</span>
                    <h3 className='title'>{this.props.name}</h3>
                    <a href={this.props.link}>
                        <button>Watch</button>
                    </a>
                </div> 
            </div>
        </div>
            </>
        )
    }
}
