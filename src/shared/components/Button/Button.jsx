export const Button = ({ children, ...rest }) => {
    return (
        <button type="button" {...rest}>
            {children}
        </button>
    )
}