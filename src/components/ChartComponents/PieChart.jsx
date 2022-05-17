import React from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {Card, CardContent} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data, title}) => {
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
            <Doughnut options={options}
                      data={{
                          labels: labels,
                          datasets: [
                              {
                                  label: title,
                                  data: values,
                                  backgroundColor: [
                                      'rgba(255, 99, 132, 0.6)',
                                      'rgba(54, 162, 235, 0.6)',
                                      'rgba(255, 206, 86, 0.6)',
                                      'rgba(75, 192, 192, 0.6)',
                                      'rgba(153, 102, 255, 0.6)',
                                      'rgba(255, 159, 64, 0.6)',
                                  ],
                                  borderColor: [
                                      'rgba(255, 99, 132, 1)',
                                      'rgba(54, 162, 235, 1)',
                                      'rgba(255, 206, 86, 1)',
                                      'rgba(75, 192, 192, 1)',
                                      'rgba(153, 102, 255, 1)',
                                      'rgba(255, 159, 64, 1)',
                                  ],
                                  borderWidth: 1,
                              },
                          ],
                      }}/>
        </CardContent>
    </Card>
}

export default PieChart;
