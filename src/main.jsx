import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-osp1dz1k52w2lfyf.us.auth0.com"
    clientId="WjRHiVOhbrao5CWr9NDG19YBbzjqX488"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <StrictMode>
    <App />
  </StrictMode>,
  </Auth0Provider>
)
