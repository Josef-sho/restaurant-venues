// pages/_app.js
import './styles/globals.css';
import Navbar from './components/nav';
import AddVenues from './Pages/addvenues';

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <>
      <AddVenues/>

    </>
  );
}

export default MyApp;
