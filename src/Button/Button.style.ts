import styled from 'styled-components'

interface MainOptions {
    isRounded?: boolean
    color?: string
}

const ButtonMain = styled.button<MainOptions>`
    background-color: ${({ theme, color }) => (color ? color : theme.colors.primaryGreen)};
    border: none;
    width: 6rem;
    min-height: 2rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryWhite};
    border-radius: ${props => (props.isRounded ? '3rem' : '1rem')};
`

export { ButtonMain }
