import React, { Component } from 'react'
import close from '../images/close.png'
import minus from '../images/Minus.svg'
import plus from '../images/plus.svg'


export class CartItem extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
        //  price: this.props.price,
      }
    }

    IncrementCount = () => {
        this.setState({count: this.state.count + 1});

      }
    DecrementCount = () => {
      if(this.state.count >= 1){
        this.setState({count: this.state.count - 1});

      }
  }
render() {
    const { count } = this.state;

    return (
      <div className='ml-10 row'>
        <div className='food-section'>
            <img id='close' src={close} alt='' />
            <img id='productImage' src={this.props.productImage} alt='' />

            <div className='flex-column plus-parent'>
                {this.props.productName}
                <div className='plus-minus'>
                    <img onClick={this.DecrementCount} src={minus} alt='' />
                    {count}
                    <img onClick={this.IncrementCount} src={plus} alt='' />

                </div>
            </div>
        </div>
        <div>#{this.props.price * this.state.count}</div>
    </div>
      
    )
  }
}

export default CartItem