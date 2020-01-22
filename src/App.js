import React, { Component } from "react";
import "./App.css";
import Hotel from "./components/Hotel";

class App extends Component {
  state = {
    hotels: [
      { id: 1, name: "Hotel Berlin-imo", price: 160, discount: false },
      { id: 2, name: "Amster-stay", price: 200, discount: false },
      { id: 3, name: "Hotel NY", price: 60, discount: false }
    ]
  };
  applyDiscount = id => {
    console.log("Apply discount for hotel: ", id);
    let discountedHotels = [...this.state.hotels];
    discountedHotels.map(accomodation => {
      if (id === accomodation.id && !accomodation.discount) {
        const discountedAccomodation = accomodation;
        discountedAccomodation.price = accomodation.price * 0.8;
        discountedAccomodation.discount = true
        return discountedAccomodation;
      }
      console.log("what is discounted hote;s", discountedHotels);
      
      this.setState({ hotels: discountedHotels });
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.hotels.map(accomodation => {
          return (
            <Hotel data={accomodation}  applyDiscount={this.applyDiscount} key={accomodation.id}/>
          );
        })}
      </div>
    );
  }
}

export default App;
