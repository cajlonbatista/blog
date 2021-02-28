import React from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import Markdown from 'react-markdown';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

import { PostContainer } from '../../global/styles/post.[id].styles';

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback && !post) {
    return (
      <PostContainer>
        <Header />
        <SideBar />
        <main>
          <h1>Loading</h1>
        </main>
      </PostContainer>
    )
  }
  return (
    <PostContainer>
      <Header />
      <SideBar />
      <main>
        <header></header>
        <Markdown children={post.content}/>
      </main>
    </PostContainer>
  );
};

export default Post;

export async function getStaticPaths() {
  const data = await axios.get(`${process.env.API}api/articles`);
  const paths = [];
  for (const article of data.data.docs) {
    paths.push({ params: { id: article._id } });
  }
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const data = await axios.get(`${process.env.API}api/articles/${params.id}`);
  return {
    props: {
      post: data.data,
    },
    revalidate: 1,
  }
}
