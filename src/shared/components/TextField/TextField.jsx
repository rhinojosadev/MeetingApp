export const TextField = ({
    id, 
    label,
    defaultValue,
    type,
    ...rest
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} 
                   id={id}  
                   name={id} 
                   placeholder={defaultValue} 
                   {...rest} />
        </>
    )
}