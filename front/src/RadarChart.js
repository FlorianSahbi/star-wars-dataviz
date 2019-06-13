
import React, {Component} from 'react';
import { Radar} from 'react-chartjs-2';


const chart1 = {
        labels: ["ALIEN", "DROID", "DARK-SIDE", "NEUTRAL", "LIGHT SIDE", "HUMAIN"],
        datasets:[
                    {
                        label:"",
                        backgroundColor: "#F4DE4C",
                        data:[2.3,1.5, 0.8,2.7,1.8,2.8]
                    }
                        
                 ],
        

};
const chart2 = {
        labels: ["ALIEN", "DROID", "DARK-SIDE", "NEUTRAL", "LIGHT SIDE", "HUMAIN"],
        datasets:[
                    {
                    label: "",
                    backgroundColor: " rgba(206, 16, 44, 0.8)",
                    data:[2,1.1, 1.8,2.2,1,2.3]
                    }
                        
                ]
       
        
   
};
const Button = (props) => (
  <button id="update-chart" onClick={props.handleOnClick}>Update</button>
);

export default class RadarChart extends Component {
    constructor(props){
        super(props);
        
        this.handleUpdate = this.handleUpdate.bind(this);

        this.updated = false;

        this.state ={
            chartData: chart1
            
        }
     
    }
    handleUpdate() {

    const chartData = this.updated ? chart1 : chart2;
    this.setState({chartData}, () => {
      this.updated = this.updated ? false : true;
     
    });
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
                set.backgroundColor = this.setGradiantColor(canvas,colors[i]);
                set.borderWidth = 0;

               });
           }
         return chartData;
    }

    render(){
       
        return( 
            <div className="carre">
                <div className="radar">
                <Button handleOnClick={this.handleUpdate}/>
            
                <Radar
                    options= {{
                        responsive:true,
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
                                    max: 3,
                                    stepSize: 3,
                                   
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
            </div> 
            </div>
            
        )
    }
}