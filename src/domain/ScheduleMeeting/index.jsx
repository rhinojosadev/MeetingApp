import { useEffect } from 'react';

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
import styles from './index.module.css';

export const ScheduleMeeting = () => { 
    const { handleSubmit, 
            handleChange, 
            handleValidation,
            setInputs,
            inputs,
            calendar,
            labels } = useScheduleMeeting();

    useEffect(() => {
        if(calendar) {
            setInputs({
                "date": calendar.date,
                "name": calendar.name,
                "description": calendar.description,
                "id": calendar.id,
                "attendees": calendar.attendees
            });
        };
    }, [calendar, setInputs]);

    return (
    <>
        <Home>
            <Container className={styles.schedule}>   
                <Row>
                    <FormControl aria-labelledby="schedule-meeting-form"> 
                        <legend id="schedule-meeting-form"> {labels.title} </legend>
                        <Row mb={10}> 
                            <DateField  
                                    id="date" 
                                    required
                                    className={styles.schedule__date}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                    value={inputs.date || ""} 
                                    label="Date" />
                        </Row>
                        <Row mb={10}> 
                            <TextField 
                                id="name"
                                type="text"
                                required
                                label="Name"
                                value={inputs.name || ""} 
                                onChange={handleChange}
                                onBlur={handleValidation}
                                title="please enter your name"
                                size={25}
                            />
                        </Row>
                        <Row mb={10}> 
                            <TextAreaField 
                                id="description"
                                label="Description"
                                value={inputs.description || ""} 
                                onChange={handleChange}
                                rows={10}
                                cols={50}
                            />
                        </Row>
                        <Row mb={10}> 
                            <TextField 
                                type="text"
                                id="attendees"
                                label="Attendees"
                                value={inputs.attendees || ""} 
                                onChange={handleChange}
                                onBlur={handleValidation}
                                title="please enter the attendes"
                            />
                        </Row>
                        <Row mb={10}>
                            <Button type="submit" onClick={(e) => handleSubmit(e, labels.type)}> {labels.submit} </Button>
                        </Row>
                    </FormControl>
                </Row>
            </Container>
        </Home>
    </>
    )
 }