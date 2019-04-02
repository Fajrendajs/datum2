import moment from 'moment';
import 'moment/locale/ru';
import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.css';
import Tab from './Tab';
import Atlas from './Atlas';
import Dat from './Dat';
import But from './But';

class App extends Component {
  constructor(props) {
    super(props);
    moment.locale('ru');
  }

  render() {
    return (
      <>
        <Tab />
        <Atlas />
        <But />
        <Dat />
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
