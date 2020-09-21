
import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {
    //esta referencia muestra si esta o no montado el componente
    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            //una vez que se desmonte no disparara nuevamente la renderizacion del componente es util cuando se queda un proceso abierto cuando 
            //se desmonta
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setState({
            ...state,
            loading: true
        })
        fetch(url).then(res => res.json()).then(data => {
            if (isMounted.current) {
                //si esta montado has esto
                setState({
                    loading: false,
                    error: null,
                    data
                })
            }
        })
        // eslint-disable-next-line
    }, [url])
    //cada que cambie la url ejecuta esta funcion
    return state
};

export default useFetch;