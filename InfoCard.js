import { ArrowRightCircle } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import Announcement from './Announcement'
import Card from './Card'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { siteInfo, notice, post } = props
  const { isDarkMode } = useGlobal()
  const router = useRouter()
  // 在文章详情页特殊处理
  const isSlugPage = router.pathname.indexOf('/[prefix]') === 0
  const url1 = siteConfig('HEO_INFO_CARD_URL1', null, CONFIG)
  const icon1 = siteConfig('HEO_INFO_CARD_ICON1', null, CONFIG)
  const url2 = siteConfig('HEO_INFO_CARD_URL2', null, CONFIG)
  const icon2 = siteConfig('HEO_INFO_CARD_ICON2', null, CONFIG)
  const statusIcon = siteConfig('HEO_INFO_CARD_STATUS_ICON', null, CONFIG)

  const fallbackColor = isDarkMode ? '#CA8A04' : '#0060e0'
  const [cardColor, setCardColor] = useState(fallbackColor)

  useEffect(() => {
    let cancelled = false
    async function run() {
      // 仅在文章详情页（Slug页面）且有封面图时才启用动态取色
      // 首页或其他页面强制使用默认色
      if (!isSlugPage || !post?.pageCover) {
        setCardColor(fallbackColor)
        return
      }

      const color = await getDarkDominantColorFromImageUrl(post.pageCover, {
        fallback: fallbackColor,
        darkenRatio: 0.62,
        maxSize: 48
      })

      if (!cancelled) {
        setCardColor(color)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [isSlugPage, post?.pageCover, fallbackColor])

  return (
    <Card
      style={{ '--heo-infocard-bg': cardColor }}
      className='wow fadeInUp text-white flex flex-col w-72 overflow-hidden relative heo-infocard-v2'>
      
      {/* 1. Header 头部区域 - 固定问候语 */}
      <div className='heo-info-header'>
        <GreetingsWords />
      </div>

      {/* 2. Body 身体区域 - 切换头像与公告 */}
      <div className='heo-info-body'>
        {/* 默认显示的头像 */}
        <div className='heo-info-avatar-wrap'>
          <div
            className={`${
              isSlugPage
                ? 'absolute right-0 -mt-8 -mr-6 hover:opacity-0 hover:scale-150'
                : 'cursor-pointer'
            } justify-center items-center flex dark:text-gray-100 transform transition-all duration-200 relative`}>
            <LazyImage
              src={siteInfo?.icon}
              className='rounded-full'
              width={120}
              height={120}
              alt={siteConfig('AUTHOR')}
            />
            {/* 状态图标 */}
            {statusIcon && (
              <div className='author-status'>
                <LazyImage
                  src={statusIcon}
                  width={32}
                  height={32}
                  alt="status"
                />
              </div>
            )}
          </div>
        </div>

        {/* Hover显示的公告内容 */}
        <div className='heo-info-announcement-wrap'>
          {/* <div className='heo-info-welcome-title'>
            <span className='heo-info-emoji'>👋</span>
            <span>欢迎来访!</span>
          </div> */}
          <Announcement post={notice} style={{ color: 'white !important' }} />
        </div>
      </div>

      {/* 3. Footer 底部区域 - 固定作者名与按钮 */}
      <div className='heo-info-footer'>
        <div className='heo-info-footer-text'>
          <div className="author-info__name text-2xl font-bold">{siteConfig('AUTHOR')}</div>
          <div className="author-info__desc text-xs opacity-80 mt-1">{siteConfig('BIO')}</div>
        </div>

        <div className='flex items-center space-x-2'>
          <div className='flex space-x-2'>
            {url1 && (
              <div className='heo-info-social-btn'>
                <SmartLink href={url1}>
                  <i className={icon1} />
                </SmartLink>
              </div>
            )}
            {url2 && (
              <div className='heo-info-social-btn'>
                <SmartLink href={url2}>
                  <i className={icon2} />
                </SmartLink>
              </div>
            )}
          </div>
          {/* <MoreButton /> */}
        </div>
      </div>

    </Card>
  )
}

/**
 * 了解更多按鈕
 * @returns
 */
function MoreButton() {
  const url3 = siteConfig('HEO_INFO_CARD_URL3', null, CONFIG)
  const text3 = siteConfig('HEO_INFO_CARD_TEXT3', null, CONFIG)
  if (!url3) {
    return <></>
  }
  return (
    <SmartLink href={url3}>
      <div className='heo-info-more-btn'>
        <ArrowRightCircle className={'w-6 h-6'} />
        <div className='font-bold hidden'>{text3}</div>
      </div>
    </SmartLink>
  )
}

function clampInt(v, min, max) {
  return Math.max(min, Math.min(max, Math.round(v)))
}

function parseHexColor(hex) {
  const raw = String(hex || '').trim().replace('#', '')
  if (raw.length === 3) {
    const r = parseInt(raw[0] + raw[0], 16)
    const g = parseInt(raw[1] + raw[1], 16)
    const b = parseInt(raw[2] + raw[2], 16)
    if ([r, g, b].some(Number.isNaN)) return null
    return { r, g, b }
  }
  if (raw.length === 6) {
    const r = parseInt(raw.slice(0, 2), 16)
    const g = parseInt(raw.slice(2, 4), 16)
    const b = parseInt(raw.slice(4, 6), 16)
    if ([r, g, b].some(Number.isNaN)) return null
    return { r, g, b }
  }
  return null
}

function rgbToHex({ r, g, b }) {
  const to2 = n => clampInt(n, 0, 255).toString(16).padStart(2, '0')
  return `#${to2(r)}${to2(g)}${to2(b)}`
}

function adjustColor(hex, { darkenRatio = 0, lightenRatio = 0 } = {}) {
  const rgb = parseHexColor(hex)
  if (!rgb) return hex
  if (darkenRatio > 0) {
    return rgbToHex({
      r: rgb.r * (1 - darkenRatio),
      g: rgb.g * (1 - darkenRatio),
      b: rgb.b * (1 - darkenRatio)
    })
  }
  if (lightenRatio > 0) {
    return rgbToHex({
      r: rgb.r + (255 - rgb.r) * lightenRatio,
      g: rgb.g + (255 - rgb.g) * lightenRatio,
      b: rgb.b + (255 - rgb.b) * lightenRatio
    })
  }
  return hex
}

async function getDarkDominantColorFromImageUrl(
  imageUrl,
  { fallback = '#4f65f0', darkenRatio = 0.1, maxSize = 48 } = {}
) {
  try {
    if (!imageUrl || typeof window === 'undefined') return fallback
    const img = new window.Image()
    img.crossOrigin = 'anonymous'
    const loaded = await new Promise((resolve, reject) => {
      img.onload = () => resolve(true)
      img.onerror = reject
      img.src = imageUrl
    })
    if (!loaded) return fallback
    const w = img.naturalWidth || img.width
    const h = img.naturalHeight || img.height
    if (!w || !h) return fallback
    const scale = Math.min(1, maxSize / Math.max(w, h))
    const sw = Math.max(1, Math.floor(w * scale))
    const sh = Math.max(1, Math.floor(h * scale))
    const canvas = document.createElement('canvas')
    canvas.width = sw
    canvas.height = sh
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return fallback
    ctx.drawImage(img, 0, 0, sw, sh)
    const { data } = ctx.getImageData(0, 0, sw, sh)
    let rSum = 0, gSum = 0, bSum = 0, count = 0
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3]
      if (a < 180) continue
      const r = data[i], g = data[i + 1], b = data[i + 2]
      const max = Math.max(r, g, b), min = Math.min(r, g, b)
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
      if (luma > 245 || luma < 10) continue
      if (max - min < 8) continue
      rSum += r; gSum += g; bSum += b; count++
    }
    if (count < 30) {
      rSum = 0; gSum = 0; bSum = 0; count = 0
      for (let i = 0; i < data.length; i += 16) {
        if (data[i + 3] < 120) continue
        rSum += data[i]; gSum += data[i + 1]; bSum += data[i + 2]; count++
      }
    }
    if (!count) return fallback
    const hex = rgbToHex({ r: rSum / count, g: gSum / count, b: bSum / count })
    return adjustColor(hex, { darkenRatio }) || fallback
  } catch (e) {
    return fallback
  }
}

/**
 * 欢迎语
 */
function GreetingsWords() {
  const greetings = siteConfig('HEO_INFOCARD_GREETINGS', null, CONFIG)
  const [greeting, setGreeting] = useState(greetings[0])
  const handleChangeGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    setGreeting(greetings[randomIndex])
  }

  return (
    <div
      onClick={handleChangeGreeting}
      className='heo-info-greetings-pill select-none cursor-pointer'>
      {greeting}
    </div>
  )
}
