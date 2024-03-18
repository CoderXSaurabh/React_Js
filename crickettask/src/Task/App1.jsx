import React, { Component } from 'react'
import Card from './Card'
import "./style.css"
export default class App1 extends Component {
    render() {
        return (
            <>
                <div class="collection">
                    <Card img="https://i.pinimg.com/originals/d0/2c/0e/d02c0e5155c7172e7e96e3955bf4367c.png" head="ODI's Mathc"name="Virat Kohli" link="https://www.espncricinfo.com/live-cricket-match-results"/>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </>
        )
    }
}
