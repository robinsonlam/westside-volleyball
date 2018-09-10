import React from 'react';

import ActiveLink from '../ActiveLink';

import styles from './Sidebar.scss';

class Sidebar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			sidebarOpen: false,
		};
	}

	render () {
		return (
      <div styleName="sidebarContainer">
				<div styleName="logo">
					<img
						src="/static/images/transparent-logo.png"
						alt="Westside Logo"
					/>
				</div>

        <nav styleName="sidebar">
					<h3 styleName="navLink">
						<ActiveLink href="/">
							Home
						</ActiveLink>
					</h3>

					<h3 styleName="navLink">
						<ActiveLink href="/about">
							Who Are We
						</ActiveLink>
					</h3>

					<h3 styleName="navLink">
						<ActiveLink href="/contact">
							Join Us / Enquiries
						</ActiveLink>
					</h3>
				</nav>
			</div>
		);
	}
}

export default Sidebar;
