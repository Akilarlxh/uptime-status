// 配置
window.Config = {

  // 站点名
  SiteName: '糖果屋运营站',

  // 站点链接
  SiteUrl: 'https://status.akilar.top',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1041484-ff1e3aeb57c4836bb871130c',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '网站监控',
      url: 'https://status.akilar.top/'
    },
    {
      text: '博客主页',
      url: 'https://blog.akilar.top'
    }
  ]
};
