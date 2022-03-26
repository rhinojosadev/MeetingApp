export const DateField = ({
    id, 
    label,
    ...rest
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type="date" 
                id={id}
                name={id}
                {...rest} />        
        </>
    )
}