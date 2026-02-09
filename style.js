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
        background-color: #f5f5f7;
      }

      html.dark body {
        background-color: #0f1115;
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

      #theme-heo #wrapper-outer .article {
        background: var(--heo-surface) !important;
        border: 1px solid var(--heo-border) !important;
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
        margin: 2.2rem 0 0.85rem;
        letter-spacing: -0.01em;
      }

      #theme-heo #article-wrapper #notion-article h3 {
        font-size: var(--heo-h3-size);
        line-height: 1.4;
        margin: 1.8rem 0 0.75rem;
        letter-spacing: -0.005em;
      }

      #theme-heo #article-wrapper #notion-article h4 {
        font-size: var(--heo-h4-size);
        line-height: 1.45;
        margin: 1.4rem 0 0.6rem;
      }

      #theme-heo #article-wrapper #notion-article ul,
      #theme-heo #article-wrapper #notion-article ol {
        padding-left: 1.25rem;
        margin: 0 0 0.85rem;
      }

      #theme-heo #article-wrapper #notion-article li {
        margin: 0.2em 0;
      }

      #theme-heo #article-wrapper #notion-article li > p {
        margin-bottom: 0.35em;
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

      /* Code blocks (Mac window style) */
      #theme-heo #article-wrapper #notion-article .code-toolbar {
        position: relative;
        width: 100%;
        margin: 0 0 var(--heo-article-block-gap);
        border-radius: 14px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: rgba(27, 28, 32, 0.94);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 18px 44px rgba(0, 0, 0, 0.18);
        overflow: hidden;
      }

      html.dark #theme-heo #article-wrapper #notion-article .code-toolbar {
        border-color: rgba(255, 255, 255, 0.12);
        background: rgba(27, 28, 32, 0.72);
        -webkit-backdrop-filter: saturate(140%) blur(12px);
        backdrop-filter: saturate(140%) blur(12px);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 18px 44px rgba(0, 0, 0, 0.45);
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar > .toolbar {
        position: absolute;
        top: 0;
        right: 0;
        height: 34px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 10px;
        z-index: 12;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .toolbar-item > button {
        font-family: var(--heo-font-sans);
        font-size: 12px;
        line-height: 1;
        padding: 6px 8px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.82);
      }

      html.dark #theme-heo #article-wrapper #notion-article .code-toolbar .toolbar-item > button {
        border-color: rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.06);
        color: var(--heo-text-secondary);
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .pre-mac {
        position: absolute;
        left: 12px;
        top: 11px;
        z-index: 13;
        display: flex;
        gap: 7px;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .pre-mac > span {
        width: 10px;
        height: 10px;
        border-radius: 999px;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .pre-mac > span:nth-child(1) {
        background: #ff5f57;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .pre-mac > span:nth-child(2) {
        background: #febc2e;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .pre-mac > span:nth-child(3) {
        background: #28c840;
      }

      #theme-heo #article-wrapper #notion-article pre,
      #theme-heo #article-wrapper #notion-article pre.notion-code {
        font-family: var(--heo-font-mono);
        font-size: 0.92em;
        line-height: 1.6;
        margin: 0;
        padding: 46px 1.1rem 1rem;
        border-radius: 0;
        border: none;
        background: transparent;
        color: rgba(255, 255, 255, 0.9);
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      /* Prism tokens on dark code background */
      #theme-heo #article-wrapper #notion-article .code-toolbar code[class*='language-'],
      #theme-heo #article-wrapper #notion-article .code-toolbar pre[class*='language-'] {
        color: rgba(255, 255, 255, 0.9);
        text-shadow: none;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.comment,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.prolog,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.doctype,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.cdata {
        color: rgba(235, 235, 245, 0.46);
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.punctuation {
        color: rgba(235, 235, 245, 0.6);
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.property,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.tag,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.boolean,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.number,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.constant,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.symbol,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.deleted {
        color: #7ee787;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.selector,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.attr-name,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.string,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.char,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.builtin,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.inserted {
        color: #a5d6ff;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.operator,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.entity,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.url,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.variable {
        color: rgba(235, 235, 245, 0.75);
        background: none;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.atrule,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.attr-value,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.keyword {
        color: #ff7ab2;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.function,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.class-name {
        color: #ffd479;
      }

      #theme-heo #article-wrapper #notion-article .code-toolbar .token.regex,
      #theme-heo #article-wrapper #notion-article .code-toolbar .token.important {
        color: #ffb86b;
      }

      /* Collapse (S1 minimal bar) */
      #theme-heo #article-wrapper #notion-article .collapse-wrapper {
        margin: 0 0 var(--heo-article-block-gap);
      }

      #theme-heo #article-wrapper #notion-article .collapse-panel-wrapper {
        border-radius: 14px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        background: rgba(255, 255, 255, 0.55);
        -webkit-backdrop-filter: saturate(160%) blur(10px);
        backdrop-filter: saturate(160%) blur(10px);
        overflow: hidden;
      }

      html.dark #theme-heo #article-wrapper #notion-article .collapse-panel-wrapper {
        border-color: rgba(255, 255, 255, 0.12);
        background: rgba(27, 28, 32, 0.6);
      }

      #theme-heo #article-wrapper #notion-article .collapse-header {
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        cursor: pointer;
        user-select: none;
        border: none;
        background: transparent;
        color: var(--heo-text-secondary);
      }

      #theme-heo #article-wrapper #notion-article .collapse-label {
        font-family: var(--heo-font-sans);
        font-size: 13px;
        letter-spacing: 0.02em;
      }

      #theme-heo #article-wrapper #notion-article .collapse-chevron {
        width: 18px;
        height: 18px;
        transition: transform var(--heo-dur) var(--heo-ease), opacity var(--heo-dur-fast) var(--heo-ease);
        opacity: 0.85;
      }

      #theme-heo #article-wrapper #notion-article .collapse-panel-wrapper.is-expanded .collapse-chevron {
        transform: rotate(180deg);
      }

      #theme-heo #article-wrapper #notion-article .collapse-panel {
        max-height: 0;
        overflow: hidden;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
        transition: max-height 320ms var(--heo-ease);
      }

      html.dark #theme-heo #article-wrapper #notion-article .collapse-panel {
        border-top-color: rgba(255, 255, 255, 0.08);
      }

      #theme-heo #article-wrapper #notion-article .collapse-panel.is-expanded {
        max-height: 2400px;
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
        border-color: rgba(255, 255, 255, 0.08) !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.45);
      }

      @media (hover: hover) {
        #theme-heo #wrapper-outer .article:hover {
          box-shadow: var(--heo-shadow-md);
          transform: translateY(-1px);
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
        background: linear-gradient(to bottom, #f5f5f7, transparent) !important;
      }

      html.dark #theme-heo footer #color-transition {
        background: linear-gradient(to bottom, #0f1115, #18171d) !important;
      }

      #theme-heo footer #footer-bottom {
        height: auto !important;
        padding-top: 1.5rem !important;
        padding-bottom: 2rem !important;
        background: transparent !important;
        border-top: 1px solid rgba(0, 0, 0, 0.08) !important;
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
        border-top-color: rgba(255, 255, 255, 0.08) !important;
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
