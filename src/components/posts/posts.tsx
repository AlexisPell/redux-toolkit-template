import React from 'react';
import { PostItem } from './post';

import { postApi } from '../../services/postApi';
import { Button } from '@mui/material';
import { IPost } from '../../interfaces/post';

interface PostProps {}

export const Posts: React.FC<PostProps> = ({}) => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery({ limit: 3 });
  const [createPost, {}] = postApi.useCreatePostMutation();

  const onCreatePost = async () => {
    const title = prompt('Title of post');
    await createPost({
      body: title,
      title,
    } as IPost);
  };

  return (
    <div style={{ height: 'fit-content', width: 'fit-content' }}>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error during loading posts...</h1>}
      {posts && (
        <>
          <Button onClick={onCreatePost}>Add post</Button>
          <h1 style={{ marginLeft: '15px' }}>Posts list: </h1>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {posts.map((p) => (
              <PostItem post={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
