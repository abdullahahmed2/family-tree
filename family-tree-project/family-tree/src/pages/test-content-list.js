import React from 'react';
import testData from "./test-content-list.json";

class ContentListTest extends React.Component{
    render() {
        return (
            <div>
                <h1>Example Using JSON Info</h1>
                {testData.map((data, index) => {
                    return <p>{data.country}</p>
                })}
            </div>
        )
    }
}

export default ContentListTest;
