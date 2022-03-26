import { 
    Button,
    Container,
    DateField,
    FormControl,
    TextAreaField,
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
                            <TextAreaField 
                                id="description"
                                label="Description"
                                rows={10}
                                cols={50}
                            />
                        </Row>
                        <Row> 
                            <TextField 
                                type="text"
                                id="attendees"
                                label="Attendees"
                                title="please enter the attendes"
                            />
                        </Row>
                        <Row>
                            <Button type="submit"> Submit </Button>
                        </Row>
                    </FormControl>
                </Row>
            </Container>
        </Home>
    </>
    )
 }