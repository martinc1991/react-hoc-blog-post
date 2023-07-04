'use client';

import { WithUserInfoProps, withUserInfo } from '@/hoc/withUserInfo';

interface Props extends WithUserInfoProps {}

const Profile = (props: Props) => {
  const { status, user } = props;

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>No info was found</div>;
  }
  return (
    <div>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <p>company: {user.company.name}</p>
      <p>website: {user.website}</p>
    </div>
  );
};

export default withUserInfo(Profile);
