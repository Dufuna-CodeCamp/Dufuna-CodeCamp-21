import React, {Component} from "react"
import "./header.css"

export default class Header extends Component {

    render() {

        
        return (
            <header className="main-header">
                <div className="title-section">
                    <h3 className="title-section-heading-cl-1">Food<span
                        className="title-section-heading-cl-2">Bag</span></h3>
                </div>
                <div className="link-section">
                    <div className="header-link-container">
                        <div className="header-link">
                            <p className="header-link-title">Cart</p>
                        </div>
                        <div className="header-link-disabled">
                            <p className="header-link-disabled-title">Login</p>
                        </div>
                        <div className="header-link-active">
                            <p className="header-link-active-title">Sign up</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}