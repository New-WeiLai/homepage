// ===========================================
// 个人主页配置文件 config.js
// 包含：头像、姓名、歌单API、天气API、分类菜单
// ===========================================

window.siteConfig = {
    // 头像图片URL（支持本地或网络图片）
    avatar: "avatar.png",  // 可替换为你的头像地址
    
    // 显示姓名
    name: "Nwely（陌筏）",
    
    // 网易云音乐歌单ID
    playlistId: "13144855018",  // 替换为你的歌单ID
    
    background: {
    /*
    images: [
      "https://ysrandomwp.6956950.xyz/images/PC/0.png",
      "https://ysrandomwp.6956950.xyz/images/PC/1.png",
      "https://ysrandomwp.6956950.xyz/images/PC/2.png",
      "https://ysrandomwp.6956950.xyz/images/PC/3.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/4.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/5.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/6.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/7.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/8.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/9.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/10.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/11.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/12.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/16.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/14.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/15.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/17.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/18.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/19.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/20.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/21.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/22.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/23.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/24.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/25.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/26.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/27.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/28.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/29.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/30.png",
      "https://ysrandomwp.6956950.xyz/images/PC/31.png",
      "https://ysrandomwp.6956950.xyz/images/PC/32.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/33.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/34.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/35.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/36.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/37.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/38.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/39.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/40.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/41.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/42.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/43.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/44.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/45.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/46.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/47.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/48.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/49.png",      
      "https://ysrandomwp.6956950.xyz/images/PC/50.png",
      "https://ysrandomwp.6956950.xyz/images/PC/51.png",
      "https://ysrandomwp.6956950.xyz/images/PC/52.png",
      "https://ysrandomwp.6956950.xyz/images/PC/53.png"
    ],          // 图片URL数组
    */
    apiUrl: "https://picsum.photos/1920/1080?random", //随机图服务API
    changeInterval: 15,        // 自动切换间隔（秒），0为不自动切换
    showRefreshButton: true   // 是否显示手动刷新按钮
},
    
    // ===== 网易云音乐API配置 =====
    musicApi: {
        // 您提供的API接口
        baseUrl: "https://zm.wwoyun.cn/playlist/track/all",
        
        // 获取歌曲数量限制（可选，不填或设为空字符串则获取全部）
        limit: 100,  // 例如：只获取前10首
        
        // 获取歌曲的起始偏移量（0表示从第一首开始）
        offset: 0   // 例如：设为50则从第51首开始获取
    },
    
       // ===== 天气API配置（uapis.cn）=====
    weatherApi: {
        baseUrl: "https://uapis.cn/api/v1/misc/weather",
        city: "海口市",          // 城市中文名（必填）
        adcode: "570100",        // 邮编（可选）
        lang: "zh"               // 语言（可选）
    },
    
        // ===== 全局 favicon 配置 =====
    favicon: {
        // 是否自动获取favicon（如果为true，则不需要在卡片中手动指定icon）
        autoFetch: true,
        
        // 使用的favicon服务（可选）
        // 1. "google" - https://www.google.com/s2/favicons?domain=
        // 2. "duckduckgo" - https://icons.duckduckgo.com/ip3/
        // 3. "iconhorse" - https://icon.horse/icon/
        // 4. "custom" - 自定义模板
        service: "iconhorse",  // 默认使用Google服务
        
        // 自定义服务模板（当service为"custom"时使用）
        customTemplate: "https://your-favicon-service.com/icon?domain=",
        
        // 加载失败时的默认图标（FontAwesome）
        fallbackIcon: "fas fa-globe"
    },
    
    // ===== 分类菜单（抽屉中显示的标签） =====
    categories: [
        { 
            name: "项目", 
            icon: "fas fa-code",           // FontAwesome图标
            cards: [
                { 
                    name: "个人主页github",   //标题
                    description: "这个个人主页的github",     //简介
                    url: "https://github.com/new-weilai/home"    //链接
                },
                { 
                    name: "博客", 
                    description: "我的博客", 
                    url: "https://blog.6956950.xyz"
                },
                { 
                    name: "网站反代", 
                    description: "可上google", 
                    url: "https://nwlproxy.dpdns.org"
                },
                { 
                    name: "oldchat网址导航", 
                    description: "OldChat网址导航，集合所有oldchat系列域名（包括其他在@peng那里注册的域名）旧聊群号：GRP-86HT7X", 
                    url: "https://oldchat.one"
                }
            ]
        },
        { 
            name: "社交媒体", 
            icon: "fas fa-share-alt",
            cards: [        //可选，可不选
                { 
                    name: "X（Twitter）", 
                    description: "推特，现在叫X", 
                    url: "https://x.com/new_weilai"
                },
                { 
                    name: "Bilibili（哔哩哔哩）", 
                    description: "哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。 大家可以在这里找到许多欢乐。", 
                    url: "https://space.bilibili.com/3546386356242590"
                },
                { 
                    name: "Tiktok", 
                    description: "没发过视频", 
                    url: "https://tiktok.com/@new_weilai"
                }
            ]
        },
        { 
            name: "友情链接", 
            icon: "fas fa-link", 
            cards: []
        /*
                { 
                    name: "", 
                    description: "", 
                    url: "https://"
                },
                { 
                    name: "", 
                    description: "", 
                    url: "https://"
                },
                { 
                    name: "", 
                    description: "", 
                    url: "https://"
                },
                { 
                    name: "", 
                    description: "", 
                    url: "https://"
                },
                { 
                    name: "", 
                    description: "", 
                    url: "https://"
                },
        */
        }
    ]
};

// ===========================================
// 网易云歌单模拟数据（作为API失效时的降级方案）
// 当API返回502、404或超时时，会自动使用此数据
// ===========================================

window.mockPlaylistData = {
    // 这里的key对应上面的 playlistId: "13144855018"
    "13144855018": [
        { 
            id: 1, 
            name: "所念皆星河",           // 歌曲名
            artist: "CMJ",                 // 歌手
            lyric: "星河不可及，于是念做星。" // 歌词片段
        },
        { 
            id: 2, 
            name: "いつも何度でも", 
            artist: "木村弓", 
            lyric: "呼んでいる 胸のどこか奥で\nいつも何度でも 夢を描こう" 
        },
        { 
            id: 3, 
            name: "城南花已开", 
            artist: "三亩地", 
            lyric: "花开之时，故人归来。" 
        },
        { 
            id: 4, 
            name: "The Truth That You Leave", 
            artist: "Pianoboy", 
            lyric: "一直留下的真相，是离别。" 
        },
        { 
            id: 5, 
            name: "Summer", 
            artist: "久石让", 
            lyric: "夏天，是风的声音。" 
        }
    ],
    
    // 你可以添加更多歌单ID对应的模拟数据
    // "123456789": [ ... ]
};