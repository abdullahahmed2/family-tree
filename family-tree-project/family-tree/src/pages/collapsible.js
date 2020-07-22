import React from 'react';
import './pages.css'

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e) {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div onClick={(e) =>this.togglePanel(e)} classname='individual-person'>{this.props.title}</div>
                {this.state.open ? (<div classname="information">{this.props.children}</div>): null}
            </div>
        );
    }
}
export default Collapsible;
