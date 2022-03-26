export const Row = ({ children, ...rest }) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}} {...rest}>
            {children}
        </div>
    )
}