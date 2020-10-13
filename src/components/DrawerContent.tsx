import Link from 'next/link'
import css from 'styled-jsx/css'

const style = css`
  ul {
    padding-left: 1.5rem;
  }
  li {
    list-style: none;
  }

  a{
    color: #50CAF9;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`
export const LeftDrawerContent: React.FC = () => {
  return (
    <>
      <h3>amp-sidebar</h3>
      <nav>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/amp/search-demo'><a>search-algolia-demo</a></Link></li>
          <li><Link href='/amp/search-mine'><a>search-my-algolia</a></Link></li>
          <li><Link href='/amp/amp-accordion'><a>amp-accordion</a></Link></li>
          <li><Link href='/amp/amp-images'><a>amp-imgs</a></Link></li>
          <li><Link href='/amp/amp-sns'><a>amp-sns</a></Link></li>
          <li><Link href='/amp/amp-share'><a>amp-share</a></Link></li>
          <li><Link href='/amp/google-doc'><a>amp-google-document-embed</a></Link></li>
          <li><Link href='/amp/amp-gist'><a>amp-gist</a></Link></li>
        </ul>
      </nav>
      <style jsx>{style}</style>
    </>
  )
}

export const RightDrawerContent: React.FC = () => {
  return (
    <>
      <h3>amp-sidebar</h3>
      <nav>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/amp/search-demo'><a>search-algolia-demo</a></Link></li>
          <li><Link href='/amp/search-mine'><a>search-my-algolia</a></Link></li>
          <li><Link href='/amp/amp-accordion'><a>amp-accordion</a></Link></li>
          <li><Link href='/amp/amp-images'><a>amp-imgs</a></Link></li>
          <li><Link href='/amp/amp-sns'><a>amp-sns</a></Link></li>
          <li><Link href='/amp/amp-share'><a>amp-share</a></Link></li>
          <li><Link href='/amp/google-doc'><a>amp-google-document-embed</a></Link></li>
          <li><Link href='/amp/amp-gist'><a>amp-gist</a></Link></li>
        </ul>
      </nav>
      <style jsx>{style}</style>
    </>
  )
}
