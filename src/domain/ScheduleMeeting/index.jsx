import { 
    Button,
    Container,
    FormControl,
    TextField,
    Row,
} from '../../shared/components';

export const ScheduleMeeting = () => { 
    return (
        <>
            <Container>
                <FormControl aria-labelledby="schedule-meeting-form"> 
                    <Row>
                        <legend id="schedule-meeting-form">Schedule </legend>
                    </Row>
                    <Row> 
                        <TextField 
                            type="text"
                            id="date"
                            label="Date"
                            defaultValue="Date"
                            title="please enter the attendance date"
                            size={25}
                        />
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
            </Container>
        </>
    )
 }