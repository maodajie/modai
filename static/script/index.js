/*!
 * @name:modai
 * @author:大橙子
 * @qqcode:1570457334
 * @description:苹果CMS v10 魔袋工具箱
 * @website:http://modai.maodajie.com
 * @telegram:https://t.me/maccms_tools
 * @version:2021.0824.1320
 */layui.use(["jquery","form"],(function(){window.$=window.jQuery=layui.$,layui.form.on("submit(search)",(function(a){var t=$(this);if(!$('[name="'+$(t).data("module")+'_name"]').val())return layer.msg("老哥！你不填标题让我查啥子哟",{offset:"auto"}),!1;var l=layer.msg("数据加载中,请稍等",{offset:"auto",icon:16,time:0});layer.open({type:2,maxmin:!1,offset:"auto",title:"搜索："+$('[name="'+$(t).data("module")+'_name"]').val(),area:["450px","300px"],content:addon+"/searchs/"+$(t).data("action")+"/controller/"+$(t).data("controller")+"/module/"+$(t).data("module")+"/type/"+$(t).data("type")+"/tid/"+$('[name="type_id"]').val()+"/rid/"+($('[name="'+$(t).data("module")+'_id"]').val()||0)+"/name/"+$('[name="'+$(t).data("module")+'_name"]').val(),cancel:function(a,t){layer.close(l)}})}));var a="",t=window.location.pathname,l='<div class="layui-form-item"><label class="layui-form-label">魔袋数据：</label><div class="layui-input-block"><div class="layui-btn-group">',e="</div></div></div>";/^.*vod*(?:(?!er).)*info.*$/i.test(t)?(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="video" data-action="douban" data-module="vod" data-type="ajax">豆瓣视频</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="video" data-action="baike" data-module="vod" data-type="ajax">百科视频</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="douban" data-module="vod" data-type="iframe">豆瓣海报</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="baike" data-module="vod" data-type="iframe">百科图片</a>',-1!=t.indexOf("id")&&(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="plots" data-action="baike" data-module="vod" data-type="iframe">百科剧情</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="roles" data-action="baike" data-module="vod" data-type="iframe">百科角色</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="comments" data-action="douban" data-module="vod" data-type="iframe">豆瓣评论</a>',a+='<a class="layui-btn layui-btn-danger" href="'+t.replace($('input[name="vod_id"]').val(),Number($('input[name="vod_id"]').val())-1)+'">上一条</a>',a+='<a class="layui-btn layui-btn-danger" href="'+t.replace($('input[name="vod_id"]').val(),Number($('input[name="vod_id"]').val())+1)+'">下一条</a>'),a+='<a lay-submit lay-filter="formSubmit" class="layui-btn" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e),$('[name="type_id"]').attr("lay-verify","required")):/.*website.*info.*/i.test(t)?(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="websites" data-action="baike" data-module="website" data-type="ajax">百科网址</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="baike" data-module="website" data-type="iframe">百科图片</a>',a+='<a type="submit" class="layui-btn" lay-submit="" lay-filter="formSubmit" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e),$('[name="type_id"]').attr("lay-verify","required")):/.*actor.*info.*/i.test(t)?(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="actor" data-action="douban" data-module="actor" data-type="ajax">豆瓣明星</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="actor" data-action="baike" data-module="actor" data-type="ajax">百科明星</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="photo" data-action="douban" data-module="actor" data-type="iframe">豆瓣图片</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="baike" data-module="actor" data-type="iframe">百科图片</a>',a+='<a type="submit" class="layui-btn" lay-submit="" lay-filter="formSubmit" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e),$('[name="type_id"]').attr("lay-verify","required")):/.*vod.*iplot.*/i.test(t)?(a+='<input name="plot_name" class="layui-input" value="'+$('input[name="vod_name"]').val()+'" style="width:200px;display:inline-block;vertical-align:middle;font-size:14px;margin-right:10px" />',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="plots" data-action="baike" data-module="plot" data-type="iframe">百科剧情</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="roles" data-action="baike" data-module="plot" data-type="iframe">百科角色</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="comments" data-action="douban" data-module="plot" data-type="iframe">豆瓣评论</a>',a+='<a type="submit" class="layui-btn" lay-submit="" lay-filter="formSubmit" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e)):/.*role.*data.*vod.*/i.test(t)&&($('[title="角色"]',window.parent.document).each((function(l,e){if(-1!=t.indexOf($(e).data("href"))){var i=$(".layui-table",window.parent.document).find("tbody").find("tr").eq(l).find("td");a+='<input type="text" name="role_name" class="layui-input" value="'+i.eq(2).find("a").text()+'" style="width:200px;display:inline-block;vertical-align:middle;font-size:14px;margin:0 10px" />',a+='<input type="hidden" name="role_id" class="layui-input" value="'+i.eq(1).text()+'" />'}})),a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="roles" data-action="baike" data-module="role" data-type="iframe">百科角色</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="plots" data-action="baike" data-module="role" data-type="iframe">百科剧情</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="comments" data-action="douban" data-module="role" data-type="iframe">豆瓣评论</a>',$(".layui-btn-group").append(a))}));