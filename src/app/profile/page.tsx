'use client';

import { withUserInfo } from '@/hoc/withUserInfo';
import Profile from './Profile';

const Page = () => {
  return (
    <main>
      <h1>Profile</h1>
      <Profile />;
    </main>
  );
};

export default withUserInfo(Page);
