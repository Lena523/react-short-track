import { URL, LoginProps } from './lib/types';
import { Inputs } from '@/components/lib/types';

export async function LoginUser({ ...data }: Inputs): Promise<LoginProps> {
  console.log(data);
  const response = await fetch(URL.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Login failed');
  }
  return result as LoginProps;
}
