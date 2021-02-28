import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import axios from 'axios';

import Header from '../components/Header/Header';
import { SemipolarLoading } from 'react-loadingg';
import SideBar from '../components/SideBar/SideBar';

import { IndexContainer } from '../global/styles/index.styles';

const Home = ({ posts }) => {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <IndexContainer>
      <Head>
        <title>Francisco Cajlon | Blog</title>
      </Head>
      <SideBar />
      <Header />
      <div>
        <div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={active ? '#FF5252' : '#C5C6C7'}>
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              placeholder='Search posts'
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              style={{ borderBottomColor: active ? '#FF5252' : 'transparent' }}
              value={search}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setLoading(true);
                  router.push(`/search/${search}`);
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
              <h1>Latest posts</h1>
              <main>
                {
                  !posts
                    ? <SemipolarLoading color='#66FCF1' />
                    :
                    posts.map(post => (
                      <article key={post._id} onClick={() => router.push(`/post/${post._id}`)}>
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
    </IndexContainer>
  )
}

export default Home;

export async function getStaticProps() {
  const data = await axios.get(`${process.env.API}api/articles`);
  return {
    props: {
      posts: data.data.docs,
    },
    revalidate: 1,
  }
}
