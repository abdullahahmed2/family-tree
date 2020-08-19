import React from 'react';

function App() {

  function sayHello() {
    alert('Username Requirements:\n less than 20 characters \n \nPassword Requirements: \n At least 1 uppercase letter \n Minimum of 8 characters \n Maximum of 15 characters');
  }

  return (
    <button onClick={sayHello}>
      Help
    </button>
  );
}

export default App;
