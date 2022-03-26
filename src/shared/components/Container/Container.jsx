export const Container = ({ children, ...rest }) => {
    return (
        <div style={{display: 'flex'}} {...rest}>
            {children}
        </div>
    )
}