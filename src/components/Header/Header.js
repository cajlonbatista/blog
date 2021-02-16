import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderContainer } from './styles';

const onehome = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff3535">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);
const twohome = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#b8b7b9">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)
const onecontact = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff3535">
    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
  </svg>
);
const twocontact = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#b8b7b9">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);
const oneskill = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff3535">
    <path d="M13 7H7v6h6V7z" />
    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd" />
  </svg>
);
const twoskill = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#b8b7b9">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);
const oneclick = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff3535">
    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
  </svg>
);
const twoclick = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#b8b7b9">
    <path strokLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
  </svg>
);
const menu = [
  {
    path: '/',
    title: 'Home',
    active: onehome,
    inative: twohome,
  },
  ,
  {
    path: '/skills',
    title: 'Skills',
    active: oneskill,
    inative: twoskill,
  },
  {
    path: '/projects',
    title: 'Projects',
    active: oneclick,
    inative: twoclick,
  },
  {
    path: '/contact',
    title: 'Contact',
    active: onecontact,
    inative: twocontact,
  },
]

const SideBar = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <Link href='/'>
          <h1>Francisco Cajlon</h1>
        </Link>
      </div>
      <section>
        {
          menu.map(item => (
            (item.path === router.pathname)
              ?
              <div key={item.path} style={{ borderLeft: '2px solid #ff3535' }}>
                {item.active}
                <Link href={item.path}>
                  <span style={{ color: '#ff3535' }}>{item.title}</span>
                </Link>
              </div>
              :
              <div key={item.path}>
                {item.inative}
                <Link href={item.path}>
                  {item.title}
                </Link>
              </div>
          ))
        }
      </section>
      <footer>

      </footer>
    </HeaderContainer>
  );
};

export default SideBar;