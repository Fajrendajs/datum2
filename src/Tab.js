import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import './styles.css';
import { EuiDatePicker, EuiFormRow, EuiForm } from '@elastic/eui';
import { EuiTabs, EuiTab, EuiSpacer } from '@elastic/eui';
import { EuiTabbedContent, EuiTitle, EuiText } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

class TestDatum extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log('han: ', date);
    //console.log('han2 : ', e.target.value);
    this.props.onTemperatureChange(date);
  }

  render() {
    console.log('render: ', this.props.datum);
    const datum = this.props.datum;
    return (
      <EuiFormRow label="datum od">
        <EuiDatePicker
          locale="hr"
          dateFormat="DD/MM/YYYY"
          selected={datum}
          onChange={this.handleChange}
          className="dpTest__purpleInput"
        />
      </EuiFormRow>
    );
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);

    this.state = {
      startDate: moment()
    };

    this.tabs = [
      {
        id: 'cobalt',
        name: 'Cobalt',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Cobalt</h3>
            </EuiTitle>
            <EuiText>
              Cobalt is a chemical element with symbol Co and atomic number 27.
              Like nickel, cobalt is found in the Earth&rsquo;s crust only in
              chemically combined form, save for small deposits found in alloys
              of natural meteoric iron. The free element, produced by reductive
              smelting, is a hard, lustrous, silver-gray metal.
            </EuiText>
          </Fragment>
        )
      },
      {
        id: 'dextrose',
        name: 'Dextrose',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Dextrose</h3>
            </EuiTitle>
            <EuiText>
              Intravenous sugar solution, also known as dextrose solution, is a
              mixture of dextrose (glucose) and water. It is used to treat low
              blood sugar or water loss without electrolyte loss.
            </EuiText>
          </Fragment>
        )
      },
      {
        id: 'hydrogen',
        name: 'Hydrogen',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Hydrogen</h3>
            </EuiTitle>
            <EuiText>
              Hydrogen is a chemical element with symbol H and atomic number 1.
              With a standard atomic weight of 1.008, hydrogen is the lightest
              element on the periodic table
            </EuiText>
          </Fragment>
        )
      },
      {
        id: 'monosodium_glutammate',
        name: 'Monosodium Glutamate',
        content: (
          <TestDatum
            datum={this.state.startDate}
            onTemperatureChange={this.handleCelsiusChange}
          />
        )
      }
    ];
  }

  handleCelsiusChange(startDate) {
    console.log('handleCelsiusChange: ', startDate);
    this.setState({ startDate });
  }

  render() {
    return (
      <EuiTabbedContent tabs={this.tabs} initialSelectedTab={this.tabs[0]} />
    );
  }
}

export default Tab;
