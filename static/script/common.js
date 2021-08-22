/*!
 * @name:modai
 * @author:大橙子
 * @qqcode:1570457334
 * @description:苹果CMS v10 魔袋工具箱
 * @website:http://modai.maodajie.com
 * @telegram:https://t.me/maccms_tools
 * @version:2021.0822.1112
 */layui.define((function(t){var s={union:{render:function(t,n){return t=t.match(/[\u4e00-\u9fa5]/g).join("").substring(0,2),s.union.player[n]?s.union.player[n]:-1!=n.indexOf("m3u8")?{name:t+"在线",tips:"在线播放",sort:"999"}:-1!=n.indexOf("yun")?{name:t+"云播",tips:"在线播放",sort:"999"}:void 0},player:{qq:{name:"腾讯视频",tips:"在线播放",sort:"999"},youku:{name:"优酷视频",tips:"在线播放",sort:"998"},qiyi:{name:"爱奇艺视频",tips:"在线播放",sort:"997"},sohu:{name:"搜狐视频",tips:"在线播放",sort:"996"},letv:{name:"乐视视频",tips:"在线播放",sort:"995"},le:{name:"乐视视频",tips:"在线播放",sort:"995"},migu:{name:"咪咕视频",tips:"在线播放",sort:"994"},funshion:{name:"风行视频",tips:"在线播放",sort:"993"},bilibili:{name:"哔哩哔哩",tips:"在线播放",sort:"992"},mgtv:{name:"芒果TV",tips:"在线播放",sort:"991"},pptv:{name:"PP视频",tips:"在线播放",sort:"990"},wasu:{name:"华数视频",tips:"在线播放",sort:"989"},m1905:{name:"1905电影",tips:"在线播放",sort:"988"},m3u8:{name:"在线播放",tips:"在线播放",sort:"987"},ckplayer:{name:"在线播放",tips:"在线播放",sort:"986"}},downer:{xunlei:{name:"迅雷下载",tips:"在线下载",sort:"999"},http:{name:"普通下载",tips:"在线下载",sort:"998"},ed2k:{name:"电驴下载",tips:"在线下载",sort:"997"},baidu:{name:"百度网盘",tips:"网盘下载",sort:"996"},weiyun:{name:"微云网盘",tips:"网盘下载",sort:"995"},ali:{name:"阿里云盘",tips:"在线下载",sort:"994"},c189:{name:"天翼云盘",tips:"在线下载",sort:"993"},magnet:{name:"磁力链接",tips:"在线下载",sort:"992"},bt:{name:"BT下载",tips:"在线下载",sort:"991"}}}};t("common",s)}));