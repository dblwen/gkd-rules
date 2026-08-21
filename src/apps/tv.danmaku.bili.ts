import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '视频暂停后弹窗广告',
      desc: '暂停视频后，会提示3s后弹出广告，弹出后点击关闭',
      rules: [
        {
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '[text="广告"] < View <n ScrollView + View View > [desc="close"]',
          exampleUrls: 'https://e.gkd.li/43a7a0ae-e169-4183-a65c-0a459d4d2457',
        },
      ],
    },
  ],
});
