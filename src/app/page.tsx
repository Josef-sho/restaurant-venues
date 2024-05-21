
import './styles/globals.css';
import AddVenues from './pages/addvenues';

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <>  
    <AddVenues/>
    </>
  );
}

export default MyApp;
