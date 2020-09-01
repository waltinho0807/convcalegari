import buildClient from '../api/build-client';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Javascript from '../components/Javascript';



const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Head/>
      <Header currentUser={currentUser}/>
      <Component {...pageProps} />
      <Footer/>
      <Javascript/>
    </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;
