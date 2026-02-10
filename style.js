/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      :root {
        --heo-surface: rgba(255, 255, 255, 0.9);
        --heo-surface-strong: #ffffff;
        --heo-surface-dark: rgba(27, 28, 32, 0.92);
        --heo-border: rgba(0, 0, 0, 0.08);
        --heo-border-strong: rgba(0, 0, 0, 0.12);
        --heo-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06),
          0 6px 18px rgba(0, 0, 0, 0.06);
        --heo-shadow-md: 0 2px 6px rgba(0, 0, 0, 0.08),
          0 18px 40px rgba(0, 0, 0, 0.08);
        --heo-shadow-lg: 0 6px 20px rgba(0, 0, 0, 0.12),
          0 30px 80px rgba(0, 0, 0, 0.12);
        --heo-shadow-lg-dark: 0 8px 26px rgba(0, 0, 0, 0.55),
          0 40px 100px rgba(0, 0, 0, 0.6);
        --heo-border-subtle: rgba(0, 0, 0, 0.06);
        --heo-border-subtle-dark: rgba(255, 255, 255, 0.09);
        --heo-card-hover-translate: -2px;
        --heo-radius-sm: 10px;
        --heo-radius-md: 14px;
        --heo-radius-lg: 18px;
        --heo-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
        --heo-dur-fast: 160ms;
        --heo-dur: 240ms;

        --heo-font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text",
          "SF Pro Display", "PingFang SC", "Hiragino Sans GB",
          "Noto Sans CJK SC", system-ui, Segoe UI, Roboto, Helvetica, Arial,
          sans-serif;
        --heo-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco,
          Consolas, "Liberation Mono", "Courier New", monospace;

        --heo-text: rgba(0, 0, 0, 0.88);
        --heo-text-secondary: rgba(0, 0, 0, 0.62);
        --heo-text-tertiary: rgba(0, 0, 0, 0.46);

        --heo-article-font-size: 16px;
        --heo-article-line-height: 1.78;
        --heo-article-paragraph-gap: 0.9em;
        --heo-article-block-gap: 1.25rem;

        --heo-h2-size: 1.45rem;
        --heo-h3-size: 1.22rem;
        --heo-h4-size: 1.06rem;
      }

      html.dark {
        --heo-text: rgba(255, 255, 255, 0.88);
        --heo-text-secondary: rgba(235, 235, 245, 0.68);
        --heo-text-tertiary: rgba(235, 235, 245, 0.52);
      }

      body {
        background-color: #f7f9fe;
        background-image: radial-gradient(rgba(60, 132, 246, 0.03) 1px, transparent 0);
        background-size: 24px 24px;
      }

      html.dark body {
        background-color: #0f1115;
        background-image: radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 0);
        background-size: 24px 24px;
      }

      #theme-heo {
        background: transparent !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: var(--heo-font-sans);
        color: var(--heo-text);
        text-rendering: optimizeLegibility;
      }

      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.28);
        border-radius: 999px;
        cursor: pointer;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(60, 60, 67, 0.42);
      }

      html.dark ::-webkit-scrollbar-thumb {
        background: rgba(235, 235, 245, 0.2);
      }

      html.dark ::-webkit-scrollbar-thumb:hover {
        background: rgba(235, 235, 245, 0.3);
      }

      * {
        box-sizing: border-box;
      }

      #theme-heo a,
      #theme-heo button,
      #theme-heo input,
      #theme-heo textarea,
      #theme-heo select,
      #theme-heo [role='button'] {
        transition: background-color var(--heo-dur-fast) var(--heo-ease),
          border-color var(--heo-dur-fast) var(--heo-ease),
          color var(--heo-dur-fast) var(--heo-ease),
          opacity var(--heo-dur-fast) var(--heo-ease),
          box-shadow var(--heo-dur) var(--heo-ease),
          transform var(--heo-dur) var(--heo-ease),
          filter var(--heo-dur) var(--heo-ease);
      }

      #theme-heo nav#nav.bg-white,
      #theme-heo nav#nav.dark\:bg-\[\#18171d\] {
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 10px 30px rgba(0, 0, 0, 0.06);
      }

      #theme-heo nav#nav.bg-white {
        background: rgba(255, 255, 255, 0.88) !important;
        -webkit-backdrop-filter: saturate(180%) blur(16px);
        backdrop-filter: saturate(180%) blur(16px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }

      html.dark #theme-heo nav#nav.dark\:bg-\[\#18171d\] {
        background: rgba(27, 28, 32, 0.84) !important;
        -webkit-backdrop-filter: saturate(140%) blur(18px);
        backdrop-filter: saturate(140%) blur(18px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04), 0 14px 36px rgba(0, 0, 0, 0.45);
      }

      /* 顶部导航栏：菜单项与右侧按钮发光效果 */
      #theme-heo nav#nav a[aria-current='page'],
      #theme-heo nav#nav a.active,
      #theme-heo nav#nav button[aria-current='page'],
      #theme-heo #nav-bar-swipe nav#nav-mobile a[aria-current='page'],
      #theme-heo #nav-bar-swipe nav#nav-mobile a.active,
      #theme-heo #nav-bar-swipe nav#nav-mobile a[aria-current='page'] > div,
      #theme-heo #nav-bar-swipe nav#nav-mobile .cursor-pointer[aria-current='page'],
      #theme-heo #nav-bar-swipe nav#nav-mobile .cursor-pointer.active {
        position: relative;
        border-radius: 999px;
        background: rgba(37, 99, 235, 0.78) !important;
        -webkit-backdrop-filter: saturate(180%) blur(12px);
        backdrop-filter: saturate(180%) blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.35) !important;
        box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.3),
          0 0 26px rgba(37, 99, 235, 0.55),
          0 0 52px rgba(59, 132, 246, 0.25);
        color: #ffffff !important;
        font-weight: 600 !important;
        letter-spacing: 0.02em;
      }

      html.dark #theme-heo nav#nav a[aria-current='page'],
      html.dark #theme-heo nav#nav a.active,
      html.dark #theme-heo nav#nav button[aria-current='page'],
      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile a[aria-current='page'],
      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile a.active,
      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile a[aria-current='page'] > div,
      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile .cursor-pointer[aria-current='page'],
      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile .cursor-pointer.active {
        background: rgba(234, 179, 8, 0.72) !important;
        -webkit-backdrop-filter: saturate(140%) blur(12px);
        backdrop-filter: saturate(140%) blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.15) !important;
        box-shadow: 0 0 0 1px rgba(234, 179, 8, 0.3),
          0 0 26px rgba(234, 179, 8, 0.5),
          0 0 52px rgba(250, 204, 21, 0.2);
        color: #000000 !important;
        font-weight: 600 !important;
      }

      @media (hover: hover) {
        /* 中间菜单项 hover */
        #theme-heo #nav-bar-swipe nav#nav-mobile a:hover,
        #theme-heo #nav-bar-swipe nav#nav-mobile .cursor-pointer:hover,
        /* 右侧图标按钮 hover (针对 SearchButton, DarkModeButton, RandomPostButton 等) */
        #theme-heo nav#nav .flex-shrink-0 .cursor-pointer:hover {
          border-radius: 999px;
          background-color: rgba(37, 99, 235, 0.75) !important;
          -webkit-backdrop-filter: saturate(180%) blur(10px);
          backdrop-filter: saturate(180%) blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4),
            0 0 40px rgba(37, 99, 235, 0.2);
          color: #ffffff !important;
          transform: translateY(-1px);
        }

        /* 右侧图标内部特殊处理 (针对某些被包裹的图标) */
        #theme-heo nav#nav .flex-shrink-0 .cursor-pointer:hover i,
        #theme-heo nav#nav .flex-shrink-0 .cursor-pointer:hover svg {
           color: #ffffff !important;
           fill: #ffffff !important;
           transform: scale(1.05);
           transition: transform 0.2s ease;
        }

        html.dark #theme-heo #nav-bar-swipe nav#nav-mobile a:hover,
        html.dark #theme-heo #nav-bar-swipe nav#nav-mobile .cursor-pointer:hover,
        html.dark #theme-heo nav#nav .flex-shrink-0 .cursor-pointer:hover {
          background-color: rgba(234, 179, 8, 0.75) !important;
          -webkit-backdrop-filter: saturate(140%) blur(10px);
          backdrop-filter: saturate(140%) blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 8px 20px rgba(234, 179, 8, 0.4),
            0 0 40px rgba(234, 179, 8, 0.2);
          color: #000000 !important;
          transform: translateY(-1px);
        }

        html.dark #theme-heo nav#nav .flex-shrink-0 .cursor-pointer:hover i,
        html.dark #theme-heo nav#nav .flex-shrink-0 .cursor-pointer:hover svg {
           color: #000000 !important;
           fill: #000000 !important;
           transform: scale(1.05);
        }
      }

      /* 下拉菜单容器：大圆角胶囊感与玻璃质感优化 */
      #theme-heo #nav-bar-swipe nav#nav-mobile ul {
        border-radius: 28px !important;
        padding: 8px !important;
        border: 1px solid rgba(0, 0, 0, 0.05) !important;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
        background: rgba(255, 255, 255, 0.82) !important;
        -webkit-backdrop-filter: blur(22px) saturate(190%) !important;
        backdrop-filter: blur(22px) saturate(190%) !important;
      }

      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile ul {
        background: rgba(27, 28, 32, 0.78) !important;
        border-color: rgba(255, 255, 255, 0.08) !important;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
        -webkit-backdrop-filter: blur(22px) saturate(160%) !important;
        backdrop-filter: blur(22px) saturate(160%) !important;
      }

      /* 下拉菜单项：同步为大圆角胶囊发光样式 */
      #theme-heo #nav-bar-swipe nav#nav-mobile ul li {
        border-radius: 20px !important;
        margin: 4px 0 !important;
        padding: 6px 16px !important;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      #theme-heo #nav-bar-swipe nav#nav-mobile ul li:hover {
        background: rgba(37, 99, 235, 1) !important;
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3) !important;
        color: #ffffff !important;
      }

      #theme-heo #nav-bar-swipe nav#nav-mobile ul li:hover a span {
        color: #ffffff !important;
      }

      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile ul li:hover {
        background: rgba(234, 179, 8, 1) !important;
        box-shadow: 0 8px 20px rgba(234, 179, 8, 0.4) !important;
        color: #000000 !important;
      }

      html.dark #theme-heo #nav-bar-swipe nav#nav-mobile ul li:hover a span {
        color: #000000 !important;
      }

      #theme-heo nav#nav a:focus-visible,
      #theme-heo nav#nav button:focus-visible,
      #theme-heo #nav-bar-swipe nav#nav-mobile a:focus-visible,
      #theme-heo #nav-bar-swipe nav#nav-mobile .cursor-pointer:focus-visible,
      #theme-heo nav#nav .flex-shrink-0 .cursor-pointer:focus-visible {
        outline: none;
        border-radius: 999px;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.8),
          0 0 20px rgba(59, 130, 246, 0.7);
      }

      #theme-heo #wrapper-outer .article {
        background: var(--heo-surface) !important;
        border: 1px solid var(--heo-border-subtle) !important;
        border-radius: var(--heo-radius-lg) !important;
        box-shadow: var(--heo-shadow-sm);
        color: var(--heo-text);
      }

      #theme-heo #article-wrapper,
      #theme-heo #article-wrapper #notion-article {
        font-size: var(--heo-article-font-size);
        line-height: var(--heo-article-line-height);
        color: var(--heo-text);
        letter-spacing: 0.01em;
      }

      #theme-heo #article-wrapper #notion-article p {
        margin: 0 0 var(--heo-article-paragraph-gap);
      }

      #theme-heo #article-wrapper #notion-article h2 {
        font-size: var(--heo-h2-size);
        line-height: 1.35;
        margin: 2.8rem 0 0.6rem !important;
        letter-spacing: -0.01em;
        font-weight: 600;
      }

      #theme-heo #article-wrapper #notion-article h3 {
        font-size: var(--heo-h3-size);
        line-height: 1.4;
        margin: 2rem 0 0.5rem !important;
        letter-spacing: -0.005em;
        font-weight: 600;
      }

      #theme-heo #article-wrapper #notion-article h4 {
        font-size: var(--heo-h4-size);
        line-height: 1.45;
        margin: 1.5rem 0 0.4rem !important;
      }


      #theme-heo #article-wrapper #notion-article .notion-list {
        margin-block-start: 0.2em !important;
        margin-block-end: 0.8rem !important;
      }

      #theme-heo #article-wrapper #notion-article .notion-list-disc,
      #theme-heo #article-wrapper #notion-article .notion-list-numbered {
        padding-inline-start: 1rem !important;
      }

      #theme-heo #article-wrapper #notion-article .notion-list li {
        margin-bottom: 0.25rem !important;
        padding: 1px 0 !important;
        line-height: var(--heo-article-line-height);
      }

      #theme-heo #article-wrapper #notion-article .notion-list li::marker {
        color: var(--heo-text-tertiary);
        font-size: 0.85em; /* 圆点小一点更精致 */
      }

      /* 链接与下划线优化：去网页化，更像 Apple 设计 */
      #theme-heo #article-wrapper #notion-article .notion-link,
      #theme-heo #article-wrapper #notion-article .notion-inline-underscore {
        text-decoration: none !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        transition: border-color var(--heo-dur-fast) var(--heo-ease);
      }

      html.dark #theme-heo #article-wrapper #notion-article .notion-link,
      html.dark #theme-heo #article-wrapper #notion-article .notion-inline-underscore {
        border-bottom-color: rgba(255, 255, 255, 0.15);
      }

      #theme-heo #article-wrapper #notion-article .notion-link:hover {
        border-bottom-color: currentColor;
      }

      /* 统一普通 ul/ol 的样式，保持一致性 */
      #theme-heo #article-wrapper #notion-article ul,
      #theme-heo #article-wrapper #notion-article ol {
        padding-left: 1rem;
        margin: 0.2rem 0 1rem;
      }

      #theme-heo #article-wrapper #notion-article li {
        margin-bottom: 0.35rem;
      }

      #theme-heo #article-wrapper #notion-article li > p {
        margin: 0 !important;
      }

      #theme-heo #article-wrapper #notion-article li::marker {
        color: var(--heo-text-tertiary);
      }

      #theme-heo #article-wrapper #notion-article blockquote {
        margin: 0 0 var(--heo-article-block-gap);
        padding: 0.6rem 1rem;
        border-left: 3px solid rgba(0, 0, 0, 0.12);
        background: rgba(0, 0, 0, 0.03);
        border-radius: 12px;
        color: var(--heo-text-secondary);
      }

      html.dark #theme-heo #article-wrapper #notion-article blockquote {
        border-left-color: rgba(255, 255, 255, 0.18);
        background: rgba(255, 255, 255, 0.06);
      }

      #theme-heo #article-wrapper #notion-article code {
        font-family: var(--heo-font-mono);
        font-size: 0.92em;
      }


      /* Article Images (B-Plan: Apple-style frame) */
      #theme-heo #article-wrapper #notion-article .notion-asset-wrapper-image {
        margin: 1.5rem auto !important;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02);
        transition: transform var(--heo-dur) var(--heo-ease),
          box-shadow var(--heo-dur) var(--heo-ease);
        max-width: 100% !important;
        min-width: 0 !important;
        width: auto !important;
        display: block;
      }

      #theme-heo #article-wrapper #notion-article .notion-asset-wrapper-image > div {
        width: auto !important;
        max-width: 100% !important;
      }

      #theme-heo #article-wrapper #notion-article .notion-asset-wrapper-image img {
        width: auto !important;
        max-width: 100% !important;
        height: auto !important;
      }

      #theme-heo #article-wrapper #notion-article .notion-asset-wrapper-image img {
        border-radius: 12px !important;
        display: block;
      }

      html.dark #theme-heo #article-wrapper #notion-article .notion-asset-wrapper-image {
        border-color: rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
      }

      /* Image Caption (Apple-style minimal) */
      #theme-heo #article-wrapper #notion-article .notion-asset-caption {
        margin-top: 0.75rem !important;
        padding: 0 1rem;
        font-size: 0.85rem !important;
        line-height: 1.5;
        color: var(--heo-text-tertiary) !important;
        text-align: center !important;
        font-style: normal !important;
      }

      #theme-heo #article-wrapper #notion-article .notion-asset-wrapper-image:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
      }

      html.dark #theme-heo #article-wrapper #notion-article .notion-asset-wrapper-image:hover {
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35), 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      html.dark #theme-heo #wrapper-outer .article {
        background: var(--heo-surface-dark) !important;
        border-color: var(--heo-border-subtle-dark) !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.45);
      }

      @media (hover: hover) {
        #theme-heo #wrapper-outer .article:hover {
          box-shadow: var(--heo-shadow-lg);
          transform: translateY(var(--heo-card-hover-translate));
        }

        html.dark #theme-heo #wrapper-outer .article:hover {
          box-shadow: var(--heo-shadow-lg-dark);
        }
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      /* CategoryBar 容器：磨砂玻璃质感与圆角 */
      #theme-heo #category-bar {
        background: rgba(255, 255, 255, 0.72) !important;
        -webkit-backdrop-filter: saturate(180%) blur(16px);
        backdrop-filter: saturate(180%) blur(16px);
        border: 1px solid rgba(0, 0, 0, 0.06) !important;
        border-radius: 24px !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 10px 26px rgba(0, 0, 0, 0.06);
        transition: all var(--heo-dur) var(--heo-ease);
      }

      html.dark #theme-heo #category-bar {
        background: rgba(27, 28, 32, 0.75) !important;
        -webkit-backdrop-filter: saturate(140%) blur(18px);
        backdrop-filter: saturate(140%) blur(18px);
        border-color: rgba(255, 255, 255, 0.08) !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.45);
      }

      /* 分类项：同步发光胶囊样式 */
      #theme-heo #category-bar .category-bar-item {
        border-radius: 16px !important;
        transition: all 0.25s var(--heo-ease) !important;
        padding: 4px 12px !important;
        margin: 0 4px !important;
      }

      #theme-heo #category-bar .category-bar-item:hover,
      #theme-heo #category-bar .category-bar-item.selected {
        background: rgba(37, 99, 235, 0.82) !important;
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4), 0 0 1px rgba(37, 99, 235, 0.5);
        color: #ffffff !important;
        transform: translateY(-1px);
      }

      html.dark #theme-heo #category-bar .category-bar-item:hover,
      html.dark #theme-heo #category-bar .category-bar-item.selected {
        background: rgba(234, 179, 8, 0.85) !important;
        box-shadow: 0 8px 20px rgba(234, 179, 8, 0.5), 0 0 1px rgba(234, 179, 8, 0.6);
        color: #000000 !important;
        transform: translateY(-1px);
      }

      @media (hover: hover) {
        #theme-heo #category-bar:hover {
          border-color: rgba(37, 99, 235, 0.3) !important;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08), 0 12px 30px rgba(0, 0, 0, 0.08);
        }
        html.dark #theme-heo #category-bar:hover {
          border-color: rgba(234, 179, 8, 0.3) !important;
          box-shadow: 0 0 0 4px rgba(234, 179, 8, 0.08), 0 20px 48px rgba(0, 0, 0, 0.4);
        }
      }

      /* Hero section styles */
      #theme-heo #hero .recent-post-top {
        background: transparent !important;
        border: 1px solid var(--heo-border-subtle) !important;
        box-shadow: none !important;
        transition: all var(--heo-dur) var(--heo-ease);
      }

      html.dark #theme-heo #hero .recent-post-top {
        border-color: var(--heo-border-subtle-dark) !important;
      }

      #theme-heo #hero #banners,
      #theme-heo #hero-right-wrapper #top-group > a > div {
        background: var(--heo-surface) !important;
        border: 1px solid var(--heo-border-subtle) !important;
        box-shadow: var(--heo-shadow-sm);
        transition: all var(--heo-dur) var(--heo-ease);
      }

      #theme-heo #hero-right-wrapper #today-card #card-body {
        border: 1px solid var(--heo-border-subtle) !important;
        box-shadow: var(--heo-shadow-sm);
        transition: all var(--heo-dur) var(--heo-ease);
      }

      html.dark #theme-heo #hero #banners,
      html.dark #theme-heo #hero-right-wrapper #top-group > a > div {
        background: var(--heo-surface-dark) !important;
        border-color: var(--heo-border-subtle-dark) !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.45);
      }

      html.dark #theme-heo #hero-right-wrapper #today-card #card-body {
        border-color: var(--heo-border-subtle-dark) !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.45);
      }

      @media (hover: hover) {
        #theme-heo #hero #banners:hover,
        #theme-heo #hero-right-wrapper #top-group > a > div:hover,
        #theme-heo #hero-right-wrapper #today-card #card-body:hover {
          box-shadow: var(--heo-shadow-lg);
          transform: translateY(var(--heo-card-hover-translate));
        }
        html.dark #theme-heo #hero #banners:hover,
        html.dark #theme-heo #hero-right-wrapper #top-group > a > div:hover,
        html.dark #theme-heo #hero-right-wrapper #today-card #card-body:hover {
          box-shadow: var(--heo-shadow-lg-dark);
        }
      }

      /* InfoCard v2 三段式结构优化 */
      #theme-heo #sideRight .heo-infocard-v2 {
        background: var(--heo-infocard-bg, linear-gradient(135deg, #4f65f0 0%, #a252ff 100%)) !important;
        border: none !important;
        padding: 1.5rem !important;
        min-height: 20rem !important;
        height: auto !important;
        display: flex !important;
        flex-direction: column !important;
        position: relative !important;
        transition: min-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), background 0.5s var(--heo-ease) !important;
        overflow: hidden !important;
      }

      html.dark #theme-heo #sideRight .heo-infocard-v2 {
        background: var(--heo-infocard-bg, linear-gradient(135deg, #f39c12 0%, #e67e22 100%)) !important;
      }

      /* 1. Header 样式 */
      .heo-info-header {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        z-index: 10;
      }

      .heo-info-greetings-pill {
        background: rgba(255, 255, 255, 0.2) !important;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white !important;
        border-radius: 999px !important;
        padding: 4px 16px !important;
        white-space: nowrap !important;
        font-size: 0.875rem;
        width: auto !important;
        height: auto !important;
        transition: all 0.3s var(--heo-ease);
      }

      /* 2. Body 样式 */
      .heo-info-body {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 160px;
      }

      .heo-info-avatar-wrap {
        opacity: 1;
        transform: scale(1);
        transition: all 0.4s var(--heo-ease);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .heo-info-avatar-wrap .rounded-full {
        width: 120px !important;
        height: 120px !important;
        border: 4px solid rgba(255, 255, 255, 0.4);
        box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
        background: white;
      }

      /* 状态图标定位 (仿参考样式) */
      .author-status {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 36px;
        height: 36px;
        background: white;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: transform 0.3s var(--heo-ease);
      }

      .author-status .g-status {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .heo-infocard-v2:hover .author-status {
        transform: scale(1.1) rotate(5deg);
      }

      /* 状态图标定位 */
      .author-status {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 32px;
        height: 32px;
        background: white;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: transform 0.3s var(--heo-ease);
      }

      .heo-infocard-v2:hover .author-status {
        transform: scale(1.1) rotate(5deg);
      }

      .heo-info-announcement-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        opacity: 0;
        transform: translateY(20px);
        pointer-events: none;
        transition: all 0.4s var(--heo-ease);
        display: flex;
        flex-direction: column;
      }

      .heo-infocard-v2:hover .heo-info-avatar-wrap {
        opacity: 0;
        transform: scale(0.8) translateY(-20px);
        position: absolute;
      }

      .heo-infocard-v2:hover .heo-info-announcement-wrap {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
        position: relative;
      }

      .heo-info-welcome-title {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .heo-info-emoji {
        animation: wave 2.5s infinite;
        transform-origin: 70% 70%;
        display: inline-block;
      }

      /* 3. Footer 样式 - 对齐参考图 */
      .heo-info-footer {
        width: 100%;
        margin-top: 1.5rem;
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }

      .heo-info-footer-text {
        display: flex;
        flex-direction: column;
        text-align: left;
      }

      .author-info__name {
        line-height: 1.2;
      }

      .author-info__desc {
        opacity: 0.8;
      }

      /* 按钮专用样式 */
      .heo-info-social-btn, .heo-info-more-btn {
        background: rgba(255, 255, 255, 0.15) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(10px) !important;
        width: 42px !important;
        height: 42px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 50% !important;
        transition: all 0.3s var(--heo-ease) !important;
        cursor: pointer;
        color: white !important;
      }

      .heo-info-social-btn:hover, .heo-info-more-btn:hover {
        background: white !important;
        color: #4f65f0 !important;
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
      }

      /* Sidebar cards: only affect right sidebar (C plan) */
      #theme-heo #sideRight .wow.fadeInUp.border.bg-white,
      #theme-heo #sideRight .wow.fadeInUp.border.bg-white.dark\:bg-\[\#1e1e1e\],
      #theme-heo #sideRight .wow.fadeInUp.border.bg-white.dark\:bg-\[\#1e1e1e\].dark\:text-white,
      #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl,
      #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl.lg\:p-6,
      #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl.p-4 {
        background: var(--heo-surface) !important;
        border: 1px solid var(--heo-border-subtle) !important;
        border-radius: var(--heo-radius-lg) !important;
        box-shadow: var(--heo-shadow-sm);
        -webkit-backdrop-filter: saturate(180%) blur(14px);
        backdrop-filter: saturate(180%) blur(14px);
      }

      html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white,
      html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white.dark\:bg-\[\#1e1e1e\],
      html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white.dark\:bg-\[\#1e1e1e\].dark\:text-white,
      html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl,
      html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl.lg\:p-6,
      html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl.p-4 {
        background: var(--heo-surface-dark) !important;
        border-color: var(--heo-border-subtle-dark) !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.45);
      }

      @media (hover: hover) {
        #theme-heo #sideRight .wow.fadeInUp.border.bg-white:hover,
        #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl:hover {
          box-shadow: var(--heo-shadow-lg);
          transform: translateY(var(--heo-card-hover-translate));
        }

        html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white:hover,
        html.dark #theme-heo #sideRight .wow.fadeInUp.border.bg-white.rounded-xl:hover {
          box-shadow: var(--heo-shadow-lg-dark);
        }
      }

      /* Search page (Apple-style) */
      #theme-heo .heo-search {
        max-width: 56rem;
        margin-left: auto;
        margin-right: auto;
      }

      #theme-heo .heo-search-input input {
        height: 44px;
        line-height: 44px;
        border-radius: 14px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        background: rgba(255, 255, 255, 0.85);
        -webkit-backdrop-filter: saturate(180%) blur(16px);
        backdrop-filter: saturate(180%) blur(16px);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 10px 26px rgba(0, 0, 0, 0.06);
        font-size: 15px;
        color: var(--heo-text);
      }

      #theme-heo .heo-search-input input:focus {
        border-color: rgba(0, 122, 255, 0.55);
        box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.18),
          0 12px 30px rgba(0, 0, 0, 0.08);
      }

      html.dark #theme-heo .heo-search-input input {
        border-color: rgba(255, 255, 255, 0.14);
        background: rgba(27, 28, 32, 0.7);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 18px 44px rgba(0, 0, 0, 0.45);
        color: var(--heo-text);
      }

      #theme-heo .heo-search-card {
        border-radius: var(--heo-radius-lg);
        border: 1px solid var(--heo-border) !important;
        background: rgba(255, 255, 255, 0.75) !important;
        -webkit-backdrop-filter: saturate(180%) blur(14px);
        backdrop-filter: saturate(180%) blur(14px);
        box-shadow: var(--heo-shadow-sm);
      }

      html.dark #theme-heo .heo-search-card {
        border-color: rgba(255, 255, 255, 0.12) !important;
        background: rgba(27, 28, 32, 0.68) !important;
      }

      #theme-heo .heo-search-title {
        font-size: 1.25rem !important;
        line-height: 1.4;
        font-weight: 600;
        letter-spacing: -0.01em;
        margin-bottom: 1rem !important;
        color: var(--heo-text);
      }

      #theme-heo .heo-search-category-list,
      #theme-heo .heo-search-tags-list {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      #theme-heo .heo-search-category-item {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 6px 10px;
        margin: 6px 8px 0 0;
        border-radius: 999px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        background: rgba(0, 0, 0, 0.02);
        color: var(--heo-text-secondary);
      }

      #theme-heo .heo-search-category-item:hover {
        background: rgba(0, 0, 0, 0.05);
        color: var(--heo-text);
      }

      html.dark #theme-heo .heo-search-category-item {
        border-color: rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.05);
        color: var(--heo-text-secondary);
      }

      html.dark #theme-heo .heo-search-category-item:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--heo-text);
      }

      /* Tags mini pills */
      #theme-heo #tags-list a,
      #theme-heo #tags-list .tag-mini,
      #theme-heo .heo-search-tags-list a {
        border-radius: 999px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        background: rgba(0, 0, 0, 0.02);
        color: var(--heo-text-secondary);
      }

      html.dark #theme-heo #tags-list a,
      html.dark #theme-heo #tags-list .tag-mini,
      html.dark #theme-heo .heo-search-tags-list a {
        border-color: rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.05);
        color: var(--heo-text-secondary);
      }

      #theme-heo #tags-list a:hover,
      #theme-heo .heo-search-tags-list a:hover {
        background: rgba(0, 0, 0, 0.05);
        color: var(--heo-text);
      }

      html.dark #theme-heo #tags-list a:hover,
      html.dark #theme-heo .heo-search-tags-list a:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--heo-text);
      }

      /* Footer (Apple-style minimal) */
      #theme-heo footer {
        background: transparent !important;
      }

      #theme-heo footer #color-transition {
        height: 48px;
        background: linear-gradient(to bottom, transparent, #f9fafc) !important;
      }

      html.dark #theme-heo footer #color-transition {
        background: linear-gradient(to bottom, #0f1115, #18171d) !important;
      }

      #theme-heo footer #footer-bottom {
        height: auto !important;
        padding-top: 1.5rem !important;
        padding-bottom: 2rem !important;
        background: rgba(249, 250, 252, 0.8) !important;
        -webkit-backdrop-filter: saturate(180%) blur(16px);
        backdrop-filter: saturate(180%) blur(16px);
        border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
        color: var(--heo-text-tertiary);
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      @media (min-width: 1024px) {
        #theme-heo footer #footer-bottom {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
      }

      #theme-heo footer #footer-bottom-center {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      @media (min-width: 1024px) {
        #theme-heo footer #footer-bottom-center {
          width: auto;
        }
      }

      #theme-heo footer #footer-bottom-center > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 14px;
      }

      #theme-heo footer #footer-bottom-center > div > div {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 20px;
        line-height: 1;
        color: var(--heo-text-secondary);
      }

      #theme-heo footer #footer-bottom-center a {
        color: inherit;
        text-decoration: none !important;
      }

      #theme-heo footer #footer-bottom-center i {
        transform: none !important;
        transition: transform var(--heo-dur) var(--heo-ease),
          color var(--heo-dur-fast) var(--heo-ease),
          opacity var(--heo-dur-fast) var(--heo-ease);
        opacity: 0.9;
      }

      #theme-heo footer #footer-bottom-center a:hover i {
        transform: translateY(-1px) scale(1.08) !important;
        color: var(--heo-text);
        opacity: 1;
      }

      html.dark #theme-heo footer #footer-bottom {
        background: rgba(27, 28, 32, 0.68) !important;
        -webkit-backdrop-filter: saturate(140%) blur(18px);
        backdrop-filter: saturate(140%) blur(18px);
        border-top-color: rgba(255, 255, 255, 0.08) !important;
        box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.06), 0 -14px 36px rgba(0, 0, 0, 0.45);
      }

      #theme-heo footer #footer-bottom a {
        color: var(--heo-text-secondary);
        text-decoration: none !important;
        transition: color var(--heo-dur-fast) var(--heo-ease);
      }

      #theme-heo footer #footer-bottom a:hover {
        color: var(--heo-text);
        text-decoration: underline !important;
      }

      #theme-heo footer #footer-bottom-left,
      #theme-heo footer #footer-bottom-right {
        font-size: 12px;
        line-height: 2;
      }

      #theme-heo footer br {
        display: none;
      }

      #theme-heo footer .social-button-group {
        padding: 2rem 0;
      }

      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }
