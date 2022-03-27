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
import { useScheduleMeeting } from './hook';

export const ScheduleMeeting = () => { 
    const { handleSubmit, handleChange, inputs } = useScheduleMeeting();

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
                            <DateField  
                                    id="date" 
                                    onChange={handleChange}
                                    value={inputs.date || ""} 
                                    label="Date" />
                        </Row>
                        <Row> 
                            <TextField 
                                type="text"
                                id="name"
                                label="Name"
                                value={inputs.name || ""} 
                                onChange={handleChange}
                                title="please enter your name"
                                size={25}
                            />
                        </Row>
                        <Row> 
                            <TextAreaField 
                                id="description"
                                label="Description"
                                value={inputs.description || ""} 
                                onChange={handleChange}
                                rows={10}
                                cols={50}
                            />
                        </Row>
                        <Row> 
                            <TextField 
                                type="text"
                                id="attendees"
                                label="Attendees"
                                value={inputs.attendees || ""} 
                                onChange={handleChange}
                                title="please enter the attendes"
                            />
                        </Row>
                        <Row>
                            <Button type="submit" onClick={handleSubmit}> Submit </Button>
                        </Row>
                    </FormControl>
                </Row>
            </Container>
        </Home>
    </>
    )
 }