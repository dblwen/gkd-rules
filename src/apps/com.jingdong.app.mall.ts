import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '各账号资产共享',
      desc: '暂不共享',
      rules: [
        {
          activityIds:
            'com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity',
          matches: '[text*="账号资产共享服务协议"] +n [text="暂不共享"]',
          exampleUrls: 'https://e.gkd.li/912f1d33-4631-405e-99b8-cedec1758fff',
        },
      ],
    },
  ],
});
