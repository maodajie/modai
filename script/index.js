layui.define(['jquery'], function(exports) {
	window.$ = window.jQuery = layui.$;
	var maodajie = {
		'render': function() {
			var html = '<table class="layui-table" style="margin-top:0"><tbody>';
			$.each(maodajie.info, function(index, value) {
				html += '<tr>';
				if (value.type == 'image') {
					html += '<td colspan="3" style="padding:0">';
					html += '<a target="_blank" href="' + value.link + '" title="' + value.tips + '">';
					html += '<img src="' + value.pics + '" alt="' + value.name + '" style="max-width:100%;width:100%;" />';
					html += '</a></td>';
				} else {
					html += '<td><a target="_blank" href="' + value.link1 + '" title="' + value.tips1 + '">' + value.name1 + '</a></td>';
					html += '<td><a target="_blank" href="' + value.link2 + '" title="' + value.tips2 + '">' + value.name2 + '</a></td>';
					html += '<td><a target="_blank" href="' + value.link3 + '" title="' + value.tips3 + '">' + value.name3 + '</a></td>';
				}
				html += '</tr>';
			});
			html += '</tbody></table>';
			$('.md-index-wrap').after(html);
		},
		'info': [{
			'name': '米上云香港GIA VPS20元起',
			'link': 'https://www.mishangyun.com/aff/CFZAPLYZ',
			'pics': magic.down + 'image/mishangyun.gif',
			'tips': '米上云香港GIA VPS20元起，购买魔加主题的新用户，赠送米上云香港VPS一个月使用时间！',
			'type': 'image',
		}, {
			'name1': '<span class="layui-badge">推荐</span> <font color="red">苹果CMSv10主题魔加</font>',
			'link1': 'http://mojia.amujie.com',
			'tips1': '限时优惠',
			'name2': '<span class="layui-badge">推荐</span> <font color="red">苹果CMSv10主题魔九</font>',
			'link2': 'http://mojiu.233434.xyz',
			'tips2': '限时优惠',
			'name3': '<span class="layui-badge">推荐</span> <font color="red">苹果CMSv10魔袋工具箱</font>',
			'link3': 'http://modai.maodajie.com',
			'tips3': '限时优惠',
			'type': 'text',
		}]
	};
	exports('index', maodajie);
});
