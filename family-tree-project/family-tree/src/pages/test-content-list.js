import React from 'react';
import testData from "./test-content-list.json";
import NavBar from "./nav.js";

class ContentListTest extends React.Component{
    render() {
        return (
            <div>
            <NavBar />
                <h1>Example Using JSON File</h1>
                {testData.map((data, index) => {
                    return <p>{data.country}</p>
                })}
            </div>
        )
    }
}

export default ContentListTest;
