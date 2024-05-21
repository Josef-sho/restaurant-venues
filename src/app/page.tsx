// pages/_app.js
import './styles/globals.css';
import Navbar from './components/nav';


function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <>
      <Navbar />

    </>
  );
}

export default MyApp;
