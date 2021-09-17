<?php

return [
    'sign' => [
        'user_email' => '',
        'user_pwd' => '',
    ],
    'base' => [
        'entry' => '',
        'mask' => [
            'pcre' => 'douban|iqiyi',
            'mode' => '0',
            'api' => 'https://i0.wp.com/',
            'state' => '1',
        ],
        'douban' => [
            'header' => '',
            'cookie' => '',
        ],
    ],
    'mail' => [
        'smtp' => [],
        'tpl' => [],
    ],
    'wechat' => [
        'dev' => [
            'url' => '',
            'token' => '',
            'appid' => '',
            'appsecret' => '',
        ],
    ],
];
