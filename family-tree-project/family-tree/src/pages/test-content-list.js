import React from 'react';
import testData from "./test-content-list.json";


class ContentListTest extends React.Component{
    render() {
        return (
            <div>
                <h1>Example Using JSON File</h1>
                <form>
                    <label>
                        Making Dropdown through Iteration
                    </label><br />
                        <select>
                            {testData.map(data => (
                                <option key={data.id} value={data.country}>
                                    {data.country}
                                </option>
                            ))}
                        </select>
                </form>
            </div>
        )
    }
}

export default ContentListTest;
