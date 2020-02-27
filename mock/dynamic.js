const Mock = require('mockjs');

const Random = Mock.Random;

const Users = [
  '张三',
  '李四',
  '王五',
  '陈六',
  '安君之',
  '小豆芽',
  '山竹',
  '小土豆',
  '小糯米'
];

const ShareNames = [
  '读者',
  '看天下',
  '青年文摘',
  '时尚周刊',
  ''
];

const images = [
  "http://qiniu.library-online.cn/image1.jpg",
  "http://qiniu.library-online.cn/image10.jpeg",
  "http://qiniu.library-online.cn/image12.jpeg",
  "http://qiniu.library-online.cn/image13.jpeg",
  "http://qiniu.library-online.cn/image14.jpg",
  "http://qiniu.library-online.cn/image16.jpg",
  "http://qiniu.library-online.cn/image17.jpg",
  "http://qiniu.library-online.cn/image2.jpg",
  "http://qiniu.library-online.cn/image20.png",
  "http://qiniu.library-online.cn/image21.png",
  "http://qiniu.library-online.cn/image22.png",
  "http://qiniu.library-online.cn/image23.png",
  "http://qiniu.library-online.cn/image24.png",
  "http://qiniu.library-online.cn/image3.jpg",
  "http://qiniu.library-online.cn/image4.jpg",
  "http://qiniu.library-online.cn/image5.jpg",
  "http://qiniu.library-online.cn/image6.jpeg",
  "http://qiniu.library-online.cn/image7.jpg",
  "http://qiniu.library-online.cn/image8.png",
  "http://qiniu.library-online.cn/image9.jpg"
];

const Titles = [
  '20岁模特高铁上猝死：摧毁一个人，生一次病就够了',
  '水果腐烂变质！网红“甘茶度”苏州店被查封',
  '黄渤真实经历：原来弱的时候，坏人真的很多',
  '20年后重看《哆啦A梦》，我竟然被这个丑姑娘的故事打动了',
  '酒桌礼仪：一手托杯，一手捂肚子，这是什么含义？大部分都不懂',
  '14亿人全民通电，中国如何做到的？',
  '落魄时，一定要把自己当回事，发迹后，一定要把别人当回事'
]

const data = Mock.mock({
  'lists|20-50': [
    {
      id: "@increment",
      'userName|+1': Users,
      pubdate: "@date",
      'shareName|+1': ShareNames,
      'picUrl|+1': images,
      'dynamicType|+1': ['近期热门', '读者推荐'],
      'title|+1': Titles,
      star: "@integer(60, 1000)",
    }
  ]
})

module.exports = {
  data
}