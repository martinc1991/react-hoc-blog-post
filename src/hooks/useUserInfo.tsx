import { RequestStatus } from '@/types/requestStatus';
import { APIUser } from '@/types/user';
import { useEffect, useState } from 'react';

export type UseUserInfoHook = ReturnType<typeof useUserInfo>;

export default function useUserInfo() {
  const [user, setUser] = useState<APIUser | null>(null);
  const [status, setStatus] = useState<RequestStatus>('loading');

  useEffect(() => {
    setStatus('loading');
    fetch('https://jsonplaceholder.typicode.com/users/3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setUser(json);
        setStatus('success');
      })
      .catch((error) => {
        console.log(error);
        setStatus('error');
        setUser(null);
      });
  }, []);

  return { user, status };
}
