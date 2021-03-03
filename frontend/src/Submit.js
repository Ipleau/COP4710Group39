import React from "react";

class Submit extends React.Component {
	render() 
	{
		return(
    		<div className="submit">
    			
    			<button
    				classname='bttn'
    				disabled={this.props.disabled}
    				onClick = { () => this.props.onClick()}
    			>
    				{this.props.text}
    			</button>
    		</div>
    	);

	}
  
}

export default Submit;
