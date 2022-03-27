import { 
    Button,
    Container,
    FormControl,
    TextField,
    Row,
} from '../../shared/components';

import styles from './index.module.css';

import { useLogin } from './hook';

export const Login = () => {
    const { form, handleSubmit, handleInputChange } = useLogin();

    return(
        <>
            <Container className={styles.login}>
                <FormControl aria-labelledby="signin-form">
                    <legend id="signin-form">The Meeting App</legend>
                    <Row> 
                        <TextField 
                            type="text"
                            name="user"
                            className={styles.login__username}
                            id="user"
                            label=""
                            value={form.user}
                            onChange={handleInputChange}
                            defaultValue="Username"
                            title="please enter your username"
                            size={25}
                        />
                    </Row>
                    <Row>
                        <TextField 
                            type="password"         
                            id="password"
                            className={styles.login__password}
                            label=""
                            value={form.password}
                            onChange={handleInputChange}
                            defaultValue="Password"
                            title="please enter your password"
                            size={25}
                        />
                    </Row>
                    <Button type="submit" onClick={(e) => handleSubmit(e, form)}> Sign in </Button>
                </FormControl>
            </Container>
        </>
    )
}