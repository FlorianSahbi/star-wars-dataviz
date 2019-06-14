import React, { Component } from 'react';
import './Graph.css';
import ForceGraph3D from 'react-force-graph-3d';
import RadarChart from './RadarChart'
import axios from 'axios';
import * as THREE from 'three';
import humanSilhouette from './assets/silhouette-human.svg';
import ep1 from './json/ep1';
import ep2 from './json/ep2';
import ep3 from './json/ep3';
import ep4 from './json/ep4';
import ep5 from './json/ep5';
import ep6 from './json/ep6';
import ep7 from './json/ep7';
import character1 from './pic/character-1.png';
import character2 from './pic/character-2.png';
import character3 from './pic/character-3.png';
import character4 from './pic/character-4.png';
import character5 from './pic/character-5.png';
import character6 from './pic/character-6.png';
import character7 from './pic/character-7.png';
import character8 from './pic/character-8.png';
import character9 from './pic/character-9.png';
import character10 from './pic/character-10.png';
import character11 from './pic/character-11.png';
import character12 from './pic/character-12.png';
import character13 from './pic/character-13.png';
import character14 from './pic/character-14.png';
import character15 from './pic/character-15.png';
import character16 from './pic/character-16.png';
// import character17 from './pic/character-17.png';
import character18 from './pic/character-18.png';
import character19 from './pic/character-19.png';
import character20 from './pic/character-20.png';
import character21 from './pic/character-21.png';
import character22 from './pic/character-22.png';
import character23 from './pic/character-23.png';
import character24 from './pic/character-24.png';
import character25 from './pic/character-25.png';
import character26 from './pic/character-26.png';
import character27 from './pic/character-27.png';
import character28 from './pic/character-28.png';
import character29 from './pic/character-29.png';
import character30 from './pic/character-30.png';
import character31 from './pic/character-31.png';
import character32 from './pic/character-32.png';
import character33 from './pic/character-33.png';
import character34 from './pic/character-34.png';
import character35 from './pic/character-35.png';
import character36 from './pic/character-36.png';
import character37 from './pic/character-37.png';
import character38 from './pic/character-38.png';
import character39 from './pic/character-39.png';
import character40 from './pic/character-40.png';
import character41 from './pic/character-41.png';
import character42 from './pic/character-42.png';
import character43 from './pic/character-43.png';
import character44 from './pic/character-44.png';
import character45 from './pic/character-45.png';
import character46 from './pic/character-46.png';
import character47 from './pic/character-47.png';
import character48 from './pic/character-48.png';
import character49 from './pic/character-49.png';
import character50 from './pic/character-50.png';
import character51 from './pic/character-51.png';
import character52 from './pic/character-52.png';
import character53 from './pic/character-53.png';
import character54 from './pic/character-54.png';
import character55 from './pic/character-55.png';
import character56 from './pic/character-56.png';
import character57 from './pic/character-57.png';
import character58 from './pic/character-58.png';
import character59 from './pic/character-59.png';
import character60 from './pic/character-60.png';
import character61 from './pic/character-61.png';
import character62 from './pic/character-62.png';
import character63 from './pic/character-63.png';
import character64 from './pic/character-64.png';
import character65 from './pic/character-65.png';
import character66 from './pic/character-66.png';
import character67 from './pic/character-67.png';
import character68 from './pic/character-68.png';
import character69 from './pic/character-69.png';
import character70 from './pic/character-70.png';
import character71 from './pic/character-71.png';
import character72 from './pic/character-72.png';
import character73 from './pic/character-73.png';
import character74 from './pic/character-74.png';
import character75 from './pic/character-75.png';
import character76 from './pic/character-76.png';
import character77 from './pic/character-77.png';
import character78 from './pic/character-78.png';
import character79 from './pic/character-79.png';
import character80 from './pic/character-80.png';
import character81 from './pic/character-81.png';
import character82 from './pic/character-82.png';
import character83 from './pic/character-83.png';
import character84 from './pic/character-84.png';
import character85 from './pic/character-85.png';
import character86 from './pic/character-86.png';
import character87 from './pic/character-87.png';
import character88 from './pic/character-88.png';
import character9990 from './pic/character-9990.png';
import character9991 from './pic/character-9991.png';
import character9992 from './pic/character-9992.png';
import character9993 from './pic/character-9993.png';
import character9994 from './pic/character-9994.png';
import character9995 from './pic/character-9995.png';
import character9996 from './pic/character-9996.png';
import character9997 from './pic/character-9997.png';
import character9998 from './pic/character-9998.png';
import character9999 from './pic/character-9999.png';
import character99910 from './pic/character-99910.png';
import character99911 from './pic/character-99911.png';
import character99912 from './pic/character-99912.png';
import character99913 from './pic/character-99913.png';
import character99914 from './pic/character-99914.png';
import character99915 from './pic/character-99915.png';
import character99916 from './pic/character-99916.png';
import character99917 from './pic/character-99917.png';
import character99918 from './pic/character-99918.png';
import character99919 from './pic/character-99919.png';
import character99920 from './pic/character-99920.png';
import character99921 from './pic/character-99921.png';
import character99922 from './pic/character-99922.png';
import character99923 from './pic/character-99923.png';
import character99924 from './pic/character-99924.png';
import character99925 from './pic/character-99925.png';
import character99926 from './pic/character-99926.png';
import character99927 from './pic/character-99927.png';
import character99928 from './pic/character-99928.png';
import character99929 from './pic/character-99929.png';
import character99930 from './pic/character-99930.png';
import character99931 from './pic/character-99931.png';
import character99932 from './pic/character-99932.png';
import character99933 from './pic/character-99933.png';
import character99934 from './pic/character-99934.png';
import character99935 from './pic/character-99935.png';
import character99936 from './pic/character-99936.png';
import character99937 from './pic/character-99937.png';
import character99938 from './pic/character-99938.png';
import character99939 from './pic/character-99939.png';
import character99940 from './pic/character-99940.png';
import character99941 from './pic/character-99941.png';
import character99942 from './pic/character-99942.png';
import character99943 from './pic/character-99943.png';
import character99944 from './pic/character-99944.png';
import character99945 from './pic/character-99945.png';
import character99946 from './pic/character-99946.png';
import character99947 from './pic/character-99947.png';
import character99948 from './pic/character-99948.png';
import character99949 from './pic/character-99949.png';
import character99950 from './pic/character-99950.png';
import character99951 from './pic/character-99951.png';
import character99952 from './pic/character-99952.png';
import character99953 from './pic/character-99953.png';
import character99954 from './pic/character-99954.png';
import character99955 from './pic/character-99955.png';
import character99956 from './pic/character-99956.png';
import character99957 from './pic/character-99957.png';
import character99958 from './pic/character-99958.png';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNode: null,
      radarData: null,
      // activeData: {
      //   nodes: [],
      //   links: []
      // },
      activeData: ep1,
      activeEpisode: 1
    }
  };

  // componentDidMount() {
  //   axios.get(`http://localhost:3200/api/interaction/I`)
  //     .then(res => {
  //       res.data.nodes.forEach(node => {
  //         console.log(node.img.match(/[A-Za-z0-9]+/g)[0])
  //         node.img = node.img.match(/[A-Za-z0-9]+/g)[0];
  //         console.log(node)
  //       });        
  //       this.setState({ activeData: res.data });
  //     })
  // };

  _handleClick = (node) => {
    this.setState({ activeNode: node });
    console.log(`http://localhost:3200/api/radarData/${node.id}/episode/${this.state.activeEpisode}`);
    axios.get(`http://localhost:3200/api/radarData/${node.Id}/episode/${this.state.activeEpisode}`)
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

  onFilterMovieSelected = (val, data, episodeId) => {
    // axios.get(`http://localhost:3200/api/interaction/${val}`)
    //   .then(res => {
    //     console.log(res.data)
    //     this.setState({ activeData: res.data });
    //   })
    this.setState({ activeData: data, activeEpisode: episodeId });
  };

  renderFilters = () => {
    return (
      <nav className="filters">
        <div className="filterList">
          <button onClick={() => this.onFilterMovieSelected('I', ep1, 4)}>I</button>
          <button onClick={() => this.onFilterMovieSelected('II', ep2, 5)}>II</button>
          <button onClick={() => this.onFilterMovieSelected('III', ep3, 6)}>III</button>
          <button onClick={() => this.onFilterMovieSelected('IV', ep4, 1)}>IV</button>
          <button onClick={() => this.onFilterMovieSelected('V', ep5, 2)}>V</button>
          <button onClick={() => this.onFilterMovieSelected('VI', ep6, 3)}>VI</button>
          <button onClick={() => this.onFilterMovieSelected('VII', ep7, 7)}>VII</button>
        </div>
      </nav>
    )
  };

  closeCard = () => {
    this.setState({ activeNode: null })
  }

  renderCard = (props) => {
    return (
      <div className={"cardInfo " + (this.state.activeNode === null ? "translateOut" : 'translateIn')}>
        <div className={"cardWrapper " + (this.state.activeNode && this.state.activeNode.affiliation)}>
          <div className="cardHeaderContainer">
            <div className="cardHeader">
              <img className={"characterPicture characterPicture-" + (this.state.activeNode && this.state.activeNode.affiliation)} src={props && props.img} alt="Character" />
              <div className="characterName">
                <p className="nameDefault">{props && props.name}</p>
                <p className={"aurebesh nameAurebesh-" + (this.state.activeNode && this.state.activeNode.affiliation)}>{props && props.name}</p>
              </div>
            </div>
            <div className="closeContainer">
              <span className="close" onClick={() => this.closeCard()}>×</span>
            </div>
          </div>
          <div className="characterData">
            <div className={"characterInfoWrapper characterInfoWrapper-" + (this.state.activeNode && this.state.activeNode.affiliation)}>
              <div className="characterInfoContainer">
                <div className="characterInfoTitleContainer">
                  <p className="characterInfoTitle">Affiliation</p>
                  <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode && this.state.activeNode.affiliation)}>Affiliation</p>
                </div>
                <span class={"divider-" + (this.state.activeNode && this.state.activeNode.affiliation)}></span>
                <p className="characterInfoText">{props && props.affiliation}</p>
              </div>
              <div className="characterInfoContainer">
                <div className="characterInfoTitleContainer">
                  <p className="characterInfoTitle">Species</p>
                  <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode && this.state.activeNode.affiliation)}>Species</p>
                </div>
                <span class={"divider-" + (this.state.activeNode && this.state.activeNode.affiliation)}></span>
                <p className="characterInfoText">{props && props.species}</p>
              </div>
              <div className="characterInfoContainer">
                <div className="characterInfoTitleContainer">
                  <p className="characterInfoTitle">Gender</p>
                  <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode && this.state.activeNode.affiliation)}>Gender</p>
                </div>
                <span class={"divider-" + (this.state.activeNode && this.state.activeNode.affiliation)}></span>
                <p className="characterInfoText">{props && props.gender}</p>
              </div>
              <div className="characterInfoContainer">
                <div className="characterInfoTitleContainer">
                  <p className="characterInfoTitle">Homeworld</p>
                  <p className={"aurebesh characterInfoTitle_aurebesh-" + (this.state.activeNode && this.state.activeNode.affiliation)}>Homeworld</p>
                </div>
                <span class={"divider-" + (this.state.activeNode && this.state.activeNode.affiliation)}></span>
                <p className="characterInfoText">{props && props.homeworld}</p>
              </div>
            </div>
            <div className="characterPhysicalContainer">
              <div className="silhouetteContainer">
                <img src={humanSilhouette} alt="" />
                <p>{props && props.height} cm</p>
              </div>
              <p>{props && props.mass} kg</p>
            </div>
          </div>
          <div className="radar">
            <RadarChart />
          </div>
        </div>
      </div>
    )
  };

  render = () => {
    return (
      <section>
        {this.renderFilters()}
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
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={d => d.value * 0.1}
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

              // console.log({ nodeToGenerate, links, selectedNodeId, nodeIsLinked })

              const imgTexture = new THREE.TextureLoader().load(`${d.img}`);
              const material = new THREE.SpriteMaterial({ map: imgTexture, opacity: nodeIsLinked ? 1 : 0.2 });
              const sprite = new THREE.Sprite(material);
              sprite.scale.set(10, 10, 5);
              return sprite;

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
