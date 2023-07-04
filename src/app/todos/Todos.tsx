'use client';

import { WithUserInfoProps, withUserInfo } from '@/hoc/withUserInfo';
import useUserTodos from '@/hooks/useUserTodos';

interface Props extends WithUserInfoProps {}

const Todos = (props: Props) => {
  const { user } = props;

  const { todos, status } = useUserTodos(user?.id);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (!todos.length) {
    return <div>No info was found</div>;
  }

  return (
    <div className='todo-list'>
      {todos.map((todo, i) => {
        return (
          <div key={todo.id} className='todo-item'>
            <span>{i + 1}.</span>
            <span>{todo.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default withUserInfo(Todos);
