<?php
/*!
 * @author:大橙子
 * @website:http://maodajie.com
 * @telegram:https://t.me/maccms_tools
 * @qqcode:1570457334
 */

namespace app\common\behavior;

class Init
{
    public function run(&$params)
    {
        require CONF_PATH . 'common.php';
        if (request()->root() != request()->baseFile()) {
            header('Location:' . request()->baseFile());
        }
    }
}
