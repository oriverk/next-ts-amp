import css from 'styled-jsx/css'

type Props = {
  id: string,
  className?: string,
  side: 'left' | 'right'
}

const style = css`
  amp-sidebar {
    background-color: #333;
    color: #EEE;
    padding: 1rem;
  }
`

const Component: React.FC<Props> = props => {
  return (
    <>
      <amp-sidebar id={props.id} className={props.className} side={props.side} layout='nodisplay'>
        {props.children}
      </amp-sidebar>
      <style jsx>{style}</style>
    </>
  )
}

export const AmpSidebar = Component