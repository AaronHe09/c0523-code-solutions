import { useState } from 'react';

export default function RegistrationFormControlled() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);
    console.log(password);
  }

  return (
    <form id="form2" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Username
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}></input>
      </label>
      <label>
        Password
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
