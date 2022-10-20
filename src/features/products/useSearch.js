import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearch = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue('');
        navigate(`/shop/products/all/?search=${value}`);
    };

    return [value, handleSubmit, handleChange];
};
