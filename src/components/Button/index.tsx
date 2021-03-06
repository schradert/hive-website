import { StyledLink } from './button.styled';

/**
 * Component for a standard button (has url, theme and text prop)
 */
export default function Button(props: ButtonProps): JSX.Element {
    const url = props.url ?? '/';
    const text = props.text ?? '';
    return <StyledLink to={url}>{text}</StyledLink>;
}
