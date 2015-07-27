import React from 'react'
import { styles } from '../styles/panes';

export default class HeaderPane {
  render() {
    return (
      <div style={styles.header}>
        <h1>Hey,<br />I'm Matt!</h1>
      </div>
    );
  }
}
