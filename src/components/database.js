import React, { Component } from 'react';
import DatabaseBackground from '../resource/graphic/database.png';

class Database extends Component{

	constructor( props ){
		super( props );
		this.state = { highlight: false };
		this.mouseInHandler = props.mouseInHandler.bind( this ); 
		this.mouseOutHandler = props.mouseOutHandler.bind( this ); 
	}

	render(){
		return <div 
			class={ this.state.highlight ? 'highlight' : '' }
			onMouseEnter={this.mouseInHandler} 
			onMouseLeave={this.mouseOutHandler} 
			style={ { 
			...this.props.style,
			backgroundImage:'url(' + DatabaseBackground + ')',
			
		} }>Data</div>
	}
}

export default Database;