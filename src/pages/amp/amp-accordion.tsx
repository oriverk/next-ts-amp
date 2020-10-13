import css from 'styled-jsx/css'
import Link from 'next/link'
import { AmpLayout } from '../../components/AmpLayout'

export const config = {
  amp: true
}

const style = css`
  amp-accordion {
    text-align: center;
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #424242;
  }
  amp-accordion a {
    color: #50CAF9;
  }
  amp-accordion h2 {
    background-color: #424242;
    color: #EEE;
  }
  amp-accordion p {
    padding: 1rem;
  }
  amp-accordion amp-img{
    margin: 1rem auto;
  }
`

const Component: React.FC = () => {
  const image = require('@public/assets/perth.jpg?resize')
  return (
    <AmpLayout>
      <amp-accordion disable-session-states=''>
        <section>
          <h2>amp-accordion</h2>
          <p>
            <Link href='https://amp.dev/ja/documentation/components/amp-accordion/?format=websites'>
              <a>amp-accordion link is here</a>
            </Link>
          </p>
        </section>
        <section>
          <h2>Section 1</h2>
          <p>Content in section 1.</p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>Content in section 2.</p>
        </section>
        {/* @ts-ignore */}
        <section expanded>
          <h2>Section 3</h2>
          <amp-img src={image.src}
            width={image.width}
            height={image.height}
            ></amp-img>
        </section>
      </amp-accordion>
      <style jsx>{style}</style>
    </AmpLayout>
  )
}

export default Component