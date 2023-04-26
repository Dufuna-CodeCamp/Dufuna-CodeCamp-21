import React from "react";
import { Component } from "react";
import kfc from '../images/kfc.svg';
import CartItem from "./CartItem.js";
import DeliveryItem from "./DeliveryItem.js";
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';
import Total from "./Total.js";
import close from '../images/close.svg';
import Checkout from "./Checkout.js";
import coke from "../images/coke.svg";
import pot from "../images/pot.svg"

class Cart extends Component{
    products = [
    {
        "id": 0,
        "name": "KFC - King Bucket",
        "price":"10000",
        "quantity": 1,

    },
    {        
        "id": 1,
        "name": "Refuel Max",
        "price": "1200",
        "quantity": 1,
    },
    {        
        "id": 2,
        "name": "KFC - King Bucket",
        "price": "1200",
        "quantity": 1,
    }
]
        constructor(props){
            super(props)
            this.state = {
                products: this.products,
                price: "",
                number: '1',
                quantity: 0,
                total: 0,
                delivery: 1200
            }
        }
        componentDidMount(){
            this.totalGross()
        }
        
        render(){
        return(
            <div>
            <CartItem  id={this.products[0].id} close={close} plus={plus} increaseNumber={()=> this.increaseNumber(this.products[0].id)} number={this.state.products[0].quantity} minus={minus} decreaseNumber={()=> this.decreaseNumber(this.products[0].id)} totalNet={this.totalNet} imagesrc={kfc} name={this.products[0].name} price={this.products[0].price} change={this.totalGross}/>

            <CartItem  id={this.products[1].id} close={close} plus={plus} increaseNumber={()=> this.increaseNumber(this.products[1].id)} number={this.state.products[1]['quantity']} minus={minus} decreaseNumber={()=> this.decreaseNumber(this.products[1].id)} totalNet={this.totalNet}imagesrc={coke} name={this.products[1].name} price={this.products[1].price}/>
            

            <CartItem  id={this.products[2].id} close={close} plus={plus} increaseNumber={()=> this.increaseNumber(this.products[2].id)} number={this.state.products[2].quantity} minus={minus} decreaseNumber={()=> this.decreaseNumber(this.products[2].id)} totalNet={this.totalNet}imagesrc={pot} name={this.products[2].name} price={this.products[2].price}/>

            <DeliveryItem delivery={this.state.delivery} />
            <Total total={this.state.total} check={this.deliveryPrice}/>
            <Checkout id="btncheckout" name="Checkout" link="/verification"/>
            </div>
        )
        }
        
        increaseNumber = (id) =>{
            
            var der = this.products[id].quantity;
            der += 1
            this.products[id].quantity = der
            this.setState({quantity: this.state.products[id]['quantity']}, function name(params) {
                var price = document.getElementsByClassName('spanprice');
           var total = 0;
           for (let i = 0; i < price.length; i++) {
                total +=Number(price[i].outerText);
           }
           this.setState({total: total}, function name(params) {
            var totalGross = this.totalGross();
            if(totalGross > 0){
                this.setState({delivery: 1200},)
            }else{
                this.setState({delivery: 0})
            }
           })
           
            })           
            
        }

        addQuantity = () =>{
            var prod = this.products;
            var sum = 0;
            prod.forEach(function(val, key){
                sum += val.quantity;
            })
        }


        decreaseNumber = (id) =>{
            if(this.deliveryPrice() === 0){
                this.setState({quantity: 0, delivery: 0}, function name(params) {
                    var delivery = "";
            var totalGross = this.totalGross();
            if(totalGross > 0){
                delivery = 1200;
                this.setState({delivery: 1200},)
            }else{
                this.setState({delivery: 0})
            }
            });
        }else if (this.products[id].quantity > 0){                 
            var der = this.products[id].quantity;
            der -= 1
            this.products[id].quantity = der
                     
                this.setState({quantity: this.state.products[id]['quantity']}, function name(params) {
                    
                    var totalGross = this.totalGross();
                    if(totalGross > 0){
                        this.setState({delivery: 1200},)
                    }else{
                        this.setState({delivery: 0})
                    }
                });
                
            }else if(this.addQuantity() === 0){
                this.setState({quantity: 0, delivery: 0}, function name(params) {
                    var delivery = "";
                    var totalGross = this.totalGross();
                    if(totalGross > 0){
                        this.setState({delivery: 1200},)
                    }else{
                        this.setState({delivery: 0})
                    }
            })

            }else{
                this.setState({quantity: 0}, function name(params) {
                    
                    var totalGross = this.totalGross();
                    if(totalGross > 0){
                        this.setState({delivery: 1200},)
                    }else{
                        this.setState({delivery: 0})
                    }
             });
            }
        }
        
        totalGross = (props) =>{
           var price = document.getElementsByClassName('spanprice');
           var price2 = document.getElementsByClassName('item');
           
           var total = 0;
           var total2 = 0;
           for (let i = 0; i < price.length; i++) {
                total +=Number(price[i].outerText);
           }
           for (let j = 0; j < price2.length; j++) {
            total2 +=Number(price2[j].outerText);
       }
       if (total2 === 0) { 
            var value = total2;     
        this.setState({total: total2, delivery: 0})
       }else{    
            value = total;    
        this.setState({total: total})
       }
           return value;
        }

        check = () =>{
            var price = document.getElementsByClassName('item');
           
           var total = 0;
           for (let i = 0; i < price.length; i++) {
                total +=Number(price[i].outerText);
           }
           return total;
        }
    
        deliveryPrice = (props) =>{
            var delivery = "";
            var totalGross = this.totalGross();
            if(totalGross > 0){
                delivery = 1200;
                this.setState({delivery: 1200},)
            }else{
                delivery = 0;
                this.setState({delivery: 0})
            }
            return delivery;
        }
        totalNet = (props) =>{
            var total = this.totalGross()
            var delivery = this.deliveryPrice()
            var totalN = "";
            totalN = Number(delivery) + Number(total);
            
            return totalN;
        }
    
}
export default Cart