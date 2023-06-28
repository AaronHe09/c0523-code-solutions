import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);
    console.log(password);
  }

  return (
    <form id="form2" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Username
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
      </label>
      <label>
        Password
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
