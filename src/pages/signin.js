import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
<<<<<<< Updated upstream
    signIn(email: $email, password: $password)
=======
    signIn(email: $email, passowrd: $password)
>>>>>>> Stashed changes
  }
`;

const SignIn = props => {
  useEffect(() => {
    // update the document title
    document.title = 'Sign In — Notedly';
  });

  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      // store the token
      localStorage.setItem('token', data.signIn);
      // update the local cache
      client.writeData({ data: { isLoggedIn: true } });
      // redirect the user to the homepage
      props.history.push('/');
    }
  });

  const client = useApolloClient();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signIn);
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
<<<<<<< Updated upstream
      <UserForm action={signIn} formType="signIn" />
      {/* if the data is loading, display a loading message*/}
      {loading && <p>Loading...</p>}
      {/* if there is an error, display a error message*/}
      {error && <p>Error signing in!</p>}
=======
      <UserForm actions={signIn} formType="signIn" />
      {loading && <p>Loading...</p>}
      {error && <p>Error creating an account!</p>}
>>>>>>> Stashed changes
    </React.Fragment>
  );
};

export default SignIn;
