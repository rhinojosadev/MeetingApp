export const FormControl = ({ children, ...rest }) => {
    return (
        <form {...rest}>
            <fieldset>
                {children}
            </fieldset>
        </form>
    )

}