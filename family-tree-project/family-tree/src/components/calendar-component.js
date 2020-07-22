import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class dobCalendar extends React.Component {

    state = {
        date: new Date(),
    }

        onChange = date => this.setState({date});
    render() {
        return (
            <div>
                <form>Please Select your Date of Birth
                    <Calendar onChange={this.onChange} value={this.state.date} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default dobCalendar;
