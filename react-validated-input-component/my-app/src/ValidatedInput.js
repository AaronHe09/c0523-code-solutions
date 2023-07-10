import './ValidatedInput.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ValidatedInput() {
  const [text, setText] = useState('');

  function handleOnChange(e) {
    const textValue = e.target.value;
    setText(textValue);
  }
  return (
    <label>
      Password
      <div>
        <input
          type="text"
          onChange={(e) => handleOnChange(e)}
          size="10"
          required
        />
        <FontAwesomeIcon
          icon={text.length < 8 ? faX : faCheck}
          size="lg"
          style={{ color: text.length < 8 ? '#ea4d4d' : '#1de74f' }}
        />
      </div>
      <p>
        {text.length < 1
          ? 'A password is required'
          : text.length < 8
          ? 'Your password is too short'
          : ''}
      </p>
    </label>
  );
}
