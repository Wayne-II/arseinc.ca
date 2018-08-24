import React, { Component } from 'react';
import DatabaseBackground from '../resource/graphic/database.png';

class Database extends Component{
	render(){
		return <div style={ { 
			...this.props.style,
			backgroundImage:'url(' + DatabaseBackground + ')',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center',
			
		} }>Database</div>
	}
}

export default Database;