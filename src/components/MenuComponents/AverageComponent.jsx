import React from 'react';
import {Title} from "react-admin";
import {BarChart, PieChart} from "../index";
import {Divider} from "@mui/material";

const AverageComponent = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('http://practice-back.igliya.ru/api/v1/average')
            .then(response => response.json())
            .then(r => setData(r));
    }, []);

    return <>
        <Title title="Средний чек"/>
        {data && <BarChart title="Средний чек по месяцам" data={data.current_year}/>}
        {data && <Divider sx={{marginTop: 4}}/>}
        {data && <PieChart title="Средний чек по годам" data={data.years}/>}
    </>;
};

export default AverageComponent;
