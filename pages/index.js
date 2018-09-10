import React from 'react';

import { Sidebar } from '../components';

import styles from '../styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
				<Sidebar />
        <p styleName="something">Welcome to Westside Volleyball Club</p>
      </div>
    );
  };
}

export default App;
