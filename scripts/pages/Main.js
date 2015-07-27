import React, { Component, PropTypes } from 'react';
import HeaderPane from '../components/HeaderPane';
import ContentPane from '../components/ContentPane';
import { styles } from '../styles/base';

export default class Main extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <HeaderPane />
        <ContentPane />
      </div>
    );
  }
}
