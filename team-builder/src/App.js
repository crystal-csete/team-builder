

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from './axios/index';
import Form from './components/Form';
import Team from './components/Team';


const originalFormValue = {
  username: '',
  email: '',
}

function App() {
  const [teams, setteams] = useState([])
  
  const [formValues, setFormValues] = useState(originalFormValue)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    let newteam = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
    };

    if (!newteam.username || !newteam.email) return;

    axios
      .post("fakeapi.com", newteam)
      .then((res) => {
        setteams([...teams, res.data]);
        setFormValues(originalFormValue);
      })
      .catch((err) => {
        // debugger;
        console.log(err);
      });
    //  d) also on success clear the form
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setteams(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Team^^^Builder</h1>

    <Form 
    values={formValues}
    update={updateForm}
    submit={submitForm}
    />

    {teams.map((team) => {
      return <Team key={team.id} details={team} />
    })}
    </div>
  );
}

export default App;
