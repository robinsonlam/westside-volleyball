import React from 'react';

import styles from '../styles/App.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page">
				<div className="photoContainer half">
					<img src="/static/images/wsv-div2-1.jpg" className="photo" />
				</div>
				
				<div styleName="caption">
					<h3>Welcome to Westside Volleyball Club</h3>
					<p>Westside Volleyball Club was established in January 2006 but before that it went under other names, but originally began as a social family team. It is a non profit organisation based in Sydney South West</p>
				</div>
      </div>
    );
  };
}

export default About;
