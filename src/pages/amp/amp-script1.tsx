import css from 'styled-jsx/css'
import { AmpLayout } from '../../components/AmpLayout'

export const config = {
  amp: true
}

const style = css`
  .container {
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #424242;
    color: #EEE;
    text-align: center;
  }

  a {
    color: #50CAF9;
  }

  h2 a {
    color: #EEE;
    text-decoration: none;
  }
  h2 a:hover {
    text-decoration: underline #50CAF9;
  }
`

const Component: React.FC = () => {
  const hello = '/amp-script/hello.js'
  const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' + hello : 'https://next-ts-amp.oriverk.dev' + hello
  return (
    <AmpLayout>
      <div className='container'>
        <div>
          <h1>amp-script</h1>
          <a href='https://amp.dev/ja/documentation/components/amp-img/?format=websites' target='_blank' rel='noopener noreferrer'>link of amp-script is here</a>
        </div>
        <section>
          <h2><a href='normal-amp-script'>normal amp-script</a></h2>
          <a href='https://github.com/vercel/next.js/tree/79e717a76bd1d0aaac4be7111b8d438380528e74/examples/amp-first' target='_blank' rel='noopener noreferrer'>
            this source code is from next.js/example/amp-first
            </a>
          <div className='script1'>
            <amp-script layout='container' src={host} >
              <button>Hello amp-script!</button>
            </amp-script>
          </div>
          <div>
            <p>embed amp-script</p>
          </div>
        </section>
      </div>
      <style jsx>{style}</style>
    </AmpLayout>
  )
}

export default Component
