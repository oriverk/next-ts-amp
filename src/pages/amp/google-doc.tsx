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

  .title a {
    color: #EEE;
    text-decoration: none;
  }
  .title a:hover {
    text-decoration: underline #50CAF9;
  }

  .desc {
    margin-bottom: 1.5rem;
  }
`

const Component: React.FC = () => {
  return (
    <AmpLayout>
      <div className='container'>
        <h1 className='title'><a>amp-google-document-embed</a></h1>
        <div className='desc'>
          <a href='https://amp.dev/ja/documentation/components/amp-google-document-embed/?format=websites'>
            link of amp-google-document-embed is here.
            </a>
        </div>
        <div>
          <amp-google-document-embed src='https://www.gpo.gov/fdsys/pkg/GPO-CONAN-1992/pdf/GPO-CONAN-1992-6.pdf' width='8.5' height='11' layout='responsive'>
          </amp-google-document-embed>
        </div>
      </div>
      <style jsx>{style}</style>
    </AmpLayout>
  )
}


export default Component