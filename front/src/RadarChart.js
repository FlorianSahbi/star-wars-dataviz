import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

let dataBaby = [0, 0, 0, 0, 0, 0]
const chart1 = {
    labels: ["ALIEN", "DROID", "DARK-SIDE", "NEUTRAL", "LIGHT SIDE", "HUMAIN"],
    datasets: [
        {
            label: "",
            backgroundColor: "#F4DE4C",
            data: dataBaby
        }
    ],
};

const Button = (props) => (
    <a className="episodeBtnUpdate" id="update-chart" onClick={props.handleOnClick}>Update</a>
);

export default class RadarChart extends Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updated = false;
        this.state = {
            chartData: chart1,
            dataChart: this.props.data
        }
    }

    handleUpdate() {
        let newDataBaby = this.props.data;
        let chartData = this.state.chartData
        chartData.datasets[0].data = newDataBaby
        this.setState({ chartData: chartData }, () => {
            this.updated = this.updated ? false : true;
        })
    }

    setGradiantColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradiant = ctx.createLinearGradient(20, 5, 10, 450);
        gradiant.addColorStop(0, color);
        gradiant.addColorStop(0.95, "#F4DE4C");
        return gradiant;
    }

    getChartData = canvas => {
        const chartData = this.state.chartData;
        if (chartData.datasets) {
            let colors = ["rgba(244, 222, 76, 0.2) ", "rgba(206, 16, 44, 0.8)"]
            chartData.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradiantColor(canvas, colors[i]);
                set.borderWidth = 0;
            });
        }
        return chartData;
    }

    render() {
        return (
            <div className="radarContainer">
                <div className="radar">
                    
                    <Radar
                        options={{
                            responsive: true,
                            legend: {
                                fullWidth: false,
                                labels: {
                                    fontColor: 'black',
                                    boxWidth: 0
                                }
                            },
                            scale: {
                                gridLines: {
                                    color: ['#4ADC89'],
                                },
                                angleLines: {
                                    color: '#4ADC89'
                                },
                                pointLabels: {
                                    fontColor: '#F4DE4C'
                                },
                                ticks: {
                                    min: 0,
                                    max: 50,
                                    stepSize: 100,
                                    display: false
                                }
                            },
                            tooltips: {
                                enabled: false
                            }
                        }
                        }
                        data={this.getChartData}
                    />
                <Button handleOnClick={this.handleUpdate} />
                </div>
            </div>

        )
    }
}