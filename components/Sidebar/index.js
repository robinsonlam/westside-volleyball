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
					<h1>Westside Volleyball Club</h1>
				</div>

        <nav styleName="sidebar">
					<p styleName="navLink">
						<ActiveLink href="/">
							Home
						</ActiveLink>
					</p>

					<p styleName="navLink">
						<ActiveLink href="/about">
							Who We Are
						</ActiveLink>
					</p>

					<p styleName="navLink">
						<ActiveLink href="/contact">
							Join Us
						</ActiveLink>
					</p>
				</nav>
			</div>
		);
	}
}

export default Sidebar;
