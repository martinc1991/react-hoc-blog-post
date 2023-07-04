'use client';

import { withUserInfo } from '@/hoc/withUserInfo';
import Todos from './Todos';

const Page = () => {
  return (
    <main>
      <h1>Todos</h1>
      <Todos />;
    </main>
  );
};

export default withUserInfo(Page);
