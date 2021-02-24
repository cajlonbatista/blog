import GlobalStyle from '../global/global';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;
