import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, onClick, children, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
