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
    {
      key: 2,
      name: '月付还款日',
      desc: '调整月付还款日，点击“暂不修改”关闭弹窗',
      rules: [
        {
          activityIds: 'com.sankuai.eh.framework.EHContainerActivity',
          matches: '[text="调整月付还款日"] +n [text="暂不修改"]',
          exampleUrls: 'https://e.gkd.li/3d3600d1-eca2-40d8-a13d-37a07d712fea',
        },
      ],
    },
  ],
});
