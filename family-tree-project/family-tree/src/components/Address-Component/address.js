import React from 'react';

class Address extends React.Component {
    render() {
        return (
            <body>

             <div className="register">
               <h1>Address</h1>
               <form method='post' id='additional-info' action=''>
                   <label for='name'>Address:</label><br />
                   <input type='text' name='Address1' id='address' maxLength={200} placeholder='Address Line 1' required/><br /><br />

                   <label for='name'>Address 2:</label><br />
                   <input type='text' name='Address2' id='address' maxLength={200} placeholder='Address Line 2' required/><br /><br />

                   <label for='name'>Country:</label><br />
                   <input type='text' name='Country' id='country' maxLength={200} placeholder='Country' required/><br /><br />

                   <label>City:</label><br />
                   <input type='' name='text' id='city' placeholder='City'></input><br /><br />

                   <input type="submit" value="Submit" className="submit"/>
               </form>
             </div>
            </body>
        )
    }
}

export default Address;
