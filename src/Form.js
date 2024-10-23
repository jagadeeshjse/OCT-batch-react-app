import React, { useState } from 'react';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const changeUser = (e) => {
  //     setUserName(e.target.value);
  //   };

  //   console.log('username', userName);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (userName && email && password) {
      let userObj = {
        user: userName,
        email: email,
        password: password,
      };
      console.log(userObj);
    } else {
      alert('please fill the form');
    }
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter email"
            onChange={changeEmail}
            value={email}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            onChange={changePassword}
            value={password}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Form;
