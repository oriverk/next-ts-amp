import css from 'styled-jsx/css'
import { AmpLayout } from '../components/AmpLayout'

export const config = {
  amp: true
}

const style = css`
  .home {
    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 
    background-size: cover;
    background-position: center;
    background-image: url('./assets/sunrise.jpg');
  }
  .title {
    color: #EEE;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
`

const Component: React.FC = () => {
  return (
    <AmpLayout>
      <div className='home'>
        <div className='title'>
          <h1>Here is Next.js.ts - AMP Playground.</h1>
          <h2>Play well, Absorb well, Use well.</h2>
        </div>
      </div>
      <style jsx>{style}</style>
    </AmpLayout>
  )
}

export default Component