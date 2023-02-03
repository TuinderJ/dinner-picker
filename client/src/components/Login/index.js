import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form } from './style';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleLoginFormSubmit = async e => {
    e.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleLoginFormSubmit}>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' value={formState.email} onChange={handleChange} />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' value={formState.password} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </Form>
  );
}
