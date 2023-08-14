import React, {Component} from "react";
import "./nav.css";

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-list">
                    {this.props.navList && this.props.navList.length > 0 ?
                        this.props.navList.map((navItem, idx) => (
                            idx === (this.props.navList.length - 1) ?
                                <li className="navbar-list-item-active">{navItem}</li> :
                                <li className="navbar-list-item">{navItem}</li>
                        )) : <li className="navbar-list-item">Home</li>}
                    {/*<li className="navbar-list-item">Home</li>*/}
                    {/*<li className="navbar-list-item-active">{this.props.page}</li>*/}
                </ul>
            </nav>
        );
    }
}
