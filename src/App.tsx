import { Button, Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
// import { useAppSelector, useAppDispatch } from './hooks/redux';
// import { fetchUsers } from './store/reducers/actionCreators';
// import { userSlice } from './store/reducers/userSlice';
import { Posts } from './components/posts/posts';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  // const dispatch = useAppDispatch();
  // const {} = userSlice.actions;
  // const { users, error, isLoading } = useAppSelector((state) => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div>
      {/* <h1>Users reducer example</h1>
      {isLoading && <Skeleton style={{ width: '80%', height: '30px' }} />}
      {error && <h2>ERROR occured:{error}</h2>}
      {users.map((u) => (
        <div>{u.name}</div>
      ))} */}
      <Posts />
    </div>
  );
};
