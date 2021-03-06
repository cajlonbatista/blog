import React, { useState } from 'react';
import Head from 'next/head';

import axios from 'axios';
import { useRouter } from 'next/router';

import { SemipolarLoading } from 'react-loadingg';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

import { SearchContainer } from '../../global/styles/search.[id].styles';

const Post = ({ posts, tag }) => {
  const router = useRouter();
  const [search, setSearch] = useState(tag);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <SearchContainer>
      <SideBar />
      <Header />
      <Head>
        <title>Francisco Cajlon | Blog</title>
      </Head>
      <div>
        <div>
          <div>
            <svg viewBox="0 0 20 20" fill={active ? '#66FCF1' : '#C5C6C7'}>
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              placeholder='Search posts'
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              style={{ borderBottomColor: active ? '#66FCF1' : 'transparent' }}
              value={search}
              onKeyDown={async e => {
                var validate = '';
                if (search != undefined) {
                  for (const word of search) {
                    if (word === '' || word === ' ') {
                      validate += '';
                    } else {
                      validate = 'exacto';
                      break;
                    }
                  }
                }
                if (e.keyCode === 13 && validate !== '' && search != undefined) {
                  setLoading(true);
                  await router.push(`/search/${search.toLocaleLowerCase()}`);
                  setLoading(false);
                }
              }}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        {
          loading
            ?
            <footer>
              <SemipolarLoading />
            </footer>
            :
            <>
              <h1>{
                (posts !== undefined)
                  ? (posts.length !== 0)
                    ? 'Search results'
                    : `We didn't find anything to '${tag}'`
                  : 'Search results'}
              </h1>
              <main>
                {
                  posts === null || router.isFallback
                    ? <SemipolarLoading />
                    :
                    posts.map(post => (
                      <article key={post._id} onClick={() => router.push(`/post/${post._id.toLowerCase()}`)}>
                        <header>
                          <span>{post.card}</span>
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </header>
                        <div>
                          <h1>{post.title}</h1>
                          <p>{post.description}</p>
                        </div>
                      </article>
                    ))
                }
              </main>
            </>
        }
      </div>
    </SearchContainer>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const data = await axios.get(`${process.env.API}api/search/${params.id}`);
  return {
    props: {
      posts: data.data,
      tag: params.id,
    },
    revalidate: 1,
  }
}

