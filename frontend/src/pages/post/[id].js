import React from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

import { PostContainer } from '../../global/styles/post.[id].styles';

const Post = ({ }) => {
  return (
    <PostContainer>
      <Header />
      <SideBar />
      
    </PostContainer>
  );
};

export default Post;