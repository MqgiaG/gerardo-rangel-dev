import { useEffect } from 'react'
import './Loader.css'

function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 3100)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__wall-noise" />

      <div className="loader__paint-zone">
        <div className="loader__stroke loader__stroke--one">
          <span className="loader__stroke-edge" />
        </div>

        <div className="loader__stroke loader__stroke--two">
          <span className="loader__stroke-edge" />
        </div>

        <div className="loader__stroke loader__stroke--three">
          <span className="loader__stroke-edge" />
        </div>

        <div className="loader__stroke loader__stroke--four">
          <span className="loader__stroke-edge" />
        </div>

        <div className="loader__stroke loader__stroke--five">
          <span className="loader__stroke-edge" />
        </div>
      </div>

      <div className="loader__can-wrap">
        <div className="loader__mist" />

        <img
          className="loader__can"
          src="/images/loader/mqgia-spray.png"
          alt=""
          draggable="false"
        />
      </div>

      <span className="loader__splat loader__splat--one" />
      <span className="loader__splat loader__splat--two" />
      <span className="loader__splat loader__splat--three" />
      <span className="loader__splat loader__splat--four" />
      <span className="loader__splat loader__splat--five" />
      <span className="loader__splat loader__splat--six" />

      <div className="loader__tag">
        <span className="loader__tag-text">
          <span className="loader__tag-first">M</span>
          <span className="loader__tag-main">qgi</span>
          <span className="loader__tag-end">a</span>
          <span className="loader__tag-dot">.</span>
        </span>

        <span className="loader__tag-underline" />

        <span className="loader__drip loader__drip--one" />
        <span className="loader__drip loader__drip--two" />
        <span className="loader__drip loader__drip--three" />
      </div>

      <span className="loader__star loader__star--one">✦</span>
      <span className="loader__star loader__star--two">+</span>
      <span className="loader__star loader__star--three">✦</span>
    </div>
  )
}

export default Loader