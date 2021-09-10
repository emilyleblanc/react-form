import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      gender: "",
      destination:"",
      isVegan:false,
      isKosher: false,
      isGlutenFree:false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
    ?
    this.setState({
      [name]: checked,
    })
    :
    this.setState({
      [name]: value,
    });

  }

  render() {
    return (
      <div>
        <form>

          {/* TEXT INPUT TYPES  */}

          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />

          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />

          <br />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />

          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="What is you email?"
            onChange={this.handleChange}
          />

          {/* RADIO INPUT TYPES */}

          <br />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          <br />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          <br />
          <label>Rather not diclose</label>
          <input
            type="radio"
            name="gender"
            value="private"
            onChange={this.handleChange}
          />

          {/* SELECT INPUT TYPE*/}

          <br />
          <select 
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange} 
            >
            <option value="">--Please Select a Destination--</option>
            <option value="paris">Paris</option>
            <option value="copenhagen">Copenhagen</option>
            <option value="hawaii">Hawaii</option>
          </select>

          <br />
          <label>Vegan</label>
          <input 
          type="checkbox" 
          checked={this.state.isVegan}
          name="isVegan"
          value="vegan" 
          onChange={this.handleChange}

          />
           <label>Kosher</label>
          <input 
          type="checkbox" 
          name="isKosher"
          value="kosher" 
          checked={this.state.isKosher}
          onChange={this.handleChange}
          />
          <label>Gluten Free</label>
          <input 
          type="checkbox" 
          checked={this.state.isGlutenFree}
          name="isGlutenFree"
          value="gluten-free" 
          onChange={this.handleChange}
          />
        </form>

        {/* Paragraph tags where form inputs are output */}

        <p style={{borderTop:"5px dotted black", paddingTop:"2rem"}}>
          Name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Age: {this.state.age}</p>
        <p>Email: {this.state.email}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Destination:{this.state.destination}</p>
        <p>Dietary Restrictions: {this.state.isVegan ? "vegan," : null} {this.state.isKosher ? "kosher," : null} {this.state.isGlutenFree ? "gluten-free," : null}</p>
      </div>
    );
  }
}

export default App;
