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
            setFormState,
            inputs,
            calendar,
            labels } = useScheduleMeeting();

    useEffect(() => {
        if(calendar) {
            setInputs({
                date: calendar.date,
                name: calendar.name,
                description: calendar.description,
                id: calendar.id,
                attendees: calendar.attendees
            });
            setFormState({
                date: { required: true, value: calendar.date },
                name: { required: true, value: calendar.name },
                description: { required: false, value: calendar.description },
                attendees: { required: true, value: calendar.attendees },
            })
        };
    }, [calendar, setInputs, setFormState]);

    return (
    <>
        <Home>
            <Container className={styles.schedule}>   
                <Row>
                    <FormControl aria-labelledby="schedule-meeting-form"> 
                        <legend id="schedule-meeting-form"> {labels.title} </legend>
                        <Row mb={10}> 
                            <DateField  
                                    tabIndex={0}
                                    id="date" 
                                    required
                                    className={styles.schedule__date}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                    value={inputs.date || ""} 
                                    disabled={ calendar ? true : false}
                                    aria-describedby="date"
                                    label="Date" />
                        </Row>
                        <Row mb={10}> 
                            <TextField 
                                tabIndex={0}
                                id="name"
                                type="text"
                                required
                                label="Name"
                                value={inputs.name || ""} 
                                onChange={handleChange}
                                onBlur={handleValidation}
                                aria-describedby="name"
                                size={25}
                            />
                        </Row>
                        <Row mb={10}> 
                            <TextAreaField 
                                tabIndex={0}
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
                                tabIndex={0}
                                type="text"
                                id="attendees"
                                label="Attendees"
                                value={inputs.attendees || ""} 
                                onChange={handleChange}
                                onBlur={handleValidation}
                                aria-describedby="attendees"
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