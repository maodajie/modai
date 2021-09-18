/*!
 * @name:modai
 * @author:大橙子
 * @qqcode:1570457334
 * @description:苹果CMS v10 魔袋工具箱
 * @website:http://modai.maodajie.com
 * @telegram:https://t.me/maccms_tools
 * @version:2021.0918.1100
 */layui.config({base:magic.path+magic.base+"/script/"}).use((function(){window.$=window.jQuery=layui.$;var e={global:{render:function(){e.global.submit(),layui.form.render("select"),$(".md-index-wrap").length?e.index.render():$(".md-multi-wrap").length?e.multir.render("multir"):$(".md-email-wrap").length?e.mailer.render("mailer"):$(".md-union-wrap").length?e.collect.render("collect"):$(".md-chat-wrap").length&&e.wechat.render()},submit:function(){layui.form.on("select(option)",(function(e){$(e.elem).parent("td").prev().find("input").val(e.elem[e.elem.selectedIndex].dataset.url)})),layui.form.on("submit(index)",(function(t){if(!magic.admin)return $.post(magic.index+"/option/entry",(function(e){layer.open({btn:!1,area:"370px",title:"后台入口设置",content:e,success:function(e,t){$(e).find(".layui-layer-content").css("overflow","unset"),layui.form.render("select")}})}),"json"),!1;if("imgur"==t.elem.dataset.code){var a=layer.load(2);return $.post(magic.index+"/option/imgur",(function(e){layer.close(a),layer.confirm("确定要"+e.msg+"吗",(function(t,a){var l=layer.load(2);$.post(magic.index+"/option/imgur/type/"+e.data,(function(t){if(layer.close(l),"uninstall"==e.data)return layer.msg(t.msg),!1;layer.alert(t.msg,(function(e,t){layer.close(e),layui.layer.open({type:2,maxmin:!1,offset:"auto",area:["80%","90%"],content:magic.admin+"/system/configupload",cancel:function(e,t){layer.close(l)}})}))})).error((function(e){layer.close(l),layer.msg("请求失败："+e.status)}),"json")}))}),"json"),!1}e.global.label("index"+t.elem.dataset.code,t.elem.dataset.title,t.elem.dataset.url)})),layui.form.on("submit(submit)",(function(e){var t=layer.load(2),a=e.elem.dataset,l=a.url?a.url:location.href;return $.post(l,e.field,(function(e){layer.close(t),layer[a.layer?a.layer:"msg"](e.msg?e.msg:"发生错误",{time:a.layer?0:1500},(function(e){a.jump?location.href=a.jump:a.layer?layer.close(e):location.reload()}))})).error((function(e){layer.msg("请求失败："+e.status),layer.close(t)}),"json"),!1})),layui.form.on("submit(verify)",(function(e){$(e.elem).addClass("layui-disabled").text("Loading..."),$.post(e.elem.dataset.url,e.field,(function(t){if($('input[name="code"]').val("").focus(),layer.msg(t.msg),1==t.code)var a=60,l=setInterval((function(){a>0?($(e.elem).addClass("layui-disabled").text("重新获取("+a+")"),a--):($(e.elem).removeClass("layui-disabled").text("获取验证码"),clearInterval(l))}),1e3)})).error((function(e){layer.msg("请求失败："+e.status)}),"json")})),layui.form.on("submit(checkbox)",(function(e){$('input[type="checkbox"]').each((function(t,a){"other"==e.elem.dataset.type?a.checked=!a.checked:a.checked=!0})),layui.form.render("checkbox")})),layui.form.on("submit(bind)",(function(e){return $.post(magic.admin+"/collect/bind",e.field,(function(e){e.data.local_type_name?that.find("span").html("["+e.data.local_type_name+"]").css("color","red"):that.find("span").html("[绑定]").css("color",""),layer.close(index),layer.msg(e.msg)})),!1})),layui.form.on("submit(write)",(function(e){var t=$(this),a=$(t).data("module"),l=$('[name="type_id"]',window.parent.document).val(),n=$('[name="'+a+'_id"]',window.parent.document).val(),i=magic.index+"/"+$(e.elem).data("controller")+"/"+$(e.elem).data("action")+"/id/"+$(e.elem).data("id")+"/tid/"+l+"/rid/"+(n||0)+"/start/"+$(e.elem).data("start")+"/module/"+$(e.elem).data("module")+"/name/"+$(e.elem).data("name"),o=layer.msg("数据加载中",{shade:.3,icon:16,time:0});if("iframe"==$(e.elem).data("type"))return parent.layui.layer.open({type:2,maxmin:!1,offset:"auto",area:["640px","500px"],content:i,cancel:function(e,t){layer.close(o)}}),parent.layui.layer.photos({photos:".md-image-wrap",anim:5}),!1;$.post(i,(function(e){layer.close(o),parent.layer.closeAll(),$.each(e.data,(function(t,l){if("pic_screenshot"==t){var n=$('[name="'+a+"_"+t+'"]',window.parent.document),i=[];if(n.val()){var o=n.val().split(/[(\r\n)\r\n]+/);$.each(e.data[t],(function(e,t){i[e]="图"+(e+1+o.length)+"$"+t})),n.val(n.val()+"\r\n"+i.join("\r\n"))}else $.each(e.data[t],(function(e,t){i[e]="图"+(e+1)+"$"+t})),n.val(i.join("\r\n"))}else"content"==t?parent.editor_setContent(parent.editor_getEditor(a+"_"+t),e.data[t]):e.data[t]&&$('[name="'+a+"_"+t+'"]',window.parent.document).val(e.data[t])})),parent.layer.msg(e.msg?e.msg:"发生错误",{offset:"auto"}),parent.layui.form.render("select")}))})),layui.form.on("submit(append)",(function(e){var t=layer.msg("正在加载,请稍等",{icon:16,time:0});return $.post(magic.index+"/image/upload","module="+$(this).parents("ul").prev().data("module")+"&url="+$(this).parents("ul").prev().data("url"),(function(a){layer.close(t);var l=$('[name="'+e.elem.dataset.type+'"]',window.parent.document);if(-1!=e.elem.dataset.type.indexOf("screenshot"))if(l.val()){if(-1!=l.val().indexOf(a.data))return layer.msg("已存在"),!1;var n=l.val().split(/[(\r\n)\r\n]+/);l.val(l.val()+"\r\n图"+(n.length+1)+"$"+a.data)}else l.val("图1$"+a.data);else l.val(a.data);layer.msg(a.msg?a.msg:"发生错误")})),!1})),layui.form.on("submit(banner)",(function(e){layer.open({type:2,maxmin:!1,title:"搜索",area:["500px","400px"],content:e.elem.dataset.url})})),layui.form.on("submit(handle)",(function(e){if(e.elem.dataset.type)return location.href=e.elem.dataset.url+"?wd="+$(this).parent().prev().find("input").val(),!1;var t=layer.msg("正在加载,请稍等",{icon:16,time:0});$.post(magic.index+"/image/upload","module="+e.elem.dataset.module+"&url="+e.elem.dataset.pic,(function(a){layer.close(t),parent.layer.open({type:2,maxmin:!0,title:e.elem.dataset.wd,area:["80%","90%"],content:e.elem.dataset.url,success:function(t,l){var n=parent.window[t.find("iframe")[0].name].layui,i=parent.layer.getChildFrame("body",l);e.elem.dataset.wd&&i.find('[name="vod_name"]').val(e.elem.dataset.wd),i.find('[name="vod_level"]').val(9),i.find('[name="vod_pic_slide"]').val(a.data),i.find('[name="vod_pic_slide"]').val()&&parent.layer.msg("海报添加成功,直接保存即可"),n.form.render("select")}})}))})),layui.form.on("submit(copy)",(function(e){var t=layer.load(2);return $.post(magic.index+"/image/upload","module="+e.elem.dataset.module+"&url="+e.elem.dataset.url,(function(e){layer.close(t),layer.alert(e.data,{title:"复制链接",btn:"复制链接",area:"360px"},(function(t,a){new ClipboardJS(".layui-layer-btn0",{text:function(t){return e.data}}).on("success",(function(e){layer.close(t),layer.msg("复制链接成功"),e.clearSelection()})).on("error",(function(e){layer.msg("复制失败,请重试",{icon:5})}))}))})),!1})),layui.form.on("submit(test)",(function(e){layer.open({type:2,maxmin:!1,title:"关注公众号登录",area:["350px","450px"],content:e.elem.dataset.url})})),layui.form.on("submit(ping)",(function(e){layer.open({type:2,maxmin:!1,title:"网络检测",area:["450px","350px"],content:e.elem.dataset.url+"?action="+e.field.action+"&check="+e.field.check})}))},label:function(e,t,a){var l=$(this);return!!a&&(window.top==window.self||1==l.data("jump")?(window.open(a,"_blank"),!1):$(window.parent.document).find('iframe[lay-id="'+e+'"]')[0]?($('iframe[lay-id="'+e+'"]',window.parent.document).hasClass("layui-this")?location.href=a:parent.layui.element.tabChange("macTab",e),!1):(parent.layui.element.tabAdd("macTab",{content:'<iframe width="100%" height="100%" lay-id="'+e+'" src="'+a+'" frameborder="0" scrolling="yes"></iframe>',title:t||l.text(),id:e}),void parent.layui.element.tabChange("macTab",e)))}},index:{render:function(){$(document).ready((function(){layui.extend({index:"{/}"+magic.down+"script/index"}).use(["index"],(function(){layui.index.render()})),$.post(magic.index+"/index/version",(function(e){var t=["关闭窗口"];1==e.code&&($('[data-code="version"]').find("p").html("最新版："+e.ver+"&nbsp;立即更新").parents(".md-addon-card").addClass("layui-btn-normal md-index-update").find("h2").text("有新版本啦"),t=["立即更新","取消更新"]);var a='<table class="layui-table" style="margin:-1px 0 0"><tbody>';$.each(e.log,(function(e,t){a+='<tr><td width="20" align="center">'+Number(e+1)+"</td><td>"+t+"</td></tr>"})),a+="</tbody></table>",$(document).on("click",".md-index-update",(function(){layer.confirm(a,{type:1,btn:t,area:["450px","350px"],title:"最新版："+e.ver+"&nbsp;更新日志"},(function(t,a){if(1!=e.code)return layer.close(t),!1;var l=layer.msg("正在升级,请稍等",{icon:16,time:0});$.post(magic.index+"/index/update","ver="+e.ver,(function(e){layer.close(l),layer.alert(e.msg?e.msg:"发生错误",(function(){location.reload()}))})).error((function(e){layer.close(l),layer.msg("请求失败："+e.status)}),"json")}))}))}))}))}},wechat:{render:function(){$(document).ready((function(){var e=setInterval((function(){$.post(location.href,"scene="+magic.scene,(function(t){1==t.code&&(clearInterval(e),window.top!=window.self?layer.msg(t.msg,(function(){parent.location.reload()})):layer.msg(t.msg,(function(){location.reload()})))})).error((function(e){layer.msg("请求失败："+e.status)}),"json")}),2e3)}))}},multir:{render:function(e){var t=0,a=[];layui.table.init(e,{id:e,method:"post",url:location.href,height:"full",limit:10,limits:[10,15,20],autoSort:!1,page:!0,response:{statusCode:1},done:function(a,l,n){return 0!=t&&(l>=Math.ceil(n/a.data.length)?(layer.alert("采集完毕"),!1):void setTimeout((function(){layui.table.reload(e,{page:{curr:l+1}},!0)}),$('[lay-filter="space"]').val()))}}),layui.table.on("sort("+e+")",(function(l){t=0,a.order=l.field+" "+l.type,a.collect="",layui.table.reload(e,{initSort:l,where:a,page:{curr:1}},!0)})),layui.table.on("tool("+e+")",(function(e){if("plot"==e.event)var t="/vod/iplot/id/"+e.data.vod_id;else t="role"==e.event?"/role/data/rid/"+e.data.vod_id:"/comment/data/mid/1";layer.open({type:2,maxmin:!1,area:["80%","90%"],content:magic.admin+t})})),layui.form.on("select("+e+")",(function(l){t=0,a[l.elem.dataset.field]=l.value,a.collect="",layui.table.reload(e,{where:a,page:{curr:1}},!0)})),layui.form.on("submit(start)",(function(l){t=1,a.collect=1,layui.table.reload(e,{where:a,page:{curr:1}},!0)}))}},mailer:{render:function(e){var t=[];layui.table.init(e,{id:e,method:"post",url:location.href,height:"277",limit:100,limits:[20,50,100,200,500],autoSort:!1,page:!0,response:{statusCode:1}}),layui.table.on("sort("+e+")",(function(a){t.order=a.field+" "+a.type,layui.table.reload(e,{initSort:a,where:t,page:{curr:1}},!0)})),layui.form.on("select("+e+")",(function(a){t[a.elem.dataset.field]=a.value,layui.table.reload(e,{where:t,page:{curr:1}},!0)})),layui.layedit.set({hideTool:["face","image","help"],height:100});var a=[];$("textarea").each((function(e,t){a[$(t).attr("id")]=layui.layedit.build($(t).attr("id"))})),layui.form.on("select(theme)",(function(e){var t=layer.load(2);$.post(e.elem[e.elem.selectedIndex].dataset.url,(function(l){layer.close(t),$(e.elem).parents(".md-email-table").find('[name="nick"]').val(l.nick),$(e.elem).parents(".md-email-table").find('[name="title"]').val(l.title),$(e.elem).parents(".md-email-table").find('[name="content"]').html(l.content),a.content=layui.layedit.build("content")})).error((function(e){layer.msg("请求失败："+e.status)}),"json")})),layui.form.verify({content:function(e,t){var l=a[$(t).attr("id")];if(layui.layedit.sync(l),!layui.layedit.getContent(l))return"请输入邮件内容"},mailer:function(t,a){var l=[];if($.each(layui.table.checkStatus(e).data,(function(e,t){l.push(t.user_email)})),l.length<1)return"请至少选择一个邮箱账号";$(a).val(l)}}),$(document).on("click",'[lay-event="search"]',(function(){t.wd=$('[type="search"]').val(),layui.table.reload(e,{where:t,page:{curr:1}},!0)})).on("click",'[lay-filter="test"]',(function(){var e=layer.load(2),t=$(this).parents("table");$.post($(this).data("url"),{host:t.find('[name="mail[smtp][host][]"]').val(),port:t.find('[name="mail[smtp][port][]"]').val(),secure:t.find('[name="mail[smtp][secure][]"]').val(),username:t.find('[name="mail[smtp][username][]"]').val(),password:t.find('[name="mail[smtp][password][]"]').val(),email:t.find('[id="email"]').val()},(function(t){layer.close(e),layer.alert(t.msg?t.msg:"发生错误")})).error((function(t){layer.msg("请求失败："+t.status),layer.close(e)}),"json")})).on("click",'[lay-filter="adding"]',(function(){var e="content"+$(".md-theme-table").length;$(this).parents("table").after($(this).parents("table").prop("outerHTML")).next().hide().fadeIn().find("input").val(""),$(this).parents("table").next().find("textarea").attr("id",e).html(""),layui.layedit.build(e),layui.form.render("select")})).on("click",'[lay-filter="delete"]',(function(){if($(".md-addon-form").find(".layui-table").length<2)return layer.msg("请至少保留一个",{icon:5,anim:6}),!1;$(this).parents("table").remove(),layui.form.render("select")}))}},collect:{table1:[{type:"checkbox"},{field:"collect_id",title:"ID",width:60,sort:!0},{field:"collect_mid_text",title:"类型",width:58},{field:"collect_type_text",title:"接口类型",width:86,hide:!0},{field:"collect_name",title:"名称",event:"open",style:"cursor:pointer;",sort:!0},{field:"collect_url",title:"采集地址",hide:!0},{toolbar:"#open",title:"操作",width:266},{toolbar:"#edit",title:"编辑",width:116}],table2:[{field:"collect_id",title:"ID",width:60,hide:!0},{toolbar:"#search",title:"操作",width:66},{field:"collect_mid_text",title:"类型",width:60,hide:!0},{field:"collect_bind",title:"绑定分类",event:"bind",style:"cursor:pointer",width:150},{field:"collect_from",title:"播放器",event:"set",style:"cursor:pointer",width:110},{field:"union_name",title:"名称",minWidth:200},{field:"collect_name",title:"资源站",event:"open",style:"cursor:pointer",minWidth:200},{field:"union_time",title:"时间",width:160,hide:!0}],stopit:function(e){return'<a lay-submit lay-filter="stopit" class="layui-btn layui-btn-sm layui-btn-primary">'+e+"</a>"},search:function(t,a,l,n,i,o){if(o>=l.length)return $(".layui-table-tool-temp").html(e.collect.stopit("搜索完毕")+'&nbsp;&nbsp;&nbsp;<span style="color:red">共搜索到'+n.length+"条数据</span>"),!1;var r=10,c=setInterval((function(){r>0?($(".layui-table-time").html("&nbsp;("+r+")"),r--):clearInterval(c)}),1e3);l[o].wd=$('input[type="search"]').val(),$.ajaxSettings.timeout=1e4;var d=$.post(magic.index+"/collect/search",l[o],(function(e,l){e.data.length>0&&$.each(e.data,(function(e,t){n.push(t)})),layui.table.reload(t,{cols:[a],data:n,url:!1,text:{none:"搜索中,请稍等"},page:{curr:1}})})).complete((function(r,d){clearInterval(c),o+1<l.length&&$(".layui-table-tool-temp").html(e.collect.stopit("停止搜索")+'&nbsp;&nbsp;&nbsp;<span style="color:red">正在搜索:'+l[o+1].collect_name+'<span class="layui-table-time"></span></span>'),1==i?e.collect.search(t,a,l,n,i,o+1):$(".layui-table-tool-temp").html(e.collect.stopit("已停止")+'&nbsp;&nbsp;&nbsp;<span style="color:red">已停止搜索</span>')}),"json");layui.form.on("submit(stopit)",(function(e){clearInterval(c),i=0,d.abort()}))},render:function(t){var a=[],l="";layui.table.render({elem:"#"+t,method:"post",toolbar:"#toolbar",url:location.href,height:"full-130",limit:50,limits:[20,50,100],cols:[e.collect.table1],autoSort:!1,page:!0,response:{statusCode:1},defaultToolbar:["filter",{title:"刷新",layEvent:"reload",icon:"layui-icon-refresh"}]}),layui.table.on("sort("+t+")",(function(l){a.order=l.field+" "+l.type,layui.table.reload(t,{url:location.href,cols:[e.collect.table1],initSort:l,where:a,page:{curr:1},text:{none:"暂无相关数据"}},!0)})),layui.form.on("select("+t+")",(function(l){a[l.elem.dataset.field]=l.value,layui.table.reload(t,{url:location.href,cols:[e.collect.table1],where:a,page:{curr:1},text:{none:"暂无相关数据"}},!0)})),layui.form.on("submit(search)",(function(a){$('[type="checkbox"]').length&&(l=layui.table.checkStatus(t).data).length<1&&(l=layui.table.getData(t)),layui.table.reload(t,{cols:[e.collect.table2],data:[],url:!1,text:{none:"搜索中,请稍等"},page:{curr:1}}),$(".layui-table-tool-temp").html(e.collect.stopit("停止搜索")+'&nbsp;&nbsp;&nbsp;<span style="color:red">正在搜索:'+l[0].collect_name+'<span class="layui-table-time"></span></span>'),e.collect.search(t,e.collect.table2,l,[],1,0)})),layui.table.on("toolbar("+t+")",(function(a){"break"==a.event?e.global.label($(this).data("id"),$(this).data("title"),$(this).data("url")):"reload"==a.event?layui.table.reload(t,{url:location.href,cols:[e.collect.table1],text:{none:"暂无相关数据"}},!0):"button"==a.event&&layer.open({area:["80%","90%"],title:$(this).text(),content:$(this).data("url"),maxmin:!0,type:2})})),layui.table.on("tool("+t+")",(function(a){var l=$(this);if("set"==a.event){if(1!=a.data.collect_mid)return layer.alert(a.data.collect_mid_text+"不需要配置播放器"),!1;var n=layer.load(2);$.ajaxSettings.timeout=1e4;var i=$.post(magic.index+"/collect/from","url="+a.data.collect_url+"&name="+a.data.collect_name+"&mode="+a.data.collect_mode,(function(e){layer.close(n);var t="";$.each(e.data,(function(e,a){t+='<div style="padding:5px"><a data-from="'+e+'" lay-submit lay-filter="button" class="layui-btn layui-btn-fluid layui-btn-primary">'+a.or+a.name+"["+e+"]</a></div>"})),layer.open({btn:!1,area:"360px",title:"添加",content:t,success:function(t,n){$(t).find(".layui-layer-content").css("padding","15px"),layui.form.on("submit(button)",(function(t){layer.open({area:["80%","90%"],title:a.data.collect_name,content:magic.index+"/collect/"+a.data.collect_mode+"/id/"+t.elem.dataset.from,maxmin:!0,type:2,success:function(n,i){var o=e.data[t.elem.dataset.from],r=window[n.find("iframe")[0].name].layui,c=r.form.val("config");r.form.val("config",{from:c.from||o.from,sort:c.sort||o.sort,show:c.show||o.name,status:c.from?c.status:1,tip:c.from?c.tip:o.tip,ps:c.from?c.ps:o.ps,des:o.des}),r.form.on("submit(config)",(function(e){return $.post(magic.admin+"/vod"+a.data.collect_mode+"/info/id/"+t.elem.dataset.from,e.field,(function(e){1==e.code&&l.find("span").html("["+o.name+"]").css("color","red"),layer.closeAll(),layer.msg(e.msg)})),!1}))}})}))}})})).complete((function(e){layer.close(n),"timeout"==e.statusText&&(layer.alert("请求超时,请重试"),i.abort())})).error((function(e){layer.close(n),layer.msg("请求失败："+e.status)}),"json")}else if("open"==a.event){var o=l.data("type")?l.data("type"):a.event;e.global.label(a.data.collect_flag+o,a.data.collect_name,a.data["collect_"+o])}else if("collect"==a.event){if("rgb(255, 0, 0)"!=l.parents("td").siblings('[lay-event="bind"]').find("span").css("color"))return layer.alert("请先绑定分类再采集"),!1;if("rgb(255, 0, 0)"!=l.parents("td").siblings('[lay-event="set"]').find("span").css("color"))return layer.alert("请先添加播放器再采集"),!1;n=layer.load(2),$.post(a.data.collect_select,(function(e){layer.close(n);var t=e.match(/<font.*>(.*)<\/font>/i);layer.alert(a.data.union_name+"["+a.data.union_remarks+"]"+t[0],{title:a.data.collect_name})}))}else if("time"==a.event)layer.open({type:2,maxmin:!0,title:"定时任务设置",area:["80%","90%"],content:magic.index+"/collect/timming/id/"+a.data.collect_flag,success:function(e,t){var l=window[e.find("iframe")[0].name].layui,n=l.form.val("config");l.form.val("config",{status:n.name?n.status:1,name:n.name||a.data.collect_flag,param:n.param||a.data.collect_param,des:"每日定时采集："+a.data.collect_name});var i=layer.getChildFrame("body",t);i.find('[name="weeks[]"]').is(":checked")||i.find('[name="weeks[]"]').each((function(e,t){t.checked=!0})),i.find('[name="hours[]"]').is(":checked")||i.find('[name="hours[]"]').each((function(e,t){t.checked=!0})),l.form.render("checkbox")}});else if("bind"==a.event){var r=a.data.collect_bind_tid;"rgb(255, 0, 0)"!=l.find("span").css("color")&&(r=""),$.post(magic.index+"/collect/type",{col:a.data.collect_bind_key,val:r,mid:a.data.collect_mid},(function(e){layer.open({btn:!1,area:"300px",title:"绑定分类",content:e,success:function(e,t){$(e).find(".layui-layer-content").css("overflow","unset"),layui.form.render("select")}})}),"json")}else"edit"==a.event?layer.open({area:["80%","90%"],title:a.data.collect_name,content:magic.admin+"/collect/info/id/"+a.data.collect_id,maxmin:!0,type:2}):"del"==a.event&&layer.confirm("删除之后无法恢复，您确定要删除吗",{title:"提示"},(function(e){$.post(magic.admin+"/collect/del/ids/"+a.data.collect_id,(function(e){layer.msg(e.msg,(function(){layui.table.reload(t,{},!0)}))}))}))}))}}};e.global.render()}));