import { 
    Button,
    Container,
    DateField,
    FormControl,
    TextField,
    Row,
} from '../../shared/components';
import { Home } from '../../layouts/index';

export const ScheduleMeeting = () => { 
    return (
    <>
        <Home>
            <Container>
                <Row>
                    <h1>Schedule Meeting</h1>   
                </Row> 
                <Row>
                    <FormControl aria-labelledby="schedule-meeting-form"> 
                        <Row>
                            <legend id="schedule-meeting-form">Schedule </legend>
                        </Row>
                        <Row> 
                            <DateField  id="date" label="Date" />
                        </Row>
                        <Row> 
                            <TextField 
                                type="text"
                                id="name"
                                label="Name"
                                defaultValue="Name"
                                title="please enter your name"
                                size={25}
                            />
                        </Row>
                        <Row> 
                            <TextField 
                                type="text"
                                id="description"
                                label="Description"
                                defaultValue="Description"
                                title="please enter the description"
                                size={50}
                            />
                        </Row>
                        <Row>
                            <Button> Submit </Button>
                        </Row>
                    </FormControl>
                </Row>
            </Container>
        </Home>
    </>
    )
 }