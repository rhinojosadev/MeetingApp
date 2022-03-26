export const TextAreaField = ({
    label,
    id,
    rows,
    cols
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} name={id} rows={rows} cols={cols}></textarea>
        </>
    )
}