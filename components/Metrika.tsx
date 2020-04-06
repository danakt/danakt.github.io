import { useEffect } from 'react';

export const Metrika = () => {
  useEffect(() => {
    ((window as any)['yandex_metrika_callbacks'] = (window as any)['yandex_metrika_callbacks'] || []).push(() => {
      try {
        (window as any).yaCounter38138395 = new (window as any).Ya.Metrika({
          id: 38138395,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        });
      } catch (e) {}
    });

    const n = document.getElementsByTagName('script')[0];
    const s = document.createElement('script');

    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://mc.yandex.ru/metrika/watch.js';

    n?.parentNode?.insertBefore(s, n);

    return () => {
      s.remove();
    };
  }, []);

  return null;
};
