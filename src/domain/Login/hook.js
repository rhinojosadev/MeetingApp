import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { auth } from '../../services/auth/auth';

export const useLogin = () => {
    let navigate = useNavigate();
    const [ form, setForm ] = useState({
        user: '',
        password: ''
    });

    const handleSubmit = async (event, form) => {
        event.preventDefault();
        const res = await auth(form.user, form.password);
        if (!res.error) {
            navigate(`/dashboard/`);
        } else {
            alert(res.error);
        }
    }

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    return {
        handleSubmit,
        handleInputChange,
        form    
    }

}