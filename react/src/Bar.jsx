import React from 'react';
import './Bar.css';

class Bar extends React.Component {
	render () {
		return (
			<aside className="bar flex">
				<div className="flex">
					<ion-icon name="clipboard-outline"></ion-icon>
					<p>Todo App</p>
				</div>
				<p className="flex">
					Made by
					<img src="https://gogglesinc.github.io/cdn/images/goggles-small.png" alt="" id="goggles" />
					<span>
						<a href="http://someguy403.github.io" target="_blank" rel="noopener noreferrer"> Goggles </a>
					</span>
				</p>
			</aside>
		);
	}
}

export default Bar;
