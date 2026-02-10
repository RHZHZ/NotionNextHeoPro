import { HashTag } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import WordCount from '@/components/WordCount'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'
import WavesArea from './WavesArea'

/**
 * 文章页头
 * @param {*} param0
 * @returns
 */
export default function PostHeader({ post, siteInfo, isDarkMode }) {
  if (!post) {
    return <></>
  }
  // 文章头图
  const headerImage = post?.pageCover ? post.pageCover : siteInfo?.pageCover
  const ANALYTICS_BUSUANZI_ENABLE = siteConfig('ANALYTICS_BUSUANZI_ENABLE')

  const fallbackBgColor = useMemo(() => {
    return isDarkMode ? '#CA8A04' : '#0060e0'
  }, [isDarkMode])

  const [headerBgColor, setHeaderBgColor] = useState(fallbackBgColor)

  useEffect(() => {
    let cancelled = false

    async function run() {
      if (!headerImage) {
        setHeaderBgColor(fallbackBgColor)
        return
      }

      const color = await getDarkDominantColorFromImageUrl(headerImage, {
        fallback: fallbackBgColor,
        darkenRatio: 0.62,
        maxSize: 48
      })

      if (!cancelled) {
        setHeaderBgColor(color)
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [headerImage, fallbackBgColor])

  const coverShadowColor = useMemo(() => {
    return adjustColor(headerBgColor, { lightenRatio: 0.12 })
  }, [headerBgColor])

  return (
    <div
      id='post-bg'
      className='md:mb-0 -mb-5 w-full h-[30rem] relative md:flex-shrink-0 overflow-hidden bg-cover bg-center bg-no-repeat z-10'>
      <style jsx>{`
        .coverdiv:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: 110px -130px 500px 100px ${coverShadowColor} inset;
        }
      `}</style>

      <div
        style={{ backgroundColor: headerBgColor }}
        className='absolute top-0 w-full h-full py-10 flex justify-center items-center'>
        {/* 文章背景图 */}
        <div
          id='post-cover-wrapper'
          style={{
            filter: 'blur(15px)'
          }}
          className='coverdiv lg:opacity-50 lg:translate-x-96 lg:rotate-12'>
          <LazyImage
            id='post-cover'
            className='w-full h-full object-cover max-h-[50rem] min-w-[50vw] min-h-[20rem]'
            src={headerImage}
          />
        </div>

        {/* 文章文字描述 */}
        <div
          id='post-info'
          className='absolute top-48 z-10 flex flex-col space-y-4 lg:-mt-12 w-full max-w-[86rem] px-5'>
          {/* 分类+标签 */}
          <div className='flex justify-center md:justify-start items-center gap-4'>
            {post.category && (
              <>
                <SmartLink
                  href={`/category/${post.category}`}
                  className='mr-4'
                  passHref
                  legacyBehavior>
                  <div className='cursor-pointer font-sm font-bold px-3 py-1 rounded-lg  hover:bg-white text-white bg-blue-500 dark:bg-yellow-500 hover:text-blue-500 duration-200 '>
                    {post.category}
                  </div>
                </SmartLink>
              </>
            )}

            {post.tagItems && (
              <div className='hidden md:flex justify-center flex-nowrap overflow-x-auto'>
                {post.tagItems.map((tag, index) => (
                  <SmartLink
                    key={index}
                    href={`/tag/${encodeURIComponent(tag.name)}`}
                    passHref
                    className={
                      'cursor-pointer inline-block text-gray-50 hover:text-white duration-200 py-0.5 px-1 whitespace-nowrap '
                    }>
                    <div className='font-light flex items-center'>
                      <HashTag className='text-gray-200 stroke-2 mr-0.5 w-3 h-3' />{' '}
                      {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
                    </div>
                  </SmartLink>
                ))}
              </div>
            )}
          </div>

          {/* 文章Title */}
          <div className='max-w-5xl font-bold text-3xl lg:text-5xl md:leading-snug shadow-text-md flex  justify-center md:justify-start text-white'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {post.title}
          </div>

          {/* 标题底部补充信息 */}
          <section className='flex-wrap dark:text-gray-200 text-opacity-70 shadow-text-md flex text-sm  justify-center md:justify-start mt-4 text-white font-light leading-8'>
            <div className='flex justify-center '>
              <div className='mr-2'>
                <WordCount
                  wordCount={post.wordCount}
                  readTime={post.readTime}
                />
              </div>
              {post?.type !== 'Page' && (
                <>
                  <SmartLink
                    href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
                    passHref
                    className='pl-1 mr-2 cursor-pointer hover:underline'>
                    <i className='fa-regular fa-calendar'></i>{' '}
                    {post?.publishDay}
                  </SmartLink>
                </>
              )}

              <div className='pl-1 mr-2'>
                <i className='fa-regular fa-calendar-check'></i>{' '}
                {post.lastEditedDay}
              </div>
            </div>

            {/* 阅读统计 */}
            {ANALYTICS_BUSUANZI_ENABLE && (
              <div className='busuanzi_container_page_pv font-light mr-2'>
                <i className='fa-solid fa-fire-flame-curved'></i>{' '}
                <span className='mr-2 busuanzi_value_page_pv' />
              </div>
            )}
          </section>
        </div>

        <WavesArea />
      </div>
    </div>
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
  { fallback = '#0060e0', darkenRatio = 0.62, maxSize = 48 } = {}
) {
  try {
    if (!imageUrl || typeof window === 'undefined') {
      return fallback
    }

    const img = new window.Image()

    // 允许跨域图片取像素（前提：图片资源响应带了 CORS header）
    img.crossOrigin = 'anonymous'

    const src = imageUrl

    const loaded = await new Promise((resolve, reject) => {
      img.onload = () => resolve(true)
      img.onerror = reject
      img.src = src
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

    let rSum = 0
    let gSum = 0
    let bSum = 0
    let count = 0

    // 采样：跳过过于透明、过于接近白/黑的像素，让结果更稳定
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3]
      if (a < 180) continue

      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]

      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b

      // 跳过极端：接近纯白 / 纯黑 / 低饱和的大片灰
      if (luma > 245 || luma < 10) continue
      if (max - min < 8) continue

      rSum += r
      gSum += g
      bSum += b
      count++
    }

    if (count < 30) {
      // 如果过滤太多导致样本不足，就退回不过滤的平均色
      rSum = 0
      gSum = 0
      bSum = 0
      count = 0
      for (let i = 0; i < data.length; i += 16) {
        const a = data[i + 3]
        if (a < 120) continue
        rSum += data[i]
        gSum += data[i + 1]
        bSum += data[i + 2]
        count++
      }
    }

    if (!count) return fallback

    const avg = {
      r: rSum / count,
      g: gSum / count,
      b: bSum / count
    }

    const hex = rgbToHex(avg)
    const darkHex = adjustColor(hex, { darkenRatio })

    return darkHex || fallback
  } catch (e) {
    return fallback
  }
}
