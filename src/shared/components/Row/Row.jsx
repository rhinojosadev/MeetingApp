export const Row = ({ children, mb, ...rest }) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', marginBottom: mb }} {...rest}>
            {children}
        </div>
    )
}