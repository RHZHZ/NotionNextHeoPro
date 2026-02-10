# HeoPro 视觉增强补丁

这是一套为 NotionNext 的 Heo 主题深度定制的视觉补丁，旨在将主题风格转化为极简、精致的 macOS / Apple 官网质感。

## ✨ 核心特性
- **Apple 设计语言**：引入半透明玻璃拟态、1px 细描边与 macOS 系统级阴影。
  <img width="1352" height="1067" alt="局部截取_20260209_173919" src="https://github.com/user-attachments/assets/7777f5c7-f08f-4c00-9663-a1354debf4d1" />

- **深度排版优化**：针对中英文阅读优化的行高、字号层级与段落节奏。
  <img width="510" height="440" alt="局部截取_20260209_173800" src="https://github.com/user-attachments/assets/c70bfddf-bf77-460e-a8da-3952c19fc525" />

- **Mac 窗口风代码块**：全时暗色背景、三色点装饰、智能长代码折叠(默认超过30行显示) 。
  <img width="940" height="515" alt="局部截取_20260209_174021" src="https://github.com/user-attachments/assets/5686d9d8-a28e-4947-8f9a-bf1b476f0fbb" />

- **精致 UI 覆盖**：重塑了顶部导航、搜索页、Footer 底栏以及文章图片“画框感”。

  1. 顶部导航重塑磨砂感<img width="1370" height="56" alt="局部截取_20260209_174145" src="https://github.com/user-attachments/assets/6c83c897-f475-4708-b0f4-b4edf70c280f" />
  2. 搜索页美化<img width="970" height="446" alt="局部截取_20260209_174228" src="https://github.com/user-attachments/assets/b1ad00ad-80d6-4525-b8a2-91d49865c2f8" />
  3. Footer 底栏去繁就简<img width="2064" height="117" alt="局部截取_20260209_174322" src="https://github.com/user-attachments/assets/e1ddf0fc-4587-4660-b72f-cedcc1463ac5" />
  4. 文章图片“画框感”<img width="991" height="492" alt="局部截取_20260209_174549" src="https://github.com/user-attachments/assets/89a724a9-9b95-469c-afb2-c22eac6a3cd1" />

以上同样适配暗色模式。

## 📦 安装步骤

> **注意：替换前请备份原文件！**

1.  **替换样式文件**：
    将补丁包中的 `style.js` 覆盖到项目的 `themes/heo/style.js`。
2.  **替换代码组件**：
    将补丁包中的 `PrismMac.js` 覆盖到项目的 `components/PrismMac.js`。
3.  **更新配置文件（全局）**：
    在你的项目根目录 `blog.config.js` 中，确保以下全局配置已按需设置：
    ```javascript
    CODE_MAC_BAR: true,      // 开启 Mac 窗口三色点
    CODE_COLLAPSE: true,     // 开启代码折叠
    APPEARANCE: 'auto',      // 建议设为 auto 以体验完美的暗色模式适配
    ```

4.  **更新主题配置（Heo 主题）**：
    在 `themes/heo/config.js` 中，按需设置以下主题配置：
    ```javascript
    HEO_HERO_ENABLE: true,              // 开启/关闭英雄区 (首页顶部大卡)
    HEO_HOME_CATEGORY_BAR_ENABLE: true, // 开启/关闭首页文章分类栏（英雄区下方）
    ```
5.  **可选配置**：
    如果你想调整相关功能，可以在配置中修改：
    ```javascript
    // 只有超过 20 行的代码块才显示折叠条
    CODE_COLLAPSE_MIN_LINES: 20,

    // 隐藏英雄区
    HEO_HERO_ENABLE: false,

    // 隐藏首页文章分类栏（英雄区下方）
    HEO_HOME_CATEGORY_BAR_ENABLE: false
    ```

## 🎨 视觉规范参考
- **背景色**：Light `#f5f5f7` | Dark `#0f1115`
- **主字体**：-apple-system, BlinkMacSystemFont, SF Pro Text
- **圆角**：Card 18px, Image 12px, Code 14px
