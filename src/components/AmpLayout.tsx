import { AmpSidebar } from './AmpSidebar'
import { LeftDrawerContent, RightDrawerContent } from './DrawerContent'
import css from 'styled-jsx/css'

type Props = {
  title?: string
  isAmp?: boolean
}

const style = css`
  .swipe-button {
    padding: .5rem;
    border-radius: .5rem;
    border: 0.1rem solid #333;
    font-weight: bold;
    text-align: center;
    background-color: #50CAF9;
    position: fixed;
    bottom: 2rem;
    z-index: 100;
  }
  .swipe-button.left {
    left: 2rem;
  }
  .swipe-button.right {
    right: 2rem;
  }

  main {
    width: 100vw;
    min-height: 100vh;
  }

  .contents {
    color: #EEE;
    width: 100%;
    min-height: 100vh;
    background-color: #333;
  }
`

const Component: React.FC<Props> = props => {
  return (
    <>
      {/* @ts-ignore */}
      <div className='left swipe-button' role='button' on='tap:sidebar-left' tabIndex='1'>left</div>
      <AmpSidebar id='sidebar-left' side='left'>
        <LeftDrawerContent />
      </AmpSidebar>
      {/* @ts-ignore */}
      <div className='right swipe-button' role='button' on='tap:sidebar-right' tabIndex='1'>right</div>
      <AmpSidebar id='sidebar-right' side='right'>
        <RightDrawerContent />
      </AmpSidebar>
      <main>
        <div className='contents'>
          {props.children}
        </div>
      </main>
      <style jsx>{style}</style>
    </>
  )
}

export const AmpLayout = Component