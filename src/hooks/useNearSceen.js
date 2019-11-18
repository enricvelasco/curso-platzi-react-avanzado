import { useEffect, useState, useRef } from 'react';

//hace que solo lo muestre cuando están en el el viewport. Ejemplo básico LazyLoading
//detecta si es compatible el IntersectionObserver, si no hace el import dinamico
export const useNearScreen = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ?
        window.IntersectionObserver
        :
        import('intersection-observer')//import dinamico
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        //console.log(entries);
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  return [show, element];
};
