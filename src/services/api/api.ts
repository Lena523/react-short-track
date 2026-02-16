import {
  URLPATH,
  type LoginUserResponseProps,
  type RegisterUserResponseProps,
} from '@services/types/api-types';
import type { LoginInputs, RegisterInputs } from '@/types/login-register-types';

export async function LoginUser({ email, password }: LoginInputs): Promise<LoginUserResponseProps> {
  const response = await fetch(`${URLPATH}me/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Login is failed');
  }

  return result as LoginUserResponseProps;
}

export async function RegisterUser({
  email,
  password,
}: RegisterInputs): Promise<RegisterUserResponseProps> {
  const response = await fetch(`${URLPATH}me/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Login is failed');
  }

  return result as RegisterUserResponseProps;
}
