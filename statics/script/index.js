/*!
 * @name:modai
 * @author:大橙子
 * @qqcode:1570457334
 * @description:苹果CMS v10 魔袋工具箱
 * @website:http://modai.maodajie.com
 * @telegram:https://t.me/maccms_tools
 * @version:2021.0917.2011
 */layui.use(["jquery","form"],(function(){window.$=window.jQuery=layui.$;var a="",t=window.location.pathname,l='<div class="layui-form-item"><label class="layui-form-label">魔袋数据：</label><div class="layui-input-block"><div class="layui-btn-group">',e="</div></div></div>";/^.*vod*(?:(?!er).)*info.*$/i.test(t)?(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="video" data-action="douban" data-module="vod" data-type="ajax">豆瓣视频</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="video" data-action="baike" data-module="vod" data-type="ajax">百科视频</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="douban" data-module="vod" data-type="iframe">豆瓣海报</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="baike" data-module="vod" data-type="iframe">百科图片</a>',-1!=t.indexOf("id")&&(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="plot" data-action="baike" data-module="vod" data-type="iframe">百科剧情</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="role" data-action="baike" data-module="vod" data-type="iframe">百科角色</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="comment" data-action="douban" data-module="vod" data-type="iframe">豆瓣评论</a>',a+='<a class="layui-btn layui-btn-danger" href="'+t.replace($('input[name="vod_id"]').val(),Number($('input[name="vod_id"]').val())-1)+'">上一条</a>',a+='<a class="layui-btn layui-btn-danger" href="'+t.replace($('input[name="vod_id"]').val(),Number($('input[name="vod_id"]').val())+1)+'">下一条</a>'),a+='<a lay-submit lay-filter="formSubmit" class="layui-btn" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e),a='<a lay-submit lay-filter="actor" class="layui-btn layui-btn-normal" data-controller="actor" data-action="douban" data-module="actor" data-type="ajax">添加演员导演编剧数据</a>',$('[name="vod_tv"]').parents(".layui-form-item").prepend(l+a+e),$('[name="type_id"]').attr("lay-verify","required")):/.*website.*info.*/i.test(t)?(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="website" data-action="baike" data-module="website" data-type="ajax">百科网址</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="baike" data-module="website" data-type="iframe">百科图片</a>',a+='<a type="submit" class="layui-btn" lay-submit="" lay-filter="formSubmit" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e),$('[name="type_id"]').attr("lay-verify","required")):/.*actor.*info.*/i.test(t)?(a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="actor" data-action="douban" data-module="actor" data-type="ajax">豆瓣明星</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="actor" data-action="baike" data-module="actor" data-type="ajax">百科明星</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="photo" data-action="douban" data-module="actor" data-type="iframe">豆瓣图片</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="image" data-action="baike" data-module="actor" data-type="iframe">百科图片</a>',a+='<a type="submit" class="layui-btn" lay-submit="" lay-filter="formSubmit" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e),$('[name="type_id"]').attr("lay-verify","required")):/.*vod.*iplot.*/i.test(t)?(a+='<input name="plot_name" class="layui-input" value="'+$('input[name="vod_name"]').val()+'" style="width:200px;display:inline-block;vertical-align:middle;font-size:14px;margin-right:10px" />',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="plot" data-action="baike" data-module="plot" data-type="iframe">百科剧情</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="role" data-action="baike" data-module="plot" data-type="iframe">百科角色</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="comment" data-action="douban" data-module="plot" data-type="iframe">豆瓣评论</a>',a+='<a type="submit" class="layui-btn" lay-submit="" lay-filter="formSubmit" data-child="">保存数据</a>',$(".layui-tab-item.layui-show").prepend(l+a+e)):/.*role.*data.*vod.*/i.test(t)&&($('[title="角色"]',window.parent.document).each((function(l,e){if(-1!=t.indexOf($(e).data("href"))){var i=$(".layui-table",window.parent.document).find("tbody").find("tr").eq(l).find("td");a+='<input type="text" name="role_name" class="layui-input" value="'+i.eq(2).find("a").text()+'" style="width:200px;display:inline-block;vertical-align:middle;font-size:14px;margin:0 10px" />',a+='<input type="hidden" name="role_id" class="layui-input" value="'+i.eq(1).text()+'" />'}})),a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="role" data-action="baike" data-module="role" data-type="iframe">百科角色</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="plot" data-action="baike" data-module="role" data-type="iframe">百科剧情</a>',a+='<a lay-submit lay-filter="search" class="layui-btn layui-btn-normal" data-controller="comment" data-action="douban" data-module="role" data-type="iframe">豆瓣评论</a>',$(".layui-btn-group").append(a)),layui.form.on("submit(search)",(function(a){var t=$(this);if(!$('[name="'+$(t).data("module")+'_name"]').val())return layer.msg("老哥！你不填标题让我查啥子哟",{offset:"auto"}),!1;layer.open({type:2,maxmin:!1,offset:"auto",area:["450px","300px"],title:"搜索："+$('[name="'+$(t).data("module")+'_name"]').val(),content:damupo.index+"/search/"+$(t).data("action")+"/controller/"+$(t).data("controller")+"/module/"+$(t).data("module")+"/type/"+$(t).data("type")+"/tid/"+$('[name="type_id"]').val()+"/rid/"+($('[name="'+$(t).data("module")+'_id"]').val()||0)+"/name/"+$('[name="'+$(t).data("module")+'_name"]').val()})})),layui.form.on("submit(actor)",(function(a){$(this);for(var t=$('[name="vod_actor"]').val().split(","),l=$('[name="vod_director"]').val().split(","),e=0;e<l.length;e++)$.inArray(l[e],t)<0&&t.push(l[e]);var i=$('[name="vod_writer"]').val().split(",");for(e=0;e<i.length;e++)$.inArray(i[e],t)<0&&t.push(i[e]);if(!(t=t.filter((function(a){return a&&a.trim()}))).length)return layer.msg("老哥！你不填演员导演编剧让我查啥子哟",{offset:"auto"}),!1;var o="";$.each(t,(function(a,t){o+='<div class="layui-col-xs4" style="padding:5px"><a lay-submit lay-filter="button" class="layui-btn layui-btn-fluid layui-btn-primary">'+t+"</a></div>"})),layer.open({btn:!1,area:"450px",offset:"auto",title:"添加演员导演编剧",content:o})})),layui.form.on("submit(button)",(function(a){var t=$(this),l=layer.load(2);$.post(damupo.index+"/search/index/module/actor/wd/"+t.text(),(function(a){layer.close(l);var e=function(a){layer.open({type:2,maxmin:!1,offset:"auto",title:"演员："+t.text(),area:["80%","90%"],content:damupo.admin+a,success:function(a,l){var e=layer.getChildFrame("body",l);e.find('[lay-filter="formSubmit"]').attr("lay-filter","actorSubmit"),e.find('[name="actor_name"]').val(t.text());var i=window[a.find("iframe")[0].name];i.layui.form.on("submit(actorSubmit)",(function(a){$.post(i.location.href,a.field,(function(a){i.layui.layer.msg(a.msg,{offset:"auto",time:1e3},(function(){1==a.code&&layer.close(l)}))}))}))}})};if(0==a.total)return e("/actor/info"),!1;var i='<table class="layui-table" style="margin:0;"><colgroup><col width="95"><col width="351"><col width="168"></colgroup><tbody>';$.each(a.list,(function(a,t){i+='<tr><td rowspan="2"><img width="64" height="64" src="'+t.pic+'"></td><td>'+t.name+'</td><td><a data-id="'+t.id+'" lay-submit lay-filter="submit" href="javascript:;" class="layui-btn layui-btn-xs">编辑</a><a data-id="'+t.id+'" data-type="del" lay-submit lay-filter="submit" href="javascript:;" class="layui-btn layui-btn-xs">删除</a></td></tr>',i+='<tr><td colspan="2"><div class="layui-elip" style="width: 300px">'+t.blurb+"</div></td></tr>"})),i+="</tbody></table>",layer.open({type:1,area:"450px",offset:"auto",content:i,btn:["关闭","继续添加"],title:"已存在同名人物,是否继续添加",success:function(a,t){$(a).find(".layui-layer-content").css("padding","10px 10px 0px 10px"),layui.form.on("submit(submit)",(function(a){if(a.elem.dataset.type)return layer.confirm("确定删除吗",{offset:"auto",icon:3,title:"提示"},(function(t){$.post(damupo.admin+"/actor/del/ids/"+a.elem.dataset.id,(function(t){layer.msg(t.msg,{offset:"auto"}),1==t.code&&($(a.elem).parents("tr").next().remove(),$(a.elem).parents("tr").remove())}))})),!1;e("/actor/info/id/"+a.elem.dataset.id)}))},yes:function(a,t){layer.close(a)},btn2:function(a,t){e("/actor/info")}})}))}))}));