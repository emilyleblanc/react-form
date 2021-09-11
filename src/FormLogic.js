import React, { Component } from "react";
import Form from ".Form";

class FormLogic extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isGlutenFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }
  render() {
    return(
      <Form handleChange={this.handleChange} {...this.state} />
      )
    }
  }
  export default FormLogic;


