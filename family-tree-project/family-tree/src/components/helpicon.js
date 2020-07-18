import React from 'react';

class helpTip extends React.Component {
  render() {
    return(
        <div>
          <button onclick="helptip()">
          Help
          </button>
          <script>
          function helptip(){
            alert("Username Requirements:\n"+
            "less than 20 characters \n"+
            "\n"+
            "Password Requirements: \n"+
            "At least 1 uppercase letter \n"+
            "Minimum of 8 characters \n"+
            "Maximum of 15 characters")
          }
          </script>
        </div>
    )
  }
}

export default helpTip 
