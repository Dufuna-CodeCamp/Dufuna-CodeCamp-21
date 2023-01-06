import React,{Component} from "react"
import Header from "./header";
import Footer from "./footer";

export default class Layout extends Component {

    render() {
        return (
            <>
                <Header/>
                {this.props.children}
                <Footer/>
            </>
        )
    }
}