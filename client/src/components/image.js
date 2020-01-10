import React, { Component } from 'react';

class Image extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.state = {
            src: this.props.src,
        }
    }

    componentWillUnmount() {
    }

    loadDefaultImage = e => {
        e.target.onerror = null;
        e.target.src = this.props.fallback;
        this.setState({
            src: this.props.fallback
        });
    };

    render() {
        return (
            <img className={this.props.className} src={this.props.src ? this.props.src : this.props.fallback} onError={this.loadDefaultImage}/>
        )
    }
}

export default Image