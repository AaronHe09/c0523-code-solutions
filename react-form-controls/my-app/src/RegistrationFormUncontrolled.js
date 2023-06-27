export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const value = [...formData.entries()];
    const object = {
      username: value[0][1],
      password: value[1][1],
    };
    console.log(object);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} id="form">
      <label>
        Username:
        <input name="username" />
      </label>
      <label>
        Password
        <input name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
