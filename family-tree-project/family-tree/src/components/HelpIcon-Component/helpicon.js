import React from 'react';
import testData from './helpicon.json';

class helpTip extends React.Component {
  render() {
    return(
        <div>
          <button onclick="helptip()">
          Help
          </button>
          <script>
          function helptip(testData)
          {testData.map(data => (
            alert(
            <div>
            {data.subject}
            {data.content}
            {data.subject}
            {data.content}
            {data.content}
            {data.content}
            </div>
            )
          ))}
          </script>
        </div>
    )
  }
}
export default helpTip
