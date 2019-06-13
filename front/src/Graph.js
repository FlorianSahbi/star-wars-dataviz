import React, { Component } from 'react';
import './Graph.css';
import ForceGraph3D from 'react-force-graph-3d';
import RadarChart from './RadarChart'
import axios from 'axios';
import * as THREE from 'three';
import data1 from './json/ep1';
import data2 from './json/ep2';
import data3 from './json/ep3';
import data4 from './json/ep4';
import data5 from './json/ep5';
import data6 from './json/ep6';
import data7 from './json/ep7';
import humanSilhouette from './assets/silhouette-human.svg';

function generateTexture(imgPath) {
 

  var canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;

  var context = canvas.getContext('2d');
  context.fillStyle = 'red'
  // context.fillRect(0, 0, 100, 100)

  var thumbImg = document.createElement('img');
  thumbImg.src = imgPath;
  // thumbImg.onload = () => {
    context.beginPath();
    context.arc(50, 50, 50, 0, 2*Math.PI);
    context.fill();
    context.closePath();
  // }
  return canvas

  // document.body.appendChild(canvas)
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
      activeData: data1,
      radarData: null,
    }
  }

  toRoman = number => {
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

  _handleClick = (node) => {
    console.log(this.state.activeData)
    this.setState({ activeNode: node });
    console.log(node);
    axios.get(`http://localhost:3200/api/radarData/${node.name}/episode/1`)
      .then(res => {
        console.log(res.data)
        this.setState({radarData: res.data});
      })

    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
    this.fg.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      1500  // ms transition duration
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

  closeCard = () => {
    this.setState({activeNode:null})
  }

  renderCard = (props) => {
    if (props)
      return (
        <div className={"cardInfo " + (this.state.activeNode === null ? "translate" : '' )}>
          <div className={"cardWrapper " + (this.state.activeNode.affiliation)}>
            <div className="cardHeaderContainer">
              <div className="cardHeader">
                <img className={"characterPicture characterPicture-" + (this.state.activeNode.affiliation)} src={props.img} alt="Character picture"/>
                <div className="characterName">
                  <p className="nameDefault">{props.name}</p>
                  <p className={"aurebesh nameAurebesh-" + (this.state.activeNode.affiliation)}>{props.name}</p>
                </div>
              </div>
              <div className="closeContainer">
                <span className="close" onClick={() => this.closeCard()}>×</span>
              </div>
            </div>
            <div className="characterData">
              <div className={"characterInfoWrapper characterInfoWrapper-" + (this.state.activeNode.affiliation)}>
                <div className="characterInfoContainer">
                  <div className="characterInfoTitleContainer">
                    <p className="characterInfoTitle">Affiliation</p>
                    <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode.affiliation)}>Affiliation</p>
                  </div>
                  <span class={"divider-" + (this.state.activeNode.affiliation)}></span>
                  <p className="characterInfoText">{props.affiliation}</p>
                </div>
                <div className="characterInfoContainer">
                  <div className="characterInfoTitleContainer">
                    <p className="characterInfoTitle">Species</p>
                    <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode.affiliation)}>Species</p>
                  </div>
                  <span class={"divider-" + (this.state.activeNode.affiliation)}></span>
                  <p className="characterInfoText">{props.species}</p>
                </div>
                <div className="characterInfoContainer">
                  <div className="characterInfoTitleContainer">
                    <p className="characterInfoTitle">Gender</p>
                    <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode.affiliation)}>Gender</p>
                  </div>
                  <span class={"divider-" + (this.state.activeNode.affiliation)}></span>
                  <p className="characterInfoText">{props.gender}</p>
                </div>
                <div className="characterInfoContainer">
                  <div className="characterInfoTitleContainer">
                    <p className="characterInfoTitle">Homeworld</p>
                    <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode.affiliation)}>Homeworld</p>
                  </div>
                  <span class={"divider-" + (this.state.activeNode.affiliation)}></span>
                  <p className="characterInfoText">{props.homeworld}</p>
                </div>
              </div>
              <div className="characterPhysicalContainer">
                <div className="silhouetteContainer">
                  <img src={humanSilhouette} alt=""/>
                  <p>{props.height}cm</p>
                </div>
                <p>{props.mass}kg</p>
              </div>
            </div>
            <div className="radar"></div>
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
          nodeThreeObject={d => {
            // d link active node
            console.log(d)
            console.log(this.state.activeNode)

            const imgTexture = new THREE.TextureLoader().load(`${d.img}`);
            const material = new THREE.SpriteMaterial({ map: imgTexture, opacity: 1 });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(10, 10, 5);
            return sprite;
          }}
        />;
      </section>
    )
  };
}

export default Graph;
