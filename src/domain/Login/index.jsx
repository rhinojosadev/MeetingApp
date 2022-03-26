import { 
    Button,
    Container,
    FormControl,
    TextField,
    Row,
} from '../../shared/components';

import styles from './index.module.css';

export const Login = () => {
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
                            id="name"
                            label=""
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
                            defaultValue="Password"
                            title="please enter your password"
                            size={25}
                        />
                    </Row>
                    <Row>
                        <Button> Sign in </Button>
                    </Row>
                </FormControl>
            </Container>

        </>
    )
}