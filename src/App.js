import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Redux from './components/Redux';

import { Provider } from 'react-redux';
import { store } from './components/Redux/store';

export const loginApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/system',
  withCredentials: true
})

const App = () => {
  // const [user, setUser] = useState('');
  // const [pass, setPass] = useState('');
  // const [token, setToken] = useState('');

  // const handelLogin = async (e) => {
  //   e.preventDefault();
  //   await loginApi.post('/login', {
  //     email: user,
  //     password: pass
  //   })
  //     .then(res => setToken(res.data))
  //     .catch(err => console.log(err));
  // }

  // const handelPatient = (e) => {
  //   e.preventDefault();
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'accept': 'application/json',
  //       Authorization: `Bearer ${token.token}`,
  //     }
  //   }

  //   axios.get('http://127.0.0.1:8000/api/system/patient', config)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))

  // }

  // useEffect(() => {
  //   console.log(token.token);
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'accept': 'application/json',
  //       Authorization: `Bearer ${token.token}`,
  //     }
  //   }
  //   axios.get('http://127.0.0.1:8000/api/system/user', config
  //   ).then(res => console.log(res.data.user.name))
  //     .catch(err => console.log(err))

  // }, [token.token])
  return (
    <Provider store={store}>
    <div>
      <Redux />
      {/* <form onSubmit={handelLogin}>
        <input placeholder='Email' type='text' onChange={e => { setUser(e.target.value) }} />
        <input placeholder='Password' type='password' onChange={e => { setPass(e.target.value) }} />

        <input type='submit' value={'Login'} />

        <button onClick={handelPatient}>Handel Patient</button>
      </form> */}
    </div>
    </Provider>
  )
}

export default App