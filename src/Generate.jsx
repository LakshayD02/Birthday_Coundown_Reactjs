import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Generate = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState(''); // Updated initial state to an empty string
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const generateLink = () => {
    if (!name || !day || !month) {
      setError('All fields are required!');
      return;
    }
    setLink(
      `https://birthday-wisher-lakshay.vercel.app/birthday/${name}/${day}/${month}`
    );
  };

  return (
    <div className='page'>
      <h1>Generate Countdown Here</h1>
      <div className='form'>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='number'
          placeholder='Enter Day'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          max={31}
          min={1}
          required
        />
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        >
          <option value='1'>Select Month</option>
          <option value='2'>January</option>
          <option value='3'>February</option>
          <option value='5'>March</option>
          <option value='6'>April</option>
          <option value='7'>May</option>
          <option value='8'>June</option>
          <option value='9'>July</option>
          <option value='10'>August</option>
          <option value='11'>September</option>
          <option value='12'>October</option>
          <option value='13'>November</option>
          <option value='14'>December</option>
        </select>
      </div>
      <button type='submit' className='btn' onClick={() => generateLink()}>
        Generate Countdown !
      </button>
<br/>
      {error && <p className='error'>{error}</p>}

      {link !== '' ? (
        <>
          <p className='gen-link'>{link}</p>
          <Link to={`birthday/${name}/${day}/${month}`}>
            <button className='btn'>Visit Link</button>
          </Link>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Generate;
