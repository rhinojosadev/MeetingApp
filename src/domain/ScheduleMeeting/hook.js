import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";


import { addCalendar } from '../../redux/actions/calendar';

export const useScheduleMeeting = () => {

    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        addCalendar(inputs, dispatch);
        navigate('/dashboard');
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return {
        handleChange,
        handleSubmit,
        inputs
    }

}