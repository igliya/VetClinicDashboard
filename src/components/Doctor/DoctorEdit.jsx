import React from 'react';
import {Title} from 'react-admin';
import {Divider} from '@mui/material';
import {BarChart, PieChart} from "../index";


const DoctorEdit = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const arr = window.location.pathname.split('/')
        const id = arr[arr.length - 1];
        fetch('http://practice.igliya.ru/api/v1/doctors/' + id)
            .then(response => response.json())
            .then(r => setData(r));
    }, [])

    return <>
        <Title title="Информация о враче"/>
        {data && <BarChart title="Средний чек по месяцам" data={data.current_year}/>}
        {data && <Divider sx={{marginTop: 4}}/>}
        {data && <PieChart title="Средний чек по годам" data={data.years}/>}
    </>;
};

export default DoctorEdit;
