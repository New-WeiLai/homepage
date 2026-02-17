# 个人主页 · 陌筏

一个简洁、可高度自定义的个人主页。包含一言、天气、音乐播放器、分类卡片抽屉、随机背景和深色模式。所有内容均可通过配置文件轻松修改。

示例网站：https://6956950.xyz
          https://nwely.top      (感谢@peng赞助域名）

✨ 功能特点

· 👤 头像与姓名 – 支持本地或网络图片，姓名自由设置。
· 💬 一言 – 53条精选句子，每3秒自动刷新（可更换为自定义列表）。
· ☀️ 天气信息 – 调用 uapis.cn 天气API，显示当前温度、天气状况。
· 🎵 音乐播放器 – 从网易云歌单获取音乐列表，支持播放/暂停、上一首/下一首、歌词显示。
· 🗂️ 分类卡片抽屉 – 上拉展开，每个分类下可包含多个链接卡片，图标自动从网站获取 favicon。
· 🖼️ 随机背景 – 支持多种图源（API或本地数组），可手动刷新或自动切换。
· 🌙 深色模式 – 一键切换，自动保存偏好。

📁 文件结构

```
your-project/
├── index.html          # 主页面
├── config.js           # 核心配置文件（头像、API、分类等）
├── hitokoto.js         # 一言数据文件
├── avatar.png          # 示例头像（可选）
└── README.md           # 本文档
```

🚀 快速开始

1. 下载或克隆 本仓库到本地。
2. 确保文件结构完整，index.html、config.js、hitokoto.js 在同一目录。
3. 修改配置：编辑 config.js 和 hitokoto.js 自定义内容（见下文）。
4. 运行：双击 index.html 即可在浏览器中打开。
      推荐使用本地服务器（如 Live Server）以避免部分跨域问题。

⚙️ 配置说明

config.js – 主配置文件

```javascript
window.siteConfig = {
    avatar: "avatar.png",                     // 头像图片路径或URL
    name: "Nwely（陌筏）",                     // 显示姓名
    playlistId: "13144855018",                 // 网易云歌单ID

    // 随机背景
    background: {
        apiUrl: "https://api.mtyqx.cn/api/random.php", // 随机图API（返回图片或JSON）
        changeInterval: 5,                              // 自动切换间隔（秒），0为关闭
        showRefreshButton: true                          // 显示手动刷新按钮
    },

    // 网易云音乐API
    musicApi: {
        baseUrl: "https://zm.wwoyun.cn/playlist/track/all",
        limit: 100,
        offset: 0
    },

    // 天气API
    weatherApi: {
        baseUrl: "https://uapis.cn/api/v1/misc/weather",
        city: "海口市",
        adcode: "570100",
        lang: "zh"
    },

    // favicon 自动获取
    favicon: {
        autoFetch: true,
        service: "iconhorse",          // 可选 google / duckduckgo / iconhorse / custom
        customTemplate: "",              // 自定义服务模板
        fallbackIcon: "fas fa-globe"
    },

    // 分类卡片（可选cards字段，若无cards则不显示该分类）
    categories: [
        {
            name: "项目",
            icon: "fas fa-code",
            cards: [
                { name: "个人主页github", description: "这个个人主页的github", url: "https://github.com/new-weilai/homepage" },
                // ... 更多卡片
            ]
        },
        {
            name: "社交媒体",
            icon: "fas fa-share-alt",
            cards: [ /* ... */ ]
        },
        {
            name: "友情链接",
            icon: "fas fa-link"
            // 没有cards字段，该分类不会显示
        }
    ]
};

// 网易云歌单模拟数据（API失效时使用）
window.mockPlaylistData = { ... };
```

hitokoto.js – 一言数据

数组格式，每个对象包含 text 和 from 字段，例如：

```javascript
window.hitokotoList = [
    { text: "凌晨四点钟，看见海棠花未眠。", from: "川端康成" },
    // ...
];
```

🎨 自定义指南

· 头像：将图片放在同目录下，修改 avatar 为文件名，或使用网络图片URL。
· 分类卡片：每个分类对象中的 cards 数组可自由增删。若某分类无卡片，可省略 cards 字段。
· 随机背景：
  · 若使用直接返回图片的API（如 picsum.photos），确保 apiUrl 正确。
  · 若API返回JSON（如 {"imgurl":"..."}），代码会自动提取 imgurl、url、data 等常见字段。
  · 也可使用 images 数组（注释部分）配置多张固定图片。
· 天气API：默认使用 uapis.cn，如需更换，请修改 weatherApi 并调整 fetchWeather 方法中的解析逻辑。
· 深色模式：自动保存用户偏好，无需额外配置。

🛠️ 技术栈

· HTML5 / CSS3
· Vue.js 2.6 (CDN)
· Font Awesome 6 (图标)
· 原生 JavaScript (ES6)

📄 许可证

Apache © 2026 Nwely（陌筏）

---

Enjoy！ 如有问题或建议，欢迎提交 Issues 或 PR。
