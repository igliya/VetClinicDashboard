import React from 'react';
import {Title} from "react-admin";
import {BarChart} from "../index";

const ReturnComponent = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('http://practice-back.igliya.ru/api/v1/returns')
            .then(response => response.json())
            .then(r => setData(r));
    }, []);

    return <>
        <Title title="Возвращаемость к врачу"/>
        {data && <BarChart title="Возвращаемость к врачу" data={data.returns}/>}
    </>
};

export default ReturnComponent;
