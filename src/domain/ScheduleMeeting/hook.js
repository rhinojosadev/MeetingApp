import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";
import { useGetCalendar, getCalendarById } from "../../redux/selectors/calendar";

import { addCalendar, updateCalendar } from '../../redux/actions/calendar';

export const useScheduleMeeting = () => {
    const [inputs, setInputs] = useState({});
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

    const initForm  = {
        date: "required",
        name: "required",
        description: "",
        id: "",
        attendees: "required"
    }

    const handleValidation = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const isRequired = initForm[name] === "required" ? true : false;
        if (isRequired) {
            switch(event.target.type) {
                case "date":
                    if (value.length === 0) {
                        alert(`The field ${name} is required`);  
                        break;
                    }  else {
                        const allowedMonthNumber = 2 // This is March our current Date
                        const currentMonth = new Date(value.toString()).getMonth();
                        if (allowedMonthNumber !== currentMonth) {
                            alert(`The date should be on March`);
                            break;
                        } else {
                            initForm[name] = "";
                        }
                    }
                    break;
                default:
                    if (value.length === 0) {
                        alert(`The field ${name} is required`);  
                        break;
                    }  else {
                        initForm[name] = "";
                        break;
                    }
            }
        }
    }

    const validateForm = () => {
        return !(Object.values(initForm).includes("required"));
    }

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
        inputs,
        calendar: getCalendarScheduleEdit(),
        labels: getLabels()
    }

}