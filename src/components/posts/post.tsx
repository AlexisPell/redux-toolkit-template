import { Button } from '@mui/material';
import React from 'react';
import { IPost } from '../../interfaces/post';
import { postApi } from '../../services/postApi';

interface PostProps {
  post: IPost;
}
export const PostItem: React.FC<PostProps> = ({ post }) => {
  const [deletePost, {}] = postApi.useDeletePostMutation();
  const [updatePost, {}] = postApi.useUpdatePostMutation();

  const onDeletePost = async (postId: any) => {
    await deletePost(postId);
  };
  const onUpdatePost = async (post: IPost) => {
    const newTitle = prompt('New title?');
    const newPost: IPost = {
      id: post.id,
      title: newTitle!,
      body: newTitle!,
    };
    await updatePost(newPost);
  };

  return (
    <div
      onClick={() => onUpdatePost(post)}
      key={post.id}
      style={{
        minWidth: '300px',
        minHeight: '140px',
        background: '#f2b8a4',
        padding: '15px',
        margin: '15px',
        borderRadius: '15px',
      }}
    >
      <strong>{post.title}</strong>
      <div>{post.title}</div>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onDeletePost(post.id);
        }}
      >
        Delete post
      </Button>
    </div>
  );
};
