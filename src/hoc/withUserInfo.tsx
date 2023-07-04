/* eslint-disable react/display-name */
import useUserInfo, { UseUserInfoHook } from '@/hooks/useUserInfo';
import { ComponentType } from 'react';

export type WithUserInfoProps = UseUserInfoHook;

export function withUserInfo<T>(Component: ComponentType<T>) {
  return (hocProps: Omit<T, 'user' | 'status'>) => {
    const { status, user } = useUserInfo();

    return <Component {...(hocProps as T)} status={status} user={user} />;
  };
}
