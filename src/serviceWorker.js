import { store } from './App';

export let serviceWorker;

const initServiceWorker = async () => {
  
  const onControllerChange = () => {
      serviceWorker = navigator.serviceWorker.controller;
  }

  if ('serviceWorker' in navigator) {
      const swRegistration = await navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`, {
          updateViaCache: 'none'
      }).catch(console.error);

      serviceWorker = swRegistration.installing || swRegistration.waiting || swRegistration.active;

      navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);

      const onSWMessage = message => {
        store.dispatch(message.data);
      }
    
      navigator.serviceWorker.addEventListener('message', onSWMessage, false);
  } else {
      console.log('Service worker is not supported.');
  }
}

export default initServiceWorker;
