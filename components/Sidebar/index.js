import React from 'react';

import Link from 'next/link';

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
        <nav>
					<p>
						<Link href="/about">
							<a>Who We Are</a>
						</Link>
					</p>

					<p>
						<Link href="/contact">
							<a>Join Us / Enquiries</a>
						</Link>
					</p>
				</nav>
			</div>
		);
	}
}

export default Sidebar;
