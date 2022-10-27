import { useEffect, useState, useMemo } from 'react';

export const useMetrika = (options: Record<string, string>) => {
  const [response, setResponse] = useState<any>(null);

  const query = useMemo(
    () =>
      Object.keys(options)
        .map((key) => `${key}=${options[key]}`)
        .join('&'),
    [options]
  );

  useEffect(() => {
    fetch(`https://api-metrika.yandex.net/stat/v1/data?${query}`, {
      headers: { Authorization: 'OAuth AgAAAAADp1A3AAaKf1zb8wbz4Up-h1pRGVARPaY' },
    })
      .then((data) => data.json())
      .then(setResponse);
  }, []);

  return response;
};
