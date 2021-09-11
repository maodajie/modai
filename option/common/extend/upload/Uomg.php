<?php

namespace app\common\extend\upload;

class Uomg
{
    public $name = '优启梦云存储';
    public $ver = '1.0';

    public function submit($file_path)
    {
        $type = $GLOBALS['config']['upload']['api']['uomg']['type'];
        if (empty($type)) {
            $type = 'sogou';
        }

        $url = 'https://api.uomg.com/api/image.' . $type;
        $data = [];
        $data['imgurl'] = $file_path;

        $curl = mac_curl_post($url, $data);
        $json = @json_decode($curl, true);
        if ('1' == $json['code']) {
            $file_path = $json['imgurl'];
        }

        return $file_path;
    }
}
