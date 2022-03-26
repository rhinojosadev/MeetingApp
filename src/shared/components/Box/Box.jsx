export const Box = ({ children, ...rest }) => {
    return (
        <div {...rest}>
            {children}
        </div>
    )
}