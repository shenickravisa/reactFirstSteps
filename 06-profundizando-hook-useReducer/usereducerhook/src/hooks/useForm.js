import { useState } from "react";

const useForm = (initialState = {}) => {
    const [state, setState] = useState(initialState)

    const resetValue = () => {
        setState(initialState)
    }

    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value,
        });
    }

    return [state, handleInputChange, resetValue]
};

export default useForm;
/**
 * cuando usamos custom hooks siempre hay que mandarle prop para los states
 */