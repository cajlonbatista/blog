import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderContainer } from './styles';

import menu from '../../global/utils/items';

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
              <div key={item.path} style={{ borderLeft: '2px solid #66FCF1' }}>
                {item.active}
                <Link href={item.path}>
                  <span style={{ color: '#66FCF1' }}>{item.title}</span>
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