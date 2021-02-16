import { useState } from 'react';
import Head from 'next/head';

import axios from 'axios';
import { CircleLoading } from 'react-loadingg';
import Header from '../components/Header/Header';

import { IndexContainer } from '../global/styles/index.styles';

const Home = ({ posts, url }) => {
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState([]);

  const onSearch = () => {
    setResult([]);
    axios.get(`${url}api/search/${search}`).then(res => {
      setResult(res.data);
    }).catch(err => {
      setResult([]);
    });
  }

  return (
    <IndexContainer>
      <Head>
        <title>Francisco Cajlon</title>
      </Head>
      <Header />
      <div>
        <div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill='#8F8E8F'>
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              placeholder='Search posts'
              value={search}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  onSearch();
                }
              }}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <h1>{result.length !== 0 ? 'Search results' : 'Latest posts'}</h1>
        <main>
          {
            !posts || searching
              ? <CircleLoading color='#f7951d' />
              : (result.length === 0)
                ?
                posts.map(post => (
                  <article key={post._id}>
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
                :
                result.map(post => (
                  <article key={post._id}>
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
      </div>
    </IndexContainer>
  )
}

export default Home;

export async function getStaticProps() {
  const data = await axios.get(`${process.env.API}api/articles`);
  return {
    props: {
      posts: data.data.docs,
      url: process.env.API,
    },
    revalidate: 1,
  }
}
