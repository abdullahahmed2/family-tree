import React from 'react';
import "../Profile-DropDown-Component/profiledd.css";
import Profile from '../../pages/Profile-Page/Profile.js';

class Profiledd extends React.Component {
  containerprofile = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
   handleClickOutside = event => {
    if (this.containerprofile.current && !this.containerprofile.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="dropdown">
        <div className="containerprofile" ref={this.containerprofile}>
        <div className="container1" ref={this.container}>
          <button type="button" className="button" onClick={this.handleButtonClick} >
          <img src='https://www.pngitem.com/pimgs/m/293-2934409_index-search-box-drop-down-dropdown-arrow-gif.png' width='10' height='10'/>
          </button>
          {this.state.open && (
            <div className="containerprofile" id="list">
              <ul>
                <li><a href='/profile'>Your Profile</a></li>
                <li>Edit Profile</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
     </div>
    );
  }
}

export default Profiledd;
