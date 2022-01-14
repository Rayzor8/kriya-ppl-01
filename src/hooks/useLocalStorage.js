import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
   const [value, setValue] = useState(() => {
      if (typeof window !== undefined) {
         const savedValue = localStorage.getItem(key);

         if (savedValue !== null) {
            return JSON.parse(savedValue);
         }
      }

      return initialValue;
   });

   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
   }, [value]);

   return [value, setValue];
}
