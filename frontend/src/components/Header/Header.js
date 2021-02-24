import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Drawer, IconButton } from '@material-ui/core';

import { HeaderContainer, DrawerContainer } from './styles';

import menu from '../../global/utils/items';

const Header = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);

  return (
    <HeaderContainer>
      <div>
        <svg onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <Drawer open={open} onClose={closeDrawer} anchor='left'>
        <DrawerContainer>
          <header>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <Link href='/'>
                <h1>Francisco Cajlon</h1>
              </Link>
            </div>
          </header>
          <article onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </article>
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
        </DrawerContainer>
      </Drawer>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    </HeaderContainer>
  );
};

export default Header;