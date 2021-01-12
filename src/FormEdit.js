import React, { Component } from "react";

	class FormEdit extends Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	        firstName: props.firstName, 
	        lastName: props.lastName, 
	        edit: false,
	        editFirstName: props.firstName,
            editLastName: props.lastName,
	    }
	    this.handleNameChange = this.handleNameChange.bind(this);
	  }
	
	  handleNameChange(event) {
	      this.setState({
	          [event.target.name]: event.target.value
	      });
	  }
	
	  editButton(event) {
	      this.setState({
	          edit: !this.state.edit,
	          editFirstName: this.state.firstName,
	          editLastName: this.state.lastName,
	      });
	  }
	
	  cancelButton(event) {
	      this.setState({
	          edit: false,
	          firstName: this.state.editFirstName,
	          lastName: this.state.editLastName,
	      })
	  }
	
	  render() {
	      return <>
	        <div>
	        {this.state.edit ? 
	        <div className="buttons">
              <input className="input" type= 'text' name= "firstName" value= {this.state.firstName} placeholder="Your Name" onChange= {this.handleNameChange} />
	          <input className="input2" type= 'text' name= "lastName" value= {this.state.lastName} placeholder="Your Last Name" onChange= {this.handleNameChange} />
	          <button className="btns" onClick={() => this.editButton(this.state)}>Save</button>
	          <button className="btns2" onClick={() => this.cancelButton(this.state)}>Cancel</button>
	        </div>
	            : <div className="button">
	                <p>First Name: {this.state.firstName}</p> 
	                <p>Last Name: {this.state.lastName}</p>
	                <button className="btn" onClick={() => this.editButton(this.state)}>edit</button>
	            </div>
	        }
	        </div>
	      </>
	  }
	}
	
	export default FormEdit;

