import React, { Component } from 'react';
import SoftwareBackground from '../resource/graphic/software.png';

class Software extends Component{

	constructor( props ){
		super( props );
		this.state = { highlight: false };
		this.mouseInHandler = props.mouseInHandler.bind( this ); 
		this.mouseOutHandler = props.mouseOutHandler.bind( this ); 
	}

	render(){
		return <div 
			onMouseEnter={this.mouseInHandler} 
			onMouseLeave={this.mouseOutHandler} 
			style={ { 
				...this.props.style,
				backgroundImage:'url(' + SoftwareBackground + ')',
			} }
			class={ this.state.highlight ? 'highlight' : '' }
		>Software &amp; Web</div>
	}
}

export default Software;