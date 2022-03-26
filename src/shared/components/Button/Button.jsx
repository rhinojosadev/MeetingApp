export const Button = ({ children, type, ...rest }) => {
    return (
        <button type={type} {...rest}>
            {children}
        </button>
    )
}