import React, {Component} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="generic-input">
                <label className="generic-input-label" htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    required={true}
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    pattern={this.props.pattern}
                    className="generic-input-value"
                    minLength={this.props.minLength}
                    maxLength={this.props.maxLength}
                    placeholder={this.props.placeholder}
                    onChange={(event) => this.props.onChange(event)}
                />
            </div>
        );
    }
};

export default Input;