import React from 'react';
import {Title} from 'react-admin';
import {BarChart, PolarAreaChart} from "../index";
import {Divider} from "@mui/material";

const PopularComponent = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('http://practice.igliya.ru/api/v1/popular')
            .then(response => response.json())
            .then(r => setData(r));
    }, []);

    return <>
        <Title title="Популярность услуг"/>
        {data && <BarChart title="Популярность услуг" data={data.current_year}/>}
        {data && <Divider sx={{marginTop: 4}}/>}
        {data && <PolarAreaChart title="Популярность услуг по годам" data={data.years}/>}
    </>
};

export default PopularComponent;
