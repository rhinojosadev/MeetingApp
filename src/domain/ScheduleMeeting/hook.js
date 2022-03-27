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

    const handleSubmit = (event, type) => {
        event.preventDefault();
        switch(type) {
            case labels.add.type: 
                addCalendar(inputs, dispatch);
                navigate('/dashboard');
                break;
            case labels.edit.type:
                updateCalendar(inputs, dispatch);
                navigate('/dashboard');
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
        setInputs,
        inputs,
        calendar: getCalendarScheduleEdit(),
        labels: getLabels()
    }

}