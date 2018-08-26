import React, { Component } from 'react';
import HardwareBackground from '../resource/graphic/hardware.png';

class Hardware extends Component{

	constructor( props ){
		super( props );
		this.state = { highlight: false };
		this.mouseInHandler = props.mouseInHandler.bind( this ); 
		this.mouseOutHandler = props.mouseOutHandler.bind( this );
	}

	render(){
		return <div class={ this.state.highlight ? 'highlight' : '' }
			onMouseEnter={this.mouseInHandler} 
			onMouseLeave={this.mouseOutHandler} 
			style={ { 
			...this.props.style,
			backgroundImage:'url(' + HardwareBackground + ')',
			boxShadow: '50px 50px 150px 20px #222 inset, -50px -50px 150px 50px #222 inset' 
			
		} }>Hardware</div>
	}
}

export default Hardware;