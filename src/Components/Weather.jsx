import React, { useEffect, useState } from 'react';
import {
    Row, Col, Container, Card,
    CardBody, CardTitle, CardText
} from "reactstrap";

function Weather(props) {
    const [data, setData] = useState({});
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
                setData(data);
            }).catch(e => {
                console.error(e);
            })
    }

    useEffect(() => {
        fetchWeather();
    }, [])

    const farenheit = (data) => {
        console.log(data)
        let kelTemp = data.main.temp;
        let celTemp = kelTemp - 273.15;
        let fTemp = celTemp * (9 / 5) + 32;
        console.log(fTemp);
        return fTemp;
    }

    return (
        <div>
            <h1>
                {farenheit(data)}
            </h1>
        </div>
    );
};
export default Weather;