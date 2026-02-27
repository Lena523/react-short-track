import { URLPATH, type RegisterUserResponseProps } from '@services/types/api-types';
import type { RegisterInputs } from '@/components/types/login-register-types';

export async function RegisterUser({
  name,
  email,
  password,
}: RegisterInputs): Promise<RegisterUserResponseProps> {
  const response = await fetch(`${URLPATH}me/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, email: email, password: password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Login is failed');
  }

  return result as RegisterUserResponseProps;
}
