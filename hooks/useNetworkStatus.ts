import { useEffect, useState } from 'react';

type NetworkStatus = 'online' | 'offline';

const useNetworkStatus = (): NetworkStatus => {
   const [networkStatus, setNetworkStatus] = useState<NetworkStatus>(
      navigator.onLine ? 'online' : 'offline'
   );

   const handleOnline = () => {
      setNetworkStatus('online');
   };

   const handleOffline = () => {
      setNetworkStatus('offline');
   };

   useEffect(() => {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
         window.removeEventListener('online', handleOnline);
         window.removeEventListener('offline', handleOffline);
      };
   }, []);

   return networkStatus;
};

export default useNetworkStatus;
