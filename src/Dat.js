import React from 'react';
import { Form } from 'semantic-ui-react';

import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';

class DateTimeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
      dateTime: '',
      datesRange: ''
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <Form>
        <DateInput
          name="date"
          placeholder="Date"
          localization="hr"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default DateTimeForm;
