import { useEffect, useState } from "react";

export function useFetch(lat, lon) {
    const [data, setData] = useState(null);
    const appid = "1f0bc6c7dd38c273882c25ded4d38d0a";   // Agregar al archivo .env

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`)
            .then((response) => response.json())
            .then((resp) => setData(resp));
    }, []);

    return { data }
}