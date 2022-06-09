import React, { Component } from "react";
import Header from "./Header";
import HomeNav from "./HomeNav";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Total from "./Total";
import Checkout from "./CheckoutButton";

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price1: 0,
      value1: 0,
      price2: 0,
      value2: 0,
      price3: 0,
      value3: 0,
      price4: 0,
      total: 0,
      items: 0,
      word: "item",
    };
  }

  increasePrice() {
    if (this.state.items === 1) {
      this.setState({
        word: "items",
      });
    }
    this.setState({
      value1: this.state.value1 + 1,
      price1: this.state.price1 + 5000,
      items: this.state.items + 1,
    });
    this.calculateTotal();
  }

  increasePrice2() {
    if (this.state.items === 1) {
      this.setState({
        word: "items",
      });
    }
    this.setState({
      value2: this.state.value2 + 1,
      price2: this.state.price2 + 1200,
      items: this.state.items + 1,
    });
    this.calculateTotal();
  }

  increasePrice3() {
    if (this.state.items === 1) {
      this.setState({
        word: "items",
      });
    }
    this.setState({
      value3: this.state.value3 + 1,
      price3: this.state.price3 + 1200,
      items: this.state.items + 1,
    });
    this.calculateTotal();
  }

  decreasePrice() {
    if (this.state.items === 2) {
      this.setState({
        word: "item",
      });
    }
    if (this.state.value1 === 0 && this.state.price1 === 0) {
      return;
    } else if (
      this.state.value1 === 1 &&
      (this.state.price1 === 5000) & (this.state.price3 === 0) &&
      this.state.price2 === 0
    ) {
      this.setState((prevState) => ({
        price1: prevState.price1 - 5000,
        value1: prevState.value1 - 1,
        price4: prevState.price4 - 1200,
        total: prevState.total - prevState.price1 - prevState.price4,
        items: prevState.items - 1,
      }));
      return;
    }

    this.setState({
      value1: this.state.value1 - 1,
      price1: this.state.price1 - 5000,
      items: this.state.items - 1,
    });
    this.calculateTotal();
  }

  decreasePrice2() {
    if (this.state.items === 2) {
      this.setState({
        word: "item",
      });
    }

    if (this.state.value2 === 0 && this.state.price2 === 0) {
      return;
    } else if (
      this.state.value2 === 1 &&
      (this.state.price2 === 1200) & (this.state.price1 === 0) &&
      this.state.price3 === 0
    ) {
      this.setState((prevState) => ({
        price2: prevState.price2 - 1200,
        value2: prevState.value2 - 1,
        price4: prevState.price4 - 1200,
        total: prevState.total - prevState.price2 - prevState.price4,
        items: prevState.items - 1,
      }));
      return;
    }

    this.setState({
      value2: this.state.value2 - 1,
      price2: this.state.price2 - 1200,
      items: this.state.items - 1,
    });
    this.calculateTotal();
  }

  decreasePrice3() {
    if (this.state.items === 2) {
      this.setState({
        word: "item",
      });
    }

    if (this.state.value3 === 0 && this.state.price3 === 0) {
      return;
    } else if (
      this.state.value3 === 1 &&
      (this.state.price3 === 1200) & (this.state.price1 === 0) &&
      this.state.price2 === 0
    ) {
      this.setState((prevState) => ({
        price3: prevState.price3 - 1200,
        value3: prevState.value3 - 1,
        price4: prevState.price4 - 1200,
        total: prevState.total - prevState.price3 - prevState.price4,
        items: prevState.items - 1,
      }));
      return;
    }
    this.setState({
      value3: this.state.value3 - 1,
      price3: this.state.price3 - 1200,
      items: this.state.items - 1,
    });
    this.calculateTotal();
  }

  calculateTotal() {
    let firstClick = false;
    if (
      !firstClick ||
      this.state.price1 !== 0 ||
      this.state.price2 !== 0 ||
      this.state.price3 !== 0
    ) {
      this.setState({
        price4: 1200,
      });
      firstClick = false;
    } else if (
      this.state.price1 === 0 &&
      this.state.price2 === 0 &&
      this.state.price3 === 0
    ) {
      this.setState({
        total: 0,
      });
      return;
    }

    this.setState((prevState) => ({
      total:
        prevState.price1 +
        prevState.price2 +
        prevState.price3 +
        prevState.price4,
    }));
    return;
  }

  resetOrder() {
    this.setState({
      price1: 0,
      value1: 0,
      price2: 0,
      value2: 0,
      price3: 0,
      value3: 0,
      price4: 0,
      total: 0,
      items: 0,
      word: "item",
    });
  }

  render() {
    return (
      <div className="cartPage">
        <Header />
        <HomeNav
          items={this.state.items}
          word={this.state.word}
          removeBtnClick={() => this.resetOrder()}
        />
        <First
          price1={this.state.price1}
          value1={this.state.value1}
          onPlusButtonClick={() => this.increasePrice()}
          onMinusButtonClick={() => this.decreasePrice()}
        />
        <Second
          price2={this.state.price2}
          value2={this.state.value2}
          onPlusButtonClick={() => this.increasePrice2()}
          onMinusButtonClick={() => this.decreasePrice2()}
        />
        <Third
          price3={this.state.price3}
          value3={this.state.value3}
          onPlusButtonClick={() => this.increasePrice3()}
          onMinusButtonClick={() => this.decreasePrice3()}
        />
        <Fourth price4={this.state.price4} />
        <Total
          total={this.state.total}
          onPlusButtonClick={() => this.calculateTotal()}
          onMinusButtonClick={() => this.calculateTotal()}
        />
        <Checkout />
      </div>
    );
  }
}

export default CartPage;
