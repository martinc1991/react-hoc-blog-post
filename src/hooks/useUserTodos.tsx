import { RequestStatus } from '@/types/requestStatus';
import { Todo } from '@/types/todo';
import { useEffect, useState } from 'react';

export default function useUserTodos(id?: number) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState<RequestStatus>('loading');

  useEffect(() => {
    setStatus('loading');
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((json) => {
          setTodos(json);
          setStatus('success');
        })
        .catch((error) => {
          console.log(error);
          setStatus('error');
          setTodos([]);
        });
    }
  }, [id]);

  return { todos, status };
}
