import * as React from "react";
import {Card, CardContent} from '@mui/material';
import {PolarArea} from 'react-chartjs-2';
import {ArcElement, Chart as ChartJS, Legend, Tooltip, RadialLinearScale} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const PolarAreaChart = ({data, title}) => {
    const [labels, setLabels] = React.useState([]);
    const [values, setValues] = React.useState([]);

    React.useEffect(() => {
        setLabels(data.labels);
        setValues(data.data);
    }, [data, title]);

    const options = {
        aspectRatio: 4 / 2,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    return <Card>
        <CardContent>
            {labels.length > 0 ? <PolarArea options={options}
                                            data={{
                                                labels: labels,
                                                datasets: [
                                                    {
                                                        label: title,
                                                        data: values,
                                                        backgroundColor: [
                                                            'rgb(255, 99, 132)',
                                                            'rgb(75, 192, 192)',
                                                            'rgb(255, 205, 86)',
                                                            'rgb(201, 203, 207)',
                                                            'rgb(54, 162, 235)'
                                                        ],
                                                    },
                                                ],
                                            }}/> : <div/>}
        </CardContent>
    </Card>
}

export default PolarAreaChart;
