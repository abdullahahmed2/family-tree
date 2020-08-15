import React, {Component} from 'react';
import './Search.css';
class Search extends Component{
  render(){
    return(
      <div class='main'>
        <input class='txt' type='text' placeholder= 'Type here to search'/>
        <input type='submit' name="" value='search'/>
      </div>

    );
  }
}
export default Search;
