import css from 'styled-jsx/css'
import { AmpLayout } from '../../components/AmpLayout'

export const config = {
  amp: true
}

const style = css`
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #424242;
    color: #EEE;
    text-align: center;
  }
  a {
    color: #50CAF9;
  }
  .title a {
    color: #EEE;
    text-decoration: none;
  }
  .title a:hover{
    text-decoration: underline #50CAF9;
  }
  .desc {
    margin-bottom: 2rem;
  }
`

const Component: React.FC = () => {
  return (
    <AmpLayout>
      <div className='container'>
        <h1 className='title'><a>amp-gist</a></h1>
        <div className='desc'>
          <p>gist 自体へのstyleを当てるには、globalじゃないと聞かなさそう？global も無理だった。</p>
          <a href='https://amp.dev/ja/documentation/components/amp-gist/?format=websites'>
            link of amp-gist is here.
          </a>
        </div>
        <amp-gist
          data-gistid='34a82751aa11ea19d5b74a0a442cfa2f'
          layout='fixed-height'
          height='225'
          >
        </amp-gist>
      </div>
      <style jsx>{style}</style>
    </AmpLayout>
  )
}

export default Component