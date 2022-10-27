import { useEffect, useState, useMemo } from 'react';
import { useMetrika } from './useMetrika';

export const usePageViews = (pagePath: string) => {
  const resp = useMetrika({
    id: '38138395',
    metrics: 'ym:pv:pageviews',
    dimensions: 'ym:pv:URLHash',
    date1: '2020-01-01',
    accuracy: 'full',
    limit: '100000',
    proposed_accuracy: 'false',
  });

  const pageViews = useMemo<number | undefined>(() => {
    if (!Array.isArray(resp?.data)) {
      return -1;
    }

    const item = resp.data.filter((item: any) => item?.dimensions?.[0]?.name === location.origin + pagePath)[0];

    return item?.metrics?.[0];
  }, [resp, pagePath]);

  /** "-1" means loading */
  return pageViews;
};
