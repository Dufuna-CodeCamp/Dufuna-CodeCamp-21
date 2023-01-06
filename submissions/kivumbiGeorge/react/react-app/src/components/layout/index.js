import React,{Component} from "react"
import Header from "./header";
import Footer from "./footer";

export default class Layout extends Component {

    constructor(props) {
        super(props);
        // this.props.children = props.children.bind(this)
    }
    state = {};

    render() {
        return (
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }
}