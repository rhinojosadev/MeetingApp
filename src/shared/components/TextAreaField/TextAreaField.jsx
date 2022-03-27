export const TextAreaField = ({
    label,
    id,
    rows,
    cols,
    ...rest
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} name={id} rows={rows} cols={cols} {...rest}></textarea>
        </>
    )
}