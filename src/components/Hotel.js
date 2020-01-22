import React, { Component } from 'react'
import "./css/Hotel.css"

export default class Hotel extends Component {

    handleClick = (event) => {
        console.log("checkbox got clicked",event);
        this.props.applyDiscount(this.props.data.id)
        
    }
    
    render() {
        const {name, price, discount} = this.props.data
        console.log("render of hotel c. ", this.props)

        return (
            <div className="hotelBox">
                <p>{name}</p>
                <p><em> {price}</em></p>
                <input type="checkbox" name="hotelVoucher" value={discount} onClick={this.handleClick}/> 
            </div>
        )
    }
}
