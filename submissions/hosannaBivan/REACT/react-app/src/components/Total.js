import React, { useState } from 'react'
// import React, { Component } from 'react'
// import CartItem from './CartItem'


function Total(props) {
// export class Total extends Component {


//   constructor(props) {
//     super(props)

//     this.state = {
//        total: 0,
//     }
//   }

//    const [total, setTotal] = useState(0);
//    setTotal( {total: (this.price * (this.state.count + 1))} );



//   incrementCount = () => {
//       // this.setState(
//       //     (plus) => ({count: plus.count + 1}));
//       this.setState(
//         {total: (this.props.price * (this.state.count + 1))}
//         );
      
//     }

//   render(props) {


//   const { total } = this.state;

  return (
    <div className='ml-10 row'>
        <div className='food-section total'>
            Total
        </div>
        <div className='total-money'># {props.totalPrice}</div>
    </div>

    // <div className='row'>
    //             <div className='food-section total'>
    //                  Total
    //              </div>
    //              <div className='total-money'># {total + 1200}</div>
    // </div>
  )
}
// }

export default Total