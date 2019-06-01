import React, { Component } from 'react';
import RadarChart from './RadarChart';


class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'features',
        }
    }
    featuresTab = () => {
        return (
            <div>
                <p>Physical</p>
                <p>Planet</p>
                <p>Episodes</p>
            </div>
        )
    }

    interactionsTab = () => {
        return (
            <RadarChart />
        )
    }

    _handleCLick(val) {
        this.setState({
            activeTab: val
        })
    }

    navTab = () => {
        return (
            <div>
                <button onClick={() => this._handleCLick('features')}>Features</button>
                <button onClick={() => this._handleCLick('interactions')}>Interactions</button>
            </div>
        )
    };

    render = () => {
        return (
            <div>
                {this.navTab()}
                {this.state.activeTab === 'interactions' && this.interactionsTab()}
                {this.state.activeTab === 'features' && this.featuresTab()}
            </div>
            
        )
    }
}


export default TabComponent;