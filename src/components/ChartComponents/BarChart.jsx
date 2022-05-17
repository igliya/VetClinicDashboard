import * as React from "react";
import {Card, CardContent} from '@mui/material';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const BarChart = ({data, title}) => {
    const [labels, setLabels] = React.useState([]);
    const [values, setValues] = React.useState([]);

    React.useEffect(() => {
        setLabels(data.labels);
        setValues(data.data);
    }, [data, title])

    return <Card>
        <CardContent>
            {labels.length > 0 ? <Bar options={options}
                                      data={{
                                          labels,
                                          datasets: [
                                              {
                                                  label: title,
                                                  data: values,
                                                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                              },
                                          ],
                                      }}/> : <div/>}
        </CardContent>
    </Card>;
}

export default BarChart;
