// Include React 
var React = require('react');
// Component creation
var Form = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			firstName: "",
			lastName: "",
            username: "",
            email:"",
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
	},

	// When a user submits... 
	handleClick: function(){
	
		// Set the parent to have the search term
		this.props.setTerm(this.state.firstName, this.state.lastName, this.state.username, this.state.email);

	},

	// Here we render the function
	render: function(){

		return(
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>New User</strong></h2>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>First Name</strong></h4>
								<input type="text" className="form-control text-center" id="firstName" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>Last Name</strong></h4>
								<input type="text" className="form-control text-center" id="lastName" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>Username</strong></h4>
								<input type="text" className="form-control text-center" id="username" onChange= {this.handleChange} required/>
								<br />

                                <h4 className=""><strong>Email</strong></h4>
								<input type="text" className="form-control text-center" id="email" onChange= {this.handleChange} required/>
								<br />
								
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Create User</button>
							</div>

						</form>
				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Form;