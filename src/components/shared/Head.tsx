import * as React from 'react';

import { connect } from '~/components/StateProvider';
import { getClashAPIConfig, getClashAPIConfigs } from '~/store/app';

const mapState = (s) => ({
  apiConfig: getClashAPIConfig(s),
  apiConfigs: getClashAPIConfigs(s),
});

function HeadImpl({
  apiConfig,
  apiConfigs,
}: {
  apiConfig: { baseURL: string };
  apiConfigs: any[];
}) {
  React.useEffect(() => {
    let title = '原神管理器';
    if (apiConfigs.length > 1) {
      try {
        const host = new URL(apiConfig.baseURL).host;
        title = `${host} - 原神管理器`;
      } catch (e) {
        // ignore
      }
    }
    document.title = title;
  });

  return <></>;
}

export const Head = connect(mapState)(HeadImpl);
