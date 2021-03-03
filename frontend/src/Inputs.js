import React from "react";

class Inputs extends React.Component {
	render() 
	{
		return(
    		<div className="inputs">
    			<input
    				className = 'input'
    				type = {this.props.type}
    				placeholder={this.props.placeholder}
    				value={this.props.value}
    				onChange={ (e) => this.props.onChange(e.target.value)}
    			/>
    		</div>
    	);

	}
  
}

export default Inputs;
