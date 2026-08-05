import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '免密支付升级弹窗',
      desc: '美团APP在支付时会弹出免密支付升级弹窗，点击“暂不升级”关闭弹窗',
      rules: [
        {
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            'View[id="pgy-ad-paycareOpenHalfPage"] >(1,2,3,4,5) @TextView[text="暂不升级"]',
          snapshotUrls: ['https://i.gkd.li/i/30744732'],
        },
      ],
    },
  ],
});
