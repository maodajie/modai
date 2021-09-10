<?php
/*!
 * @author:大橙子
 * @website:http://maodajie.com
 * @telegram:https://t.me/maccms_tool
 * @qqcode:1570457334
 */
$basename = basename(dirname(__FILE__));
if ('config' == request()->action() && $basename == $_GET['name']) {
    $title = '魔袋工具箱,' . $GLOBALS['config']['site']['install_dir'] . basename(dirname(__FILE__, 2)) . '/' . $basename;
    var_dump($title);
    $quickmenu = config('quickmenu');
    if (!in_array($title, $quickmenu)) {
        array_unshift($quickmenu, '行分隔符,###', $title);
        if (false === mac_arr2file('application/extra/quickmenu.php', $quickmenu)) {
            die('快捷菜单添加失败，请检查文件权限');
        }
    }

    die('快捷菜单添加成功，请刷新后查看<script>setTimeout(function(){top.location.reload();},1000);</script>');
}
