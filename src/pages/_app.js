import GlobalStyle from '../global/global';

function App({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  )
}

export default App;
