import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 23326,
  name: 'Subscription',
  version: 0,
  author: 'author',
  checkUpdateUrl:
    'https://raw.githubusercontent.com/dblwen/subscription/main/dist/gkd.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
