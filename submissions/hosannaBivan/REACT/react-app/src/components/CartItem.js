// import React from 'react'
import React, { Component } from 'react'
import close from '../images/close.png'
import minus from '../images/Minus.svg'
import plus from '../images/plus.svg'



export class CartItem extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
      //  total: 1200,
      //  price: 0,
      //  props.price * this.state.count,
    }
  }

  incrementCount = () => {
      this.setState(
          (plus) => ({count: plus.count + 1}));
      // this.setState({total: 1200 + (this.props.price * (this.state.count + 1))});
      // console.log('total', 1200 + (this.props.price * (this.state.count + 1)))
      // console.log('count', this.state.count + 1)
      // console.log('price', this.props.price)

    }
  decrementCount = () => {
    if(this.state.count >= 1){
      this.setState(
          (minus) => ({count: minus.count - 1}));
      // this.setState({total: this.state.total + this.props.price * this.state.count});
      // console.log('total', this.state.total)
    }
  }

  render(props) {
    const { count } = this.state;

  return (
    <div className='ml-10 row'>
            <div className='food-section'>
                <img id='close' src={close} alt='' />
                <img id='productImage' src={this.props.productImage} alt='' />

                <div className='flex-column plus-parent'>
                    {this.props.productName}
                    <div className='plus-minus'>
                        <img onClick={this.decrementCount} src={minus} alt='' />
                        {count}
                        <img onClick={this.incrementCount} src={plus} alt='' />

                    </div>
                </div>
            </div>
            <div>#{this.props.price * this.state.count}</div>
            {/* <div>#{this.props.total * this.state.count}</div> */}
            
    </div>
  )
}
}

export default CartItem

