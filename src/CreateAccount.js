import React, {useState} from 'react';

function AccountForm(props) {
  const [person, setPerson] = useState(
     {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
     }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "password")
      setPerson(
         {firstName: person['firstName'], lastName: person['lastName'], email: person["email"], password: value}
      );
    else if (name === "email")
      setPerson(
         {firstName: person['firstName'], lastName: person['lastName'], email: value, password: person["password"]}
      );
    else if (name === "lastName")     
       setPerson(
         {firstName: person['firstName'], lastName: value, email: person["email"], password: person['password']}   
       );
    else
       setPerson(
         {firstName: value, lastName: person["lastName"], email: person["email"], password: person['password']}
       );
  }

  function submitForm() {
    console.log("Submit Form Person: "+person);
    props.handleSubmit(person);
    setPerson({firstName: '', lastName: '', email: '', password: ''});
   
  }

  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={person.firstName}
        onChange={handleChange} />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={person.lastName}
        onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={person.email}
        onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={person.password}
        onChange={handleChange} />
        <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default AccountForm;
