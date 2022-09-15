// import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

// const Messenger = lazy(() => import('./components/Messenger'));

function App() {
  // const clientId = '878980880399-3pppau4mbmj3fqbbthk0f9khq2gk34hi.apps.googleusercontent.com';
  const clientId = '565594188799-dh4f9ru14u9to6j5kru1l59mpaigaiud.apps.googleusercontent.com';
  // const clientId ='565594188799-dh4f9ru14u9to6j5kru1l59mpaigaiud.apps.googleusercontent.com';

  return (
    <>

      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
         </AccountProvider>
      </GoogleOAuthProvider>
    </>

  );
}

export default App;
