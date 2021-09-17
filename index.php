<?php
/*!
 * @author:大橙子
 * @website:http://maodajie.com
 * @telegram:https://t.me/maccms_tools
 * @qqcode:1570457334
 */
header('Content-Type:text/html;charset=utf-8');
// 超时时间
@ini_set('max_execution_time', '0');
// 取消内存限制
@ini_set('memory_limit', '-1');
// 定义应用目录
define('ROOT_PATH', dirname(__FILE__, 3) . '/');
define('CONF_PATH', dirname(__FILE__, 3) . '/application/');
define('APP_PATH', dirname(__FILE__) . (is_dir(dirname(__FILE__) . '/dev/exploit/') ? '/dev/' : '/option/'));
// 加载框架引导文件
require dirname(__FILE__, 3) . '/thinkphp/start.php';
