/*
<EuiForm>
<EuiFormRow label="datum od">
  <EuiDatePicker
    locale="hr"
    dateFormat="DD/MM/YYYY"
    selected={this.state.startDate}
    onChange={this.handleChangeOd}
    className="dpTest__purpleInput"
  />
</EuiFormRow>

<EuiFormRow label="datum do">
  <EuiDatePicker
    locale="hr"
    dateFormat="DD/MM/YYYY"
    selected={this.state.endDate}
    onChange={this.handleChangeDo}
    calendarClassName="dpTest__purpleCal"
  />
</EuiFormRow>
</EuiForm>




<EuiTabs>{this.renderTabs()}</EuiTabs>

import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import './styles.css';
import { EuiDatePicker, EuiFormRow, EuiForm } from '@elastic/eui';
import { EuiTabs, EuiTab, EuiSpacer } from '@elastic/eui';
import { EuiTabbedContent, EuiTitle, EuiText } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

function DateOd(datum,handleChangeOd) {
  
  return (
    <EuiForm>
      <EuiFormRow label="datum od">
        <EuiDatePicker
          locale="hr"
          dateFormat="DD/MM/YYYY"
          selected={datum}
          onChange={handleChangeOd}
          className="dpTest__purpleInput"
        />
      </EuiFormRow>
    </EuiForm>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabId: 'cobalt',
      startDate: moment(),
      endDate: moment()
    };

    this.tabs = [
      {
        id: 'cobalt',
        name: 'Cobalt',
        disabled: false,
        content: <DateOd datum={this.state.startDate} onChange={this.handleChangeOd}/>
      },
      {
        id: 'dextrose',
        name: 'Dextrose',
        disabled: false,
        content: <div>Dextrose</div>
      },
      {
        id: 'hydrogen',
        name: 'Hydrogen',
        disabled: true,
        content: <div>Hydrogen</div>
      },
      {
        id: 'monosodium_glutammate',
        name: 'Monosodium Glutamate',
        disabled: false,
        content: <div>Monosodium Glutamate</div>
      }
    ];

    this.handleChangeOd = this.handleChangeOd.bind(this);
    this.handleChangeDo = this.handleChangeDo.bind(this);
    this.onSelectedTabChanged = this.onSelectedTabChanged.bind(this);
  }

  onSelectedTabChanged(id) {
    this.setState({ selectedTabId: id });
  }

  handleChangeOd(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeDo(date) {
    console.log('datum: ', date);
    this.setState({
      endDate: date
    });
  }

  renderTabs() {
    return this.tabs.map((tab, index) => {
      console.log(tab);
      return (
        <EuiTab
          onClick={() => this.onSelectedTabChanged(tab.id)}
          isSelected={tab.id === this.state.selectedTabId}
          disabled={tab.disabled}
          key={index}
        >
          {tab.name}
        </EuiTab>
      );
    });
  }

  render() {
    return (
      <div>
        <EuiTabbedContent
          tabs={this.tabs}
          initialSelectedTab={this.tabs[0]}
          onTabClick={tab => {
            console.log('clicked tab', tab);
          }}
        />
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
*/