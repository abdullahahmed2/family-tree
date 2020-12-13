import React from 'react';
import testData from './helpicon.json';

class helpTip extends React.Component {
  render() {
    return(
        <div>
          {/* function helptip(testData) 
            {  
            {testData.map(data => (
              <p>
              {data.subject1}
              {data.content1}
              {data.subject2}
              {data.content2}
              {data.content3}
              {data.content4}
              </p>   
             ))}
            }
          <button onclick={helptip()}>
          Help
          </button> */}
        </div>
    )
  }
}
export default helpTip
