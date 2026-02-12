import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.calendar',
  name: '日历',
  groups: [
    {
      key: 1,
      name: '卡片广告',
      desc: '月视图下方卡片广告',
      rules: [
        {
          key: 0,
          name: '关闭按钮',
          fastQuery: true,
          activityIds: 'com.android.calendar.AllInOneActivity',
          matches:
            '[id="com.hihonor.calendar:id/ad_close_view"][visibleToUser=true]',
          //snapshotUrls: 'https://e.gkd.li/bdc7de64-117d-4f7a-959c-4c3efa33f64b'
        },
      ],
    },
  ],
});
