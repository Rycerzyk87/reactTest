import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    productStock: 8,
    orderNumber: 0,
  }
  handleRemoveOrder = () => {
    this.setState({
      orderNumber: this.state.orderNumber - 1,
    })
  }
  handleAddOrder = () => {
    this.setState({
      orderNumber: this.state.orderNumber + 1,
    })
  }
  handleStockRemove = () => {
    this.setState({
      productStock: this.state.productStock - this.state.orderNumber,
    })
  }
  render() {
    const { orderNumber, productStock } = this.state
    return (
      <>
        <button disabled={orderNumber === 0 ? true : false} onClick={this.handleRemoveOrder}>-</button>
        <span style={orderNumber > productStock || orderNumber === 0 ? { opacity: 0.3 } : {}}>{orderNumber}</span>
        <button disabled={orderNumber >= productStock ? true : false} onClick={this.handleAddOrder}>+</button>
        {orderNumber > 0 && <button className="buyButton" onClick={this.handleStockRemove} style={orderNumber > productStock ? { display: 'none' } : {}}>Kup teraz</button>}
        <span className="error" style={productStock === 0 ? { display: 'block' } : {}}>Brak towaru na magazynie</span>
      </>
    );
  }
}

export default App;
