import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class CartPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    image: "images/image4.svg",
                    imaAlt: "kfc-king bucket",
                    name: "KFC - King Bucket",
                    quantity: 1,
                    price: 5000,
                    totalPrice: 5000,
                },
                {
                    image: "images/image3.svg",
                    imaAlt: "refuel max",
                    name: "Refuel Max",
                    quantity: 1,
                    price: 1500,
                    totalPrice: 1500,
                },
                {
                    image: "images/image1.svg",
                    imaAlt: "refuel max",
                    name: "Refuel Max",
                    quantity: 1,
                    price: 1200,
                    totalPrice: 1200,
                }
            ],
            total: 7700,
            deliveryPrice: 1200,
            totalItem: 3

        }
    }

    onIncreaseCount = (val) => ()=>{
        const newItem = this.state.items.map((item, ind)=>{
            if(ind === val){
                const {quantity, totalPrice, ...others} = item;
                others.quantity = quantity+1;
                others.totalPrice = totalPrice + others.price;
                return others;
            }else{
                return item;
            }
        });
        document.querySelectorAll("span.elem-holder")[val].innerText = newItem[val].quantity;
        this.setState((prevState) => ({total: prevState.total + newItem[val].price, 
                                        totalItem: prevState.totalItem + 1, 
                                        items: newItem }));
        if (this.state.totalItem === 0 && this.state.total === 0){
            this.setState({deliveryPrice: 1200});
        }
    }

    onDeductCount = (val) => ()=>{
        if (this.state.items[val].quantity >=1){
            const newItem = this.state.items.map((item, ind)=>{
                if(ind === val){
                    const {quantity, totalPrice, ...others} = item;
                    others.quantity = quantity-1;
                    others.totalPrice = totalPrice - others.price;
                    return others;
                }else{
                    return item;
                }
            });
            document.querySelectorAll("span.elem-holder")[val].innerText = newItem[val].quantity;
            this.setState((prevState) => ({total: prevState.total - newItem[val].price, 
                totalItem: prevState.totalItem - 1, 
                items: newItem }));
            if (this.state.totalItem - 1 === 0){
                this.setState({deliveryPrice: 0});
            }
        }
    }

    render(){
        return(
            <div>
                <div style={{marginTop: "50px", marginBottom: "50px"}}>
                    <div style={{display: "inline"}}><p style={{color: "#f4f4f4", display: "inline"}}>Home &#62;</p>Cart</div>
                    <h2 style={{marginTop: "30px"}}>Cart</h2>
                </div>
                <div className="option-container">
                    <button>X</button>
                    <div className="option-wrapper">
                        <div className="flex-center">
                            <img src={this.state.items[0].image} alt={this.state.items[0].imaAlt}></img>
                            <div className="flex-column">
                                <h3>{this.state.items[0].name}</h3>
                                <div className="flex-center">
                                    <button onClick={this.onIncreaseCount(0)} className='btn-3'>+</button>
                                    <span className = "elem-holder" style={{margin: "0 25px", color:"brown"}}>1</span>
                                    <button onClick={this.onDeductCount(0)}  className='btn-4'>-</button>
                                </div>
                            </div>
                        </div>
                        <h3>{"#" + this.state.items[0].totalPrice}</h3>
                    </div>
                </div>
                <div className="option-container">
                    <button>X</button>
                    <div className="option-wrapper">
                        <div className="flex-center">
                            <img src={this.state.items[1].image} alt={this.state.items[1].imaAlt}></img>
                            <div className="flex-column">
                                <h3>{this.state.items[1].name}</h3>
                                <div className="flex-center">
                                    <button onClick={this.onIncreaseCount(1)} className='btn-3'>+</button>
                                    <span className = "elem-holder" style={{margin: "0 25px", color:"brown"}}>1</span>
                                    <button onClick={this.onDeductCount(1)}  className='btn-4'>-</button>
                                </div>
                            </div>
                        </div>
                        <h3>{"#" + this.state.items[1].totalPrice}</h3>
                    </div>
                </div>
                <div className="option-container">
                    <button>X</button>
                    <div className="option-wrapper">
                        <div className="flex-center">
                            <img src={this.state.items[2].image} alt={this.state.items[2].imaAlt}></img>
                            <div className="flex-column">
                                <h3>{this.state.items[2].name}</h3>
                                <div className="flex-center">
                                    <button onClick={this.onIncreaseCount(2)} className='btn-3'>+</button>
                                    <span className = "elem-holder" style={{margin: "0 25px", color:"brown"}}>1</span>
                                    <button onClick={this.onDeductCount(2)}  className='btn-4'>-</button>
                                </div>
                            </div>
                        </div>
                        <h3>{"#" + this.state.items[2].totalPrice}</h3>
                    </div>
                </div>
                <div>
                    <div className="option-wrapper" style={{marginLeft:"20px"}}>
                        <div className="flex-center">
                            <img src="images/scooter 1.svg" alt="Scooter"></img>
                            <h3>Delivery fee</h3>
                        </div>
                        <h3>{"#" + this.state.deliveryPrice}</h3>
                    </div>
                    <div className="option-wrapper" style={{marginLeft:"20px", border:"none"}}>
                        <h1>Total</h1>
                        <h1>{"#" + (this.state.total + this.state.deliveryPrice)}</h1>
                    </div>
                </div>
                <div className='flex-center' style={{width:"100%", justifyContent:"center"}}>
                    <Link to="/verification">
                        <button className = "checkout-btn">Checkout</button>
                    </Link>
                    
                </div>
            </div>
        )
    }
    
}

export default CartPage;