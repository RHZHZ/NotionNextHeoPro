# HeoPro 视觉增强补丁

这是一套为 NotionNext 的 Heo 主题深度定制的视觉补丁，旨在将主题风格转化为极简、精致的 macOS / Apple 官网质感。

<img width="1470" height="948" alt="image" src="https://github.com/user-attachments/assets/35e9b621-0dee-45c5-86cb-8209c14f011c" />

## ✨ 核心特性
- **Apple 设计语言**：引入半透明玻璃拟态、1px 细描边与 macOS 系统级阴影。
  <img width="1791" height="1235" alt="局部截取_20260210_211014" src="https://github.com/user-attachments/assets/ec8dd4eb-f545-4f58-8dad-1e04a24ce61a" />

- **智能环境色**：文章页顶部背景支持根据封面图自动取色并压暗；侧边栏个人资料卡（InfoCard）在文章页内同步该环境色，非文章页保持默认蓝/黄。
  <img width="1828" height="1220" alt="局部截取_20260210_211136" src="https://github.com/user-attachments/assets/1081685b-a785-43eb-be07-e82fc48485b3" />

- **深度排版优化**：针对中英文阅读优化的行高、字号层级与段落节奏。
  <img width="510" height="440" alt="局部截取_20260209_173800" src="https://github.com/user-attachments/assets/c70bfddf-bf77-460e-a8da-3952c19fc525" />

- **Mac 窗口风代码块**：全时暗色背景、三色点装饰、智能长代码折叠(默认超过30行显示) 。
  <img width="940" height="515" alt="局部截取_20260209_174021" src="https://github.com/user-attachments/assets/5686d9d8-a28e-4947-8f9a-bf1b476f0fbb" />

- **精致 UI 覆盖**：重塑了顶部导航、搜索页、Footer 底栏以及文章图片“画框感”。

  1. 顶部导航重塑磨砂感<img width="1370" height="56" alt="局部截取_20260209_174145" src="https://github.com/user-attachments/assets/6c83c897-f475-4708-b0f4-b4edf70c280f" />
  2. 搜索页美化<img width="970" height="446" alt="局部截取_20260209_174228" src="https://github.com/user-attachments/assets/b1ad00ad-80d6-4525-b8a2-91d49865c2f8" />
  3. Footer 底栏去繁就简<img width="2064" height="117" alt="局部截取_20260209_174322" src="https://github.com/user-attachments/assets/e1ddf0fc-4587-4660-b72f-cedcc1463ac5" />
  4. 文章图片“画框感”<img width="991" height="492" alt="局部截取_20260209_174549" src="https://github.com/user-attachments/assets/89a724a9-9b95-469c-afb2-c22eac6a3cd1" />
  5. 其他暂未展示...
以上同样适配暗色模式。

## 📦 安装步骤

> **注意：替换前请备份原文件！**

1.  **替换样式文件**：
    将补丁包中的 `style.js` 覆盖到项目的 `themes/heo/style.js`。
2.  **替换核心组件**：
    将补丁包中的 `PostHeader.js`（环境色核心）、`InfoCard.js`（侧边栏同步）和 `Card.js`（属性透传修复）分别覆盖到 `themes/heo/components/` 对应的目录下。
3.  **替换代码组件**：
    将补丁包中的 `PrismMac.js` 覆盖到项目的 `components/PrismMac.js`。
4.  **替换开关控制文件**：
    将补丁包中的 `Hero.js` 覆盖到项目的 `themes/heo/components/Hero.js`；`index.js` 覆盖到项目的 `themes/heo/index.js`。
5.  **更新配置文件（全局）**：
    在你的项目根目录 `blog.config.js` 中，确保以下全局配置已按需设置：
    ```javascript
    CODE_MAC_BAR: true,      // 开启 Mac 窗口三色点
    CODE_COLLAPSE: true,     // 开启代码折叠
    APPEARANCE: 'auto',      // 建议设为 auto 以体验完美的暗色模式适配
    ```

6.  **更新主题配置（Heo 主题）**：
    在 `themes/heo/config.js` 中，按需设置以下主题配置：
    ```javascript
    HEO_HERO_ENABLE: true,              // 开启/关闭英雄区 (首页顶部大卡)
    HEO_HOME_CATEGORY_BAR_ENABLE: true, // 开启/关闭首页文章分类栏（英雄区下方）
    ```
7.  **可选配置**：
    如果你想调整相关功能，可以在配置中修改：
    ```javascript
    // 只有超过 20 行的代码块才显示折叠条
    CODE_COLLAPSE_MIN_LINES: 20,

    // 隐藏英雄区
    HEO_HERO_ENABLE: false,

    // 隐藏首页文章分类栏（英雄区下方）
    HEO_HOME_CATEGORY_BAR_ENABLE: false
    ```
    
**11. 灵动岛播放器安装与配置**
    专为 NotionNext 定制的“有生命感”音频引擎。

    <img width="1043" height="225" alt="image" src="https://github.com/user-attachments/assets/42c6bfab-ddb3-463a-b798-5d61c6a29ed8" />

    **📂 核心文件清单**
    请确保从 `heopro` 补丁包中拷贝以下 5 个核心文件到对应目录：
    - `components/Player.js` (音频引擎)
    - `components/DynamicIslandPlayer.js` (悬浮岛 UI)
    - `components/InlineIslandAudio.js` (文章内嵌 UI)
    - `pages/api/meting.js` (音频中转代理)
    - `pages/api/audio-meta.js` (元数据字典代理)

#### **🛠 安装步骤**
1. **组件挂载**：在 `components/ExternalPlugins.js` 中引入并挂载 `DynamicIslandPlayer`。
2. **NotionPage 适配**：在 `components/NotionPage.js` 的 `components` 映射中，将 `Audio` 指定为 `InlineIslandAudio`。
3. **安全配置**：在部署环境（如 Vercel）中添加环境变量 `NOTION_ACCESS_TOKEN`，用于读取封面/歌词元数据。

#### **⚙️ 配置文件 (blog.config.js / widget.config.js)**
添加以下关键配置：
```javascript
// 全局开关
MUSIC_PLAYER: true, 

// 全局随机歌单 ID (逗号分隔)
MUSIC_PLAYER_METING_ID: '2037842140,2037843139', 

// 文章音频自动转换
MUSIC_PLAYER_ARTICLE_AUDIO_CONVERT: true, 

// 音频元数据库 ID (Notion 数据库)
MUSIC_PLAYER_ARTICLE_META_DB_ID: ''
```


## 🎨 视觉规范参考
- **背景色**：Light `#f5f5f7` | Dark `#0f1115`
- **主字体**：-apple-system, BlinkMacSystemFont, SF Pro Text
- **圆角**：Card 18px, Image 12px, Code 14px
