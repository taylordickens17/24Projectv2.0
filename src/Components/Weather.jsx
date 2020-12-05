import React, { useEffect } from 'react';




function Weather(props) {

const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const api_key = 'a62a2a58f29b9102325f286b0be33763';

const fetchWeather = () => {
    fetch(`${URL}zip=46032,us&appid=${api_key}`, {
        headers: {
            'Accept': 'application/json'
        }}).then(res => res.json())
            .then(weather => {
                console.log(weather);
            })
}


function Weather(props) {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?'
    const key = 'a62a2a58f29b9102325f286b0be33763'

    const fetchWeather = () => {
        fetch(`${URL}zip=94040,us&appid=${key}`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    useEffect(() => {
        fetchWeather();
    }, [])

    return (
        <div>

            <h1>Hi</h1>

            <h1>Oh hi, Mark</h1>

        </div>
    );
}

export default Weather;