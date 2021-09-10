<?php
/*!
 * @author:大橙子
 * @website:http://maodajie.com
 * @telegram:https://t.me/maccms_tools
 * @qqcode:1570457334
 */

namespace app\common\behavior;

class Begin
{
    public function run(&$params)
    {
        $GLOBALS['config'] = config('maccms');
        define('MAC_PATH', $GLOBALS['config']['site']['install_dir']);
        if (!empty($GLOBALS['config']['app']['lang'])) {
            config('default_lang', $GLOBALS['config']['app']['lang']);
        }
        if (!empty($GLOBALS['config']['app']['pathinfo_depr'])) {
            config('pathinfo_depr', $GLOBALS['config']['app']['pathinfo_depr']);
        }
        config('template.view_path', '');
    }
}
