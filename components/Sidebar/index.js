import React from 'react';

class Sidebar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			sidebarOpen: false,
		};
	}

	render () {
		return (
      <div>
        <h1>
          GLboal HeaDer
         </h1>
			</div>
		);
	}
}

export default Sidebar;
