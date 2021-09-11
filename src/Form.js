import React from "react";

function Form(props) {
  return (
    <div>
      <form>
        {/* TEXT INPUT TYPES  */}

        <input
          type="text"
          name="firstName"
          value={props.firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        />

        <br />
        <input
          type="text"
          name="lastName"
          value={props.lastName}
          placeholder="Last Name"
          onChange={props.handleChange}
        />

        <br />
        <input
          type="text"
          name="age"
          value={props.age}
          placeholder="Age"
          onChange={props.handleChange}
        />

        <br />
        <input
          type="email"
          name="email"
          value={props.email}
          placeholder="What is you email?"
          onChange={props.handleChange}
        />

        {/* RADIO INPUT TYPES */}

        <br />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={props.handleChange}
        />
        <br />
        <label>Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={props.handleChange}
        />
        <br />
        <label>Rather not diclose</label>
        <input
          type="radio"
          name="gender"
          value="private"
          onChange={props.handleChange}
        />

        {/* SELECT INPUT TYPE*/}

        <br />
        <select
          name="destination"
          value={props.destination}
          onChange={props.handleChange}
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
          checked={props.isVegan}
          name="isVegan"
          value="vegan"
          onChange={props.handleChange}
        />
        <label>Kosher</label>
        <input
          type="checkbox"
          name="isKosher"
          value="kosher"
          checked={props.isKosher}
          onChange={props.handleChange}
        />
        <label>Gluten Free</label>
        <input
          type="checkbox"
          checked={props.isGlutenFree}
          name="isGlutenFree"
          value="gluten-free"
          onChange={props.handleChange}
        />
      </form>

      {/* Paragraph tags where form inputs are output */}

      <p style={{ borderTop: "5px dotted black", paddingTop: "2rem" }}>
        Name: {props.firstName} {props.lastName}
      </p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <p>Gender: {props.gender}</p>
      <p>Destination:{props.destination}</p>
      <p>
        Dietary Restrictions: {props.isVegan ? "vegan," : null}{" "}
        {props.isKosher ? "kosher," : null}{" "}
        {props.isGlutenFree ? "gluten-free," : null}
      </p>
    </div>
  );
};

export default Form;
