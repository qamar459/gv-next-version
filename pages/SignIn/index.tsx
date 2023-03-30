import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';


import { useApi } from '@qamarz/gv-web-sdk';

interface GetTokenResponse {
  token: string
}

interface UserInfo {
  countryCode: string;
  deviceToken: string;
  deviceType: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  status?: number;
}

export function SignIn() {
  const [user, setUser] = useStateIfMounted<UserInfo | null>(null);
  const [token, setToken] = useStateIfMounted<GetTokenResponse | null>(null);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);
  //const navigate = useNavigate();



  const handleLoginSuccess = (data: GetTokenResponse) => {
    localStorage.setItem('standalone_token', data.token);
    console.log('standalone_login_response', data);
    setToken({token: data?.token});
  };

  const handleLoginFail = (resp: any) => {
    console.log('login fail resp: ', resp);
    console.log('error', 'invalid credentials');
  };

  const handleUserSuccess = (data: UserInfo) => {
    if (!data) {
      //navigate('/');
    } else {
      console.log('user-data:', data);
      setUser(data);
      getToken.execute({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        countryCode: data.countryCode,
        phoneNumber: data.phoneNumber
      });
      //localStorage.setItem('loggedName', data.firstName);
    }
  }; 

  useEffect(() => {
    if(token?.token){
      getUser.execute();
    }
  }, [token])

  const handleUserFail = () => {
    //navigate('/');
  }

  const handleTokenSuccess = (data: GetTokenResponse) => {
    console.log('sdk_data', data);
    if(data.token){
      localStorage.setItem('sdk_token', data.token);
      location.href = window.location.origin;
      //navigate('/');
    }
    console.log('error', 'Something went wrong!')
  };

  const handleTokenFail = (error: Error) => {
    console.log(error);
    //navigate('/');
  }

  const login = useApi({
    api: 'standalone',
    endpoint: 'login',
    method: 'post',
    onResult: handleLoginSuccess,
    onFail: handleLoginFail,
    useAuth: false,
  });
  const getUser = useApi({
    api: 'standalone',
    endpoint: 'user/get/info',
    onResult: handleUserSuccess,
    onFail: handleUserFail,
  });

  const getToken = useApi({
    api: 'api',
    method: 'post',
    endpoint: 'get-token',
    onResult: handleTokenSuccess,
    onFail: handleTokenFail,
    useAuth: false,
  });

  //console.log('get-token', getToken);


  function handleSubmit(event: any) {
    event.preventDefault();
    console.log('username:password', username + ':' + password)
    login.execute({ username: username, password: password})
    setUsername('');
    setPassword('');
    setIsDisabled(true);
  }

  function handleChangeUsername(event: any) {
    setUsername(event.target.value);
  }

  function handleChangePassword(event: any) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (password !== '' && username !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input
          id="username-input"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <button id="login-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignIn;
