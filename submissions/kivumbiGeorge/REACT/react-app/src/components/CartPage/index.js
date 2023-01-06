import React, { Component } from "react";
import DeliverySVG from "../../assets/image/scooter 1.svg";
// import ChickenKFCSVG from "../../assets/image/image1.svg";
import KFCKingBucketSVG from "../../assets/image/image4.svg";
import RefuelMaxPotSVG from "../../assets/image/image1.svg";
import KFCKingBucket2SVG from "../../assets/image/image3.svg";
import "./cart.css";
import Header from "../layout/header";
import Nav from "../layout/nav";

import CloseSVG from "../../assets/image/close.svg";
import MinusSVG from "../../assets/image/Minus.svg";
import PlusSVG from "../../assets/image/plus.svg";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      deliveryPrice: 1200,
      items: [
        {
          image: KFCKingBucketSVG,
          product: "KFC - King Bucket 1",
          number: 2,
          unitPrice: 5000,
          totalPrice: 10000,
        },
        {
          image: RefuelMaxPotSVG,
          product: "Refuel Max",
          number: 2,
          unitPrice: 600,
          totalPrice: 1200,
        },
        {
          image: KFCKingBucket2SVG,
          product: "KFC - King Bucket 2",
          number: 2,
          unitPrice: 600,
          totalPrice: 1200,
        },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(items) {
    let sum = 0;
    if (items.length < 1) {
      return sum;
    } else {
      for (let i = 0; i < items.length; i++) {
        sum = sum + items[i]["totalPrice"];
      }
      return this.state.deliveryPrice + sum;
    }
  }

  handleIncrease(idx) {
    /* get object at index */
    let oldItem = this.state.items[idx];
    /* update number */
    let newNumber = oldItem.number + 1;
    oldItem.number = newNumber;
    /* update price */
    let newTotalPrice = newNumber * oldItem.unitPrice;
    oldItem.totalPrice = newTotalPrice;
    /* put object back into state */
    this.setState((state) => ({
      items: this.state.items.map((item, index) =>
        index === idx ? oldItem : item
      ),
    }));
    /* update total price */
    this.setState((state) => ({
      total: this.calculateTotal(this.state.items),
    }));
  }

  handleReduce(idx) {
    /* get object at index */
    let oldItem = this.state.items[idx];
    /* update number */
    let newNumber = oldItem.number - 1;
    if (newNumber < 1) {
      /* if number less than 1, remove item from list */
      /* filter out removed item by index */
      this.setState((state) => ({
        items: this.state.items.filter((item, index) => index !== idx),
      }));
    } else {
      /* if number not less than 1 reduce normally */
      oldItem.number = newNumber;
      /* update price */
      let newTotalPrice = newNumber * oldItem.unitPrice;
      oldItem.totalPrice = newTotalPrice;
      /* put object back into state */
      this.setState((state) => ({
        items: this.state.items.map((item, index) =>
          index === idx ? oldItem : item
        ),
      }));
      /* update total price */
      this.setState((state) => ({
        total: this.calculateTotal(this.state.items),
      }));
    }
  }

  handleRemove(idx) {
    /* filter out removed item by index */
    this.setState((state) => ({
      items: this.state.items.filter((item, index) => index !== idx),
    }));
    /* update total price */
    this.setState((state) => ({
      total: this.calculateTotal(this.state.items),
    }));
  }

  handleDelete() {
    /* remove all items from cart */
    this.setState((state) => ({ items: [] }));
    /* update total price */
    this.setState((state) => ({
      total: this.calculateTotal(this.state.items),
    }));
  }

  componentDidMount() {
    /* calculate total price when page is loaded */
    this.setState((state) => ({
      total: this.calculateTotal(this.state.items),
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    /* calculate total price when items array changes */
    if (prevState.items.length !== this.state.items.length) {
      this.setState((state) => ({
        total: this.calculateTotal(this.state.items),
      }));
    }
    if (prevState.deliveryPrice !== this.state.deliveryPrice) {
      this.setState((state) => ({
        total: this.calculateTotal(this.state.items),
      }));
    }
  }

  render() {
    return (
      <>
        <Header />
        <Nav page="Cart" />
        <div className="cart-body">
          <div className="cart-body-header-section">
            <div className="cart-body-title-section">
              <h2 className="cart-body-header-title">Cart</h2>
              <p className="cart-body-item-number">
                <span>{this.state.items.length}</span>&nbsp;items
              </p>
            </div>
            {this.state.items.length > 0 ? (
              <div className="cart-body-remove-section">
                <a
                  href="#"
                  className="cart-body-remove-link"
                  onClick={this.handleDelete}
                >
                  Remove all
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="cart-list">
            {this.state.items.length > 0 ? (
              this.state.items.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-item-detail">
                    <div className="delete-item">
                      <button className="delete-item-button">
                        <img
                          alt="close"
                          className="delete-item-image"
                          src={CloseSVG}
                          onClick={() => this.handleRemove(index)}
                        />
                      </button>
                    </div>
                    <div className="cart-item-product">
                      <div className="cart-item-product-image-container">
                        <img
                          alt="FImg"
                          className="cart-item-product-image"
                          src={item.image}
                        />
                      </div>
                      <div className="cart-item-product-description">
                        <div className="cart-item-product-name-container">
                          <div className="cart-item-product-name">
                            {item.product}
                          </div>
                        </div>
                        <div className="cart-item-product-amount">
                          <div className="cart-item-reduce">
                            <button className="cart-item-reduce-button">
                              <img
                                alt="-"
                                className="cart-item-reduce-image"
                                src={MinusSVG}
                                onClick={() => this.handleReduce(index)}
                              />
                            </button>
                          </div>
                          <div className="cart-item-number">
                            <div className="cart-item-number-value">
                              {item.number}
                            </div>
                          </div>
                          <div className="cart-item-increase">
                            <button className="cart-item-increase-button">
                              <img
                                alt="+"
                                className="cart-item-increase-image"
                                src={PlusSVG}
                                onClick={() => this.handleIncrease(index)}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-price-container">
                      <p className="cart-item-price">#{item.totalPrice}</p>
                    </div>
                  </div>

                  <div className="cart-item-border"></div>
                </div>
              ))
            ) : (
              <div className="cart-list-empty">
                <h3 className="cart-list-empty-title">No Items In Cart!</h3>
              </div>
            )}
          </div>
          <div className="cart-delivery">
            <div className="cart-delivery-detail">
              <div className="cart-delivery-description">
                <img
                  alt="dl"
                  className="cart-delivery-description-image"
                  src={DeliverySVG}
                />
                <h3 className="cart-delivery-description-title">
                  Delivery Fee
                </h3>
              </div>
              <div className="cart-delivery-price">
                <p className="cart-delivery-price-value">
                  #{this.state.items.length > 0 ? this.state.deliveryPrice : 0}
                </p>
              </div>
            </div>
            <div className="cart-delivery-border"></div>
          </div>
          <div className="cart-total">
            <h3 className="cart-total-title">Total</h3>
            <h3 className="cart-total-value">#{this.state.total}</h3>
          </div>
          <div className="cart-checkout">
            <button className="cart-checkout-button">Checkout</button>
          </div>
        </div>
      </>
    );
  }
}

export default CartPage;
