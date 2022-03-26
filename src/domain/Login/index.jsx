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
                    <Row>
                        <legend id="signin-form">Meeting App Sign In</legend>
                    </Row>
                    <Row> 
                        <TextField 
                            type="text"
                            name="user"
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
                            label=""
                            value={form.password}
                            onChange={handleInputChange}
                            defaultValue="Password"
                            title="please enter your password"
                            size={25}
                        />
                    </Row>
                    <Row>
                        <Button onClick={(e) => handleSubmit(e, form)}> Sign in </Button>
                    </Row>
                </FormControl>
            </Container>
        </>
    )
}