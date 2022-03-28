import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";
import { useGetCalendar, getCalendarById } from "../../redux/selectors/calendar";

import { addCalendar, updateCalendar } from '../../redux/actions/calendar';

export const useScheduleMeeting = () => {
    const initForm  = {
        date: { required: true, value: "" },
        name: { required: true, value: "" },
        description: { required: false, value: "" },
        attendees: { required: true, value: "" },
    }

    const [inputs, setInputs] = useState({});
    const [formState, setFormState]= useState(initForm);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const calendar = useGetCalendar();

    const labels = {
        add: {
            title: "Add Schedule",
            submit: "Submit",
            type: 'add',
        },
        edit: {
            title: "Edit Schedule",
            submit: "Update",
            type: 'edit',
        }
    }

    const handleValidation = useCallback( (event) => {
        let name = event.target.name;
        const value = event.target.value;
        const currentForm = formState[name];
  
        if (value.length > 0 ) { 
            setFormState({
                ...formState,
                [name]: { required: currentForm.required, value: value}  
            });
        }

        if (currentForm.required) {
            switch(event.target.type) {
                case "date":
                    if (value.length === 0) {
                        alert(`The field ${name} is required`); 
                        setFormState({
                            ...formState,
                             [name]:{ required: currentForm.required, value: ""}  
                        }); 
                        break;
                    }  else {
                        const allowedMonthNumber = 2 // This is March our current Date
                        const currentMonth = new Date(value.toString()).getMonth();
                        if (allowedMonthNumber !== currentMonth) {
                            alert(`The date should be on March`);
                            setFormState({
                                ...formState,
                                 [name]: { required: currentForm.required, value: ""}   
                            });
                            break;
                        } 
                    }
                    break;
                default:
                    if (value.length === 0) {
                        alert(`The field ${name} is required`);  
                        setFormState({
                            ...formState,
                             [name]: { required: currentForm.required, value: ""}  
                        });
                        break;
                    }  
            }
        }
    }, [formState]);

    const validateForm = useCallback(() => {
        let isValid = true;
        const formValues = Object.values(formState);

        for (let index = 0; index < formValues.length; index ++) {
            if (formValues[index].required && formValues[index].value === "") {
                isValid = false;
                break;
            } 
        }
        return isValid;
    }, [formState])

    const handleSubmit = (event, type) => {
        event.preventDefault();
        switch(type) {
            case labels.add.type: 
                if (validateForm()) {
                    addCalendar(inputs, dispatch);
                    navigate('/dashboard');
                } else {
                    alert("The form is not valid, please fill the required fields");
                }
                break;
            case labels.edit.type:
                if (validateForm()) {
                    updateCalendar(inputs, dispatch);
                    navigate('/dashboard');
                }
                else {
                    alert("The form is not valid, please fill the required fields");
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const getLabels = () => {
        const isEdit = location.pathname.split('/').length === 3;
        return isEdit ? labels.edit : labels.add
    }

    const getCalendarScheduleEdit = () => {
        const id = location.pathname.split('/')[2];
        if (id) {
            const value = getCalendarById(calendar, parseInt(id,10));
            return value;
        } else {
            return null;
        }
    }

    return {
        handleChange,
        handleSubmit,
        handleValidation,
        setInputs,
        setFormState,
        inputs,
        calendar: getCalendarScheduleEdit(),
        labels: getLabels()
    }

}