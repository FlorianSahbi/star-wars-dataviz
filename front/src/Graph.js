import React, { Component } from 'react';
import './Graph.css';
import TabCard from './TabCard';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import data1 from './json/ep1';
import data2 from './json/ep2';
import data3 from './json/ep3';
import data4 from './json/ep4';
import data5 from './json/ep5';
import data6 from './json/ep6';
import data7 from './json/ep7';

const blo = {
  nodes: [
    {
      id: 2,
      name: "C-3PO",
    },
    {
      id: 3,
      name: "R2-D2",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
    },
    {
      id: 20,
      name: "Yoda",
    },
    {
      id: 21,
      name: "Palpatine",
    },
    {
      id: 32,
      name: "Qui-Gon Jinn",
    },
    {
      id: 33,
      name: "Nute Gunray",
    },
    {
      id: 34,
      name: "Finis Valorum",
    },
    {
      id: 36,
      name: "Jar Jar Binks",
    },
    {
      id: 37,
      name: "Roos Tarpals",
    },
    {
      id: 38,
      name: "Rugor Nass",
    },
    {
      id: 39,
      name: "Ric Olié",
    },
    {
      id: 40,
      name: "Watto",
    },
    {
      id: 41,
      name: "Sebulba",
    },
    {
      id: 42,
      name: "Quarsh Panaka",
    },
    {
      id: 43,
      name: "Shmi Skywalker",
    },
    {
      id: 44,
      name: "Darth Maul",
    },
    {
      id: 46,
      name: "Ayla Secura",
    },
    {
      id: 48,
      name: "Dud Bolt",
    },
    {
      id: 49,
      name: "Gasgano",
    },
    {
      id: 50,
      name: "Ben Quadinaros",
    },
    {
      id: 51,
      name: "Mace Windu",
    },
    {
      id: 52,
      name: "Ki-Adi-Mundi",
    },
    {
      id: 53,
      name: "Kit Fisto",
    },
    {
      id: 54,
      name: "Eeth Koth",
    },
    {
      id: 55,
      name: "Adi Gallia",
    },
    {
      id: 56,
      name: "Saesee Tiin",
    },
    {
      id: 57,
      name: "Yarael Poof",
    },
    {
      id: 58,
      name: "Plo Koon",
    },
    {
      id: 59,
      name: "Mas Amedda",
    },
    {
      id: 47,
      name: "Ratts Tyerell",
    },
    {
      id: 35,
      name: "Padmé Amidala",
    },
    {
      id: 99924,
      name: "Tc-14",
    },
    {
      id: 99925,
      name: "Dofine",
    },
    {
      id: 99927,
      name: "Tey how",
    },
    {
      id: 99923,
      name: "Pk-4",
    },
    {
      id: 99926,
      name: "Rune",
    },
    {
      id: 99928,
      name: "Sio bibble",
    },
    {
      id: 99929,
      name: "Jira",
    },
    {
      id: 99930,
      name: "Kitster",
    },
    {
      id: 99931,
      name: "Wald",
    },
    {
      id: 99933,
      name: "Rabe",
    },
    {
      id: 99932,
      name: "Fode/beed",
    },
    {
      id: 99934,
      name: "General ceel",
    },
    {
      id: 99935,
      name: "Bravo two",
    },
    {
      id: 99936,
      name: "Bravo three",
    },
    {
      id: 15,
      name: "Bravo three",
    },
    {
      id: 68,
      name: "Bravo three",
    }
  ],
  links: [
    {
      source: 35,
      target: 3,
      value: 0.55
    },
    {
      source: 32,
      target: 3,
      value: 0.7000000000000001
    },
    {
      source: 11,
      target: 3,
      value: 0.8
    },
    {
      source: 3,
      target: 40,
      value: 0.15
    },
    {
      source: 2,
      target: 3,
      value: 0.1
    },
    {
      source: 99930,
      target: 3,
      value: 0.1
    },
    {
      source: 33,
      target: 32,
      value: 0.05
    },
    {
      source: 99923,
      target: 99924,
      value: 0.05
    },
    {
      source: 10,
      target: 99924,
      value: 0.05
    },
    {
      source: 32,
      target: 99924,
      value: 0.05
    },
    {
      source: 10,
      target: 32,
      value: 1.3
    },
    {
      source: 33,
      target: 99924,
      value: 0.05
    },
    {
      source: 99925,
      target: 33,
      value: 0.05
    },
    {
      source: 99925,
      target: 99924,
      value: 0.05
    },
    {
      source: 33,
      target: 99926,
      value: 0.4
    },
    {
      source: 99926,
      target: 99927,
      value: 0.1
    },
    {
      source: 33,
      target: 99927,
      value: 0.05
    },
    {
      source: 42,
      target: 21,
      value: 0.15
    },
    {
      source: 21,
      target: 99928,
      value: 0.05
    },
    {
      source: 42,
      target: 99928,
      value: 0.15
    },
    {
      source: 36,
      target: 32,
      value: 1.1
    },
    {
      source: 36,
      target: 10,
      value: 0.6
    },
    {
      source: 36,
      target: 37,
      value: 0.1
    },
    {
      source: 38,
      target: 32,
      value: 0.1
    },
    {
      source: 38,
      target: 10,
      value: 0.1
    },
    {
      source: 38,
      target: 36,
      value: 0.1
    },
    {
      source: 21,
      target: 33,
      value: 0.25
    },
    {
      source: 21,
      target: 99926,
      value: 0.15
    },
    {
      source: 33,
      target: 99928,
      value: 0.1
    },
    {
      source: 36,
      target: 99928,
      value: 0.05
    },
    {
      source: 42,
      target: 36,
      value: 0.35000000000000003
    },
    {
      source: 32,
      target: 99928,
      value: 0.1
    },
    {
      source: 42,
      target: 32,
      value: 0.44999999999999996
    },
    {
      source: 42,
      target: 35,
      value: 0.35000000000000003
    },
    {
      source: 35,
      target: 32,
      value: 0.8
    },
    {
      source: 35,
      target: 99928,
      value: 0.05
    },
    {
      source: 42,
      target: 10,
      value: 0.35000000000000003
    },
    {
      source: 10,
      target: 39,
      value: 0.15
    },
    {
      source: 36,
      target: 39,
      value: 0.05
    },
    {
      source: 32,
      target: 39,
      value: 0.1
    },
    {
      source: 42,
      target: 39,
      value: 0.1
    },
    {
      source: 36,
      target: 35,
      value: 0.44999999999999996
    },
    {
      source: 32,
      target: 40,
      value: 0.3
    },
    {
      source: 11,
      target: 40,
      value: 0.2
    },
    {
      source: 35,
      target: 40,
      value: 0.15
    },
    {
      source: 11,
      target: 32,
      value: 1.1
    },
    {
      source: 11,
      target: 35,
      value: 0.8
    },
    {
      source: 36,
      target: 41,
      value: 0.1
    },
    {
      source: 11,
      target: 41,
      value: 0.1
    },
    {
      source: 32,
      target: 41,
      value: 0.1
    },
    {
      source: 35,
      target: 41,
      value: 0.1
    },
    {
      source: 11,
      target: 36,
      value: 0.4
    },
    {
      source: 11,
      target: 99929,
      value: 0.1
    },
    {
      source: 99929,
      target: 32,
      value: 0.1
    },
    {
      source: 99929,
      target: 35,
      value: 0.05
    },
    {
      source: 11,
      target: 43,
      value: 0.35000000000000003
    },
    {
      source: 36,
      target: 43,
      value: 0.15
    },
    {
      source: 32,
      target: 43,
      value: 0.4
    },
    {
      source: 35,
      target: 43,
      value: 0.25
    },
    {
      source: 11,
      target: 2,
      value: 0.15
    },
    {
      source: 2,
      target: 35,
      value: 0.1
    },
    {
      source: 10,
      target: 99928,
      value: 0.05
    },
    {
      source: 44,
      target: 21,
      value: 0.15
    },
    {
      source: 11,
      target: 99930,
      value: 0.15
    },
    {
      source: 11,
      target: 99931,
      value: 0.1
    },
    {
      source: 99930,
      target: 99931,
      value: 0.05
    },
    {
      source: 36,
      target: 99930,
      value: 0.05
    },
    {
      source: 99930,
      target: 32,
      value: 0.1
    },
    {
      source: 36,
      target: 99931,
      value: 0.05
    },
    {
      source: 32,
      target: 99931,
      value: 0.1
    },
    {
      source: 11,
      target: 10,
      value: 0.25
    },
    {
      source: 10,
      target: 43,
      value: 0.05
    },
    {
      source: 2,
      target: 40,
      value: 0.05
    },
    {
      source: 99930,
      target: 40,
      value: 0.05
    },
    {
      source: 2,
      target: 32,
      value: 0.05
    },
    {
      source: 2,
      target: 99930,
      value: 0.05
    },
    {
      source: 99930,
      target: 35,
      value: 0.05
    },
    {
      source: 99932,
      target: 16,
      value: 0.05
    },
    {
      source: 16,
      target: 43,
      value: 0.05
    },
    {
      source: 41,
      target: 43,
      value: 0.05
    },
    {
      source: 11,
      target: 16,
      value: 0.05
    },
    {
      source: 16,
      target: 36,
      value: 0.05
    },
    {
      source: 16,
      target: 35,
      value: 0.05
    },
    {
      source: 16,
      target: 41,
      value: 0.05
    },
    {
      source: 16,
      target: 32,
      value: 0.05
    },
    {
      source: 99932,
      target: 36,
      value: 0.1
    },
    {
      source: 99932,
      target: 35,
      value: 0.05
    },
    {
      source: 15,
      target: 32,
      value: 0.05
    },
    {
      source: 11,
      target: 15,
      value: 0.05
    },
    {
      source: 15,
      target: 99931,
      value: 0.05
    },
    {
      source: 99930,
      target: 43,
      value: 0.05
    },
    {
      source: 11,
      target: 42,
      value: 0.1
    },
    {
      source: 11,
      target: 39,
      value: 0.2
    },
    {
      source: 21,
      target: 34,
      value: 0.1
    },
    {
      source: 21,
      target: 36,
      value: 0.1
    },
    {
      source: 21,
      target: 32,
      value: 0.05
    },
    {
      source: 36,
      target: 34,
      value: 0.05
    },
    {
      source: 32,
      target: 34,
      value: 0.05
    },
    {
      source: 51,
      target: 32,
      value: 0.1
    },
    {
      source: 52,
      target: 32,
      value: 0.1
    },
    {
      source: 32,
      target: 20,
      value: 0.1
    },
    {
      source: 32,
      target: 99933,
      value: 0.05
    },
    {
      source: 52,
      target: 51,
      value: 0.15
    },
    {
      source: 51,
      target: 20,
      value: 0.2
    },
    {
      source: 11,
      target: 51,
      value: 0.15
    },
    {
      source: 51,
      target: 99933,
      value: 0.05
    },
    {
      source: 52,
      target: 20,
      value: 0.15
    },
    {
      source: 11,
      target: 52,
      value: 0.1
    },
    {
      source: 52,
      target: 99933,
      value: 0.05
    },
    {
      source: 11,
      target: 20,
      value: 0.15
    },
    {
      source: 99933,
      target: 20,
      value: 0.05
    },
    {
      source: 11,
      target: 99933,
      value: 0.05
    },
    {
      source: 68,
      target: 21,
      value: 0.05
    },
    {
      source: 68,
      target: 34,
      value: 0.05
    },
    {
      source: 10,
      target: 20,
      value: 0.15
    },
    {
      source: 51,
      target: 10,
      value: 0.1
    },
    {
      source: 52,
      target: 10,
      value: 0.05
    },
    {
      source: 38,
      target: 35,
      value: 0.1
    },
    {
      source: 44,
      target: 33,
      value: 0.15
    },
    {
      source: 11,
      target: 38,
      value: 0.05
    },
    {
      source: 38,
      target: 42,
      value: 0.05
    },
    {
      source: 10,
      target: 35,
      value: 0.05
    },
    {
      source: 21,
      target: 99934,
      value: 0.05
    },
    {
      source: 99934,
      target: 33,
      value: 0.05
    },
    {
      source: 44,
      target: 99934,
      value: 0.05
    },
    {
      source: 44,
      target: 99926,
      value: 0.05
    },
    {
      source: 99935,
      target: 39,
      value: 0.2
    },
    {
      source: 11,
      target: 99935,
      value: 0.1
    },
    {
      source: 99934,
      target: 36,
      value: 0.05
    },
    {
      source: 33,
      target: 35,
      value: 0.05
    },
    {
      source: 99925,
      target: 99927,
      value: 0.05
    },
    {
      source: 99936,
      target: 99935,
      value: 0.1
    },
    {
      source: 99936,
      target: 39,
      value: 0.1
    },
    {
      source: 11,
      target: 99936,
      value: 0.05
    },
    {
      source: 21,
      target: 35,
      value: 0.05
    }
  ]
}

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNode: null,
      selectedFilter: null,
      filterOrientation: [],
      filterSpecies: [],
      filterMovie: ["I"],
      activeData: blo,
    }
  }

  toRoman = (number) => {
    // console.log(number);
    var newArray = [];
    number.forEach(n => {
      // console.log(n)
      if (n === 1) {
        newArray.push('I');
      }
      if (n === 2) {
        newArray.push('II');
      }
      if (n === 3) {
        newArray.push('III');
      }
      if (n === 4) {
        newArray.push('IV');
      }
      if (n === 5) {
        newArray.push('IV');
      }
      if (n === 6) {
        newArray.push('IV');
      }
    })
    // console.log(newArray)
    return newArray;
  };

  _handleClick = node => {
    console.log(node)
    this.setState({ activeNode: node });

    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
    this.fg.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
    this.render();
  };

  _handleHoverLink = (link, prevLink) => {
    // console.log(link)
    // console.log(prevLink)
  };

  onFilterSelected = (val) => {
    this.setState({
      selectedFilter: val
    })
  };

  onFilterSpeciesSelected = (val) => {
    let array = [];
    array.push(val);
    this.setState({
      selectedFilter: null,
      filterSpecies: array
    })
  };

  onFilterOrientationSelected = (val) => {
    let array = [];
    array.push(val);
    this.setState({
      selectedFilter: null,
      filterOrientation: array
    })
  };

  onFilterMovieSelected = (val, data) => {
    let array = [];
    array.push(val);
    this.setState({
      selectedFilter: null,
      filterMovie: array,
      activeData: data
    })
    console.log(data);
  };

  renderFilters = () => {
    if (this.state.selectedFilter === null) {
      return (
        <nav className="filters">
          <div className="filterList">
            <button onClick={() => this.onFilterSelected('species')}>Species</button>
            <button onClick={() => this.onFilterSelected('orientation')}>Orientation</button>
            <button onClick={() => this.onFilterSelected('movie')}>Movie</button>
          </div>
        </nav>
      )
    }

    if (this.state.selectedFilter === 'species') {
      return (
        <nav className="filters">
          <div className="filterList">
            <button onClick={() => this.onFilterSpeciesSelected('human')}>Human</button>
            <button onClick={() => this.onFilterSpeciesSelected('alien')}>Alien</button>
            <button onClick={() => this.onFilterSpeciesSelected('droid')}>Droid</button>
          </div>
        </nav>
      )
    }

    if (this.state.selectedFilter === 'orientation') {
      return (
        <nav className="filters">
          <div className="filterList">
            <button onClick={() => this.onFilterOrientationSelected('dark')}>Dark</button>
            <button onClick={() => this.onFilterOrientationSelected('light')}>Light</button>
            <button onClick={() => this.onFilterOrientationSelected('neutral')}>Neutral</button>
          </div>
        </nav>
      )
    }

    if (this.state.selectedFilter === 'movie') {
      return (
        <nav className="filters">
          <div className="filterList">
            <button onClick={() => this.onFilterMovieSelected('I', data1)}>I</button>
            <button onClick={() => this.onFilterMovieSelected('II', data2)}>II</button>
            <button onClick={() => this.onFilterMovieSelected('III', data3)}>III</button>
            <button onClick={() => this.onFilterMovieSelected('IV', data4)}>IV</button>
            <button onClick={() => this.onFilterMovieSelected('V', data5)}>V</button>
            <button onClick={() => this.onFilterMovieSelected('VI', data6)}>VI</button>
            <button onClick={() => this.onFilterMovieSelected('VII', data7)}>VII</button>
          </div>
        </nav>
      )
    }
  };

  showSelectedFilter = () => {
    return (
      <div>
        {this.state.filterOrientation}
        {this.state.filterSpecies}
        {this.state.filterMovie}
      </div>
    )
  };

  headerCard = () => {
    return (
      <div>
        <img src="" alt="" />
        <h1>Unkarplutt</h1>
        <h3>Unkarplutt</h3>
      </div>
    )
  };

  renderCard = (props) => {
    console.log('render card')
    if (props)
      return (
        <div className="cardInfo">
          <div className="cardWrapper">
            {this.headerCard()}
            <TabCard />
          </div>
        </div>
      )
  };

  render = () => {
    return (
      <section>
        {this.renderFilters()}
        {this.showSelectedFilter()}
        {this.renderCard(this.state.activeNode)}
        <ForceGraph3D
          ref={el => { this.fg = el; }}
          graphData={this.state.activeData}
          nodeLabel="name"
          nodeColor="group"
          nodeResolution={16}
          nodeOpacity={1}
          onNodeClick={this._handleClick}
          linkColor="colour"
          linkOpacity={0.5}
          linkWidth={0.5}
          linkResolution={12}
          onLinkHover={this._handleHoverLink}
          linkDirectionalParticles="value"
          linkDirectionalParticleSpeed={d => d.value * 0.001}
        />;
      </section>
    )
  };
}

export default Graph;
