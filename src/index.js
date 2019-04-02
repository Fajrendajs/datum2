import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import './styles.css';
import { EuiDatePicker, EuiFormRow, EuiForm } from '@elastic/eui';
import { EuiTabs, EuiTab, EuiSpacer } from '@elastic/eui';
import { EuiTabbedContent, EuiTitle, EuiText } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Tab from './Tab';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Tab />;
  }
}

render(<App />, document.getElementById('root'));
