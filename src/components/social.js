import React, { Component } from 'react';
import LinkedInLogo from '../resource/graphic/In-White-75px-R.png';
import GitHubLogo from '../resource/graphic/GitHub_Logo_White.png';

import HardwareBackground from '../resource/graphic/hardware.png';
import '../App.css';

class Social extends Component{
	render(){
		return <div style={ { 
			...this.props.style,
			alignItems: 'center',
			justifyContent: 'space-around',

		 } }>
			<a href="https://linkedin.com/in/wayne-marsh" target="_blank">
				<img 
					src={ LinkedInLogo }
					
					
				/>
			</a>
			<a href="https://github.com/Wayne-II" target="_blank"><img src={ GitHubLogo } style={ { height:'2em' } } /></a>
		</div>
	}
}

export default Social;