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

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNode: null,
      selectedFilter: null,
      filterOrientation: [],
      filterSpecies: [],
      filterMovie: ["VI"],
      activeData: data7,
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
    
    this.setState({ activeNode: node });
    axios.get(`http://localhost:3200/api/radarData/${node.name}/episode/1`)
      .then(res => {
        console.log(res.data)
        this.setState({ radarData: res.data });
      })

    // Aim at node from outside it
    const distance = 100;
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
    if (props)
      return (
        <div className="cardInfo">
          <div className={"cardWrapper " + (this.state.activeNode.affiliation)}>
            <div>
              <img src={props.img} alt="blabla" />
              <p>Name : {props.name}</p>
              <p>Affiliation : {props.affiliation}</p>
              <p>Gender : {props.gender}</p>
              <p>Species : {props.species}</p>
              <p>Homeworld : {props.homeworld}</p>
              <p>Mass : {props.mass}</p>
              <p>Height : {props.height}</p>
              <RadarChart data={this.state.radarData} />
            </div>
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
          linkWidth={0.1}
          linkResolution={12}
          onLinkHover={this._handleHoverLink}
          linkDirectionalParticles="value"
          linkDirectionalParticleSpeed={d => d.value * 0.01}
          nodeThreeObject={d => {

            // si une node est active on cherche les enfants
            // sinon on affiche tout 
            if (this.state.activeNode !== null) {
              let nodeToGenerate = d.id;
              let links = this.state.activeData.links;
              let selectedNodeId = this.state.activeNode.id;


              const nodeIsLinked = links.some(({ source, target }) =>
                (source.id === nodeToGenerate && target.id === selectedNodeId) ||
                (source.id === selectedNodeId && target.id === nodeToGenerate) ||
                nodeToGenerate === selectedNodeId
              )

              console.log({ nodeToGenerate, links, selectedNodeId, nodeIsLinked })

              const imgTexture = new THREE.TextureLoader().load(`${d.img}`);
              const material = new THREE.SpriteMaterial({ map: imgTexture, opacity: nodeIsLinked ? 1 : 0.2 });
              const sprite = new THREE.Sprite(material);
              sprite.scale.set(10, 10, 5);
              return sprite;


              // if (nodeToGenerate === selectedNodeId) {
              //   let childs = [];
              //   links.forEach(link => {
              //     if (nodeToGenerate === link.source.id || nodeToGenerate === link.target.id) {
              //       childs.push(link);
              //       childs.forEach(c => {
              //         if (c.target.id === nodeToGenerate || c.source.id === nodeToGenerate) {
              //           console.log('6')

              //           const imgTexture = new THREE.TextureLoader().load(`${d.img}`);
              //           const material = new THREE.SpriteMaterial({ map: imgTexture, opacity: 1 });
              //           const sprite = new THREE.Sprite(material);
              //           sprite.scale.set(10, 10, 5);
              //           return sprite;
              //         }
              //       })
              //     }
              //   })

              // } else {
              //   // linksData.forEach(l => console.log(l))
              //   const imgTexture = new THREE.TextureLoader().load(`${d.img}`);
              //   const material = new THREE.SpriteMaterial({ map: imgTexture, opacity: 1 });
              //   const sprite = new THREE.Sprite(material);
              //   sprite.scale.set(10, 10, 5);
              //   return sprite;
              // }
            } else {
              const imgTexture = new THREE.TextureLoader().load(`${d.img}`);
              const material = new THREE.SpriteMaterial({ map: imgTexture, opacity: 1 });
              const sprite = new THREE.Sprite(material);
              sprite.scale.set(10, 10, 5);
              return sprite;
            }
          }}
        />;
      </section>
    )
  };
}

export default Graph;
