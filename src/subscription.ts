import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 23326,
  name: 'Clever的GKD订阅',
  version: 0,
  author: 'Clever',
  checkUpdateUrl:
    'https://raw.githubusercontent.com/dblwen/gkd-rules/main/dist/gkd.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
