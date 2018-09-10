import React from 'react';

import { Sidebar } from '../components';

class App extends React.Component {
  render() {
    return (
      <div>
				<Sidebar />
        <p>Welcome to Westside Volleyball Club</p>
      </div>
    );
  };
}

export default App;
