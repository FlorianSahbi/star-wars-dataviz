import React, { Component } from 'react';
import './Graph.css';
import ForceGraph3D from 'react-force-graph-3d';
import RadarChart from './RadarChart'
import axios from 'axios';
import * as THREE from 'three';
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

import closeBtn from './assets/close.svg';

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
          <a className="episodeBtn" onClick={() => this.onFilterMovieSelected('I', ep1, 4)}>
            Episode I
          </a>
          <a className="episodeBtn" onClick={() => this.onFilterMovieSelected('II', ep2, 5)}>
            Episode II
          </a>
          <a className="episodeBtn" onClick={() => this.onFilterMovieSelected('III', ep3, 6)}>
            Episode III
          </a>
          <a className="episodeBtn" onClick={() => this.onFilterMovieSelected('IV', ep4, 1)}>
            Episode IV
          </a>
          <a className="episodeBtn" onClick={() => this.onFilterMovieSelected('V', ep5, 2)}>
            Episode V
          </a>
          <a className="episodeBtn" onClick={() => this.onFilterMovieSelected('VI', ep6, 3)}>
            Episode VI
          </a>
          <a className="episodeBtn" onClick={() => this.onFilterMovieSelected('VII', ep7, 7)}>
            Episode VII
          </a>
        </div>
      </nav>
    )
  };

  closeCard = () => {
    this.setState({ activeNode: null })
  }

  renderCard = (props) => {
    return (
      <div className={"crt cardInfo " + (this.state.activeNode === null ? "translateOut" : 'translateIn')}>
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
              <img src={closeBtn} alt="" className="close" onClick={() => this.closeCard()} />
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
                <svg className="silhouette" width="50" height="100" viewBox="0 0 40 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={"silhouette-" + (this.state.activeNode && this.state.activeNode.affiliation)} d="M28 89.951C27.8263 89.8742 27.5687 89.6386 27.4405 89.4392C27.3897 89.3602 27.3145 89.1755 27.2733 89.0287C27.2322 88.882 27.1474 88.6603 27.085 88.5361C26.9387 88.2455 26.8074 87.4464 26.7511 86.5042C26.7134 85.8723 26.6954 85.7657 26.5612 85.3754C26.4797 85.1383 26.3869 84.8336 26.355 84.6981C26.323 84.5626 26.2786 84.3779 26.2563 84.2876C26.234 84.1973 26.2026 83.9479 26.1864 83.7335C26.1641 83.4371 26.1216 83.2499 26.0091 82.9535C25.9278 82.7391 25.848 82.4435 25.8318 82.2968C25.8135 82.1303 25.7468 81.9084 25.6547 81.707C25.4456 81.2498 25.4266 81.0094 25.5651 80.5727C25.7634 79.9476 25.7492 79.0339 25.519 77.5967C25.4027 76.8711 25.0757 75.0825 24.9523 74.4975C24.7788 73.6751 24.7268 73.4881 24.2944 72.1307C23.9265 70.9759 23.9032 70.7339 23.7558 66.5546L23.7196 65.5284L23.5011 64.9745C23.3809 64.6699 23.2164 64.2913 23.1354 64.133C22.9048 63.6822 22.5983 62.7754 22.5033 62.263C22.4426 61.9358 22.4164 61.6232 22.4159 61.2197C22.4155 60.9028 22.3972 60.4773 22.3753 60.2741C22.3534 60.0709 22.3151 59.5814 22.2903 59.1863C22.2655 58.7912 22.2093 58.2186 22.1654 57.9138C22.0638 57.2075 21.6059 55.0235 21.292 53.7474C21.143 53.1419 21.0128 52.4882 20.9542 52.0511C20.9018 51.66 20.8391 51.3142 20.8149 51.2826C20.7787 51.2354 20.7204 51.2573 20.4876 51.4057C20.2593 51.5512 20.1542 51.5914 19.9459 51.6131C19.7929 51.629 19.6402 51.6221 19.5714 51.5961C19.4835 51.5629 19.4517 51.5645 19.4402 51.6031C19.4318 51.631 19.3752 52.0233 19.3145 52.4749C19.2537 52.9264 19.1399 53.5822 19.0616 53.9321C18.8652 54.8099 18.6344 56.2451 18.5847 56.8978C18.562 57.197 18.5158 57.6265 18.4821 57.8523C18.4185 58.2782 18.3317 60.2166 18.3314 61.2182C18.3311 62.1036 18.277 62.4937 18.0667 63.127C17.9654 63.4318 17.8038 63.8659 17.7075 64.0917C17.6113 64.3174 17.4783 64.6917 17.4121 64.9233C17.2418 65.5191 17.2433 65.6375 17.4593 68.4867C17.4834 68.8043 17.503 69.34 17.5029 69.6771C17.5028 70.5346 17.4322 70.9394 16.9166 73.0403C16.828 73.4015 16.7243 73.8633 16.6863 74.0665C16.6483 74.2697 16.5797 74.6114 16.5339 74.8259C16.488 75.0404 16.4348 75.3267 16.4156 75.4621C16.3964 75.5976 16.3427 75.9116 16.2964 76.16C16.1823 76.7715 16.0833 77.8738 16.0833 78.5338C16.0833 78.9777 16.1023 79.1501 16.1878 79.4821C16.343 80.0849 16.3573 80.3693 16.2496 80.7164C15.9298 81.7476 15.8734 82.0565 15.8338 82.9946C15.8041 83.696 15.786 83.8382 15.687 84.1439C15.6248 84.3358 15.5313 84.576 15.4792 84.6776C15.3445 84.9401 15.2835 85.3874 15.2899 86.0652C15.2929 86.3882 15.277 86.7114 15.2546 86.7836C15.2321 86.8557 15.1645 87.107 15.1044 87.3419C15.0442 87.5769 14.9568 87.843 14.91 87.9333C14.8632 88.0236 14.7974 88.1916 14.7638 88.3066C14.7302 88.4216 14.6361 88.6125 14.5547 88.731C14.4288 88.9142 14.3752 88.9556 14.1958 89.0081C13.7567 89.1365 13.3968 89.0608 13.2259 88.8038C13.1297 88.6592 13.1622 88.2111 13.2863 87.9717C13.3575 87.8343 13.364 87.7973 13.3169 87.7973C13.2458 87.7973 12.9857 88.242 12.9208 88.4746C12.8956 88.5649 12.861 88.6593 12.8438 88.6844C12.7906 88.7619 12.552 88.8645 12.4249 88.8645C12.2526 88.8645 12.0285 88.7035 11.981 88.5455C11.9494 88.4408 11.9187 88.413 11.834 88.413C11.6878 88.413 11.5442 88.3058 11.4765 88.1463C11.437 88.0531 11.3848 88.0065 11.3013 87.9901C11.1608 87.9624 11.0833 87.822 11.0833 87.5951C11.0833 87.4985 11.0566 87.4162 11.0141 87.3816C10.89 87.2806 10.75 86.9062 10.75 86.6754C10.75 86.4148 10.9796 85.3964 11.0708 85.2523C11.1066 85.1958 11.1791 85.1035 11.232 85.047C11.2849 84.9906 11.4037 84.7966 11.4958 84.616C11.588 84.4354 11.795 84.1306 11.9557 83.9387C12.2676 83.5662 12.349 83.4546 12.614 83.0356C12.7293 82.8533 12.7965 82.6886 12.8262 82.5154C12.8554 82.3456 12.9588 82.0885 13.1401 81.7355C13.4339 81.1634 13.4608 81.039 13.3999 80.5317C13.3674 80.2604 13.3829 80.1776 13.6466 79.2194C13.7399 78.8802 13.7235 78.5681 13.544 77.2683C13.4537 76.6136 13.3401 75.6807 13.2917 75.1953C13.2433 74.7099 13.1679 73.9988 13.124 73.615C13.0802 73.2311 13.0241 72.7232 12.9993 72.4861C12.9745 72.2491 12.8868 71.5841 12.8044 71.0084C12.669 70.0621 12.6542 69.869 12.6502 68.997C12.646 68.0624 12.6559 67.9234 12.8369 66.3904C12.8931 65.9141 12.9721 65.4405 13.1315 64.6253C13.2568 63.9843 13.259 63.9522 13.2237 63.2912C13.2038 62.9187 13.1875 62.069 13.1875 61.403C13.1875 60.078 13.2099 60.2421 12.9107 59.3711C12.7635 58.9423 12.5897 57.9897 12.4146 56.6511C12.3681 56.2958 12.2839 55.7347 12.2275 55.4043C12.1711 55.0738 12.125 54.7408 12.125 54.6641C12.125 54.5875 12.0791 54.2852 12.0231 53.9924C11.967 53.6996 11.8825 53.183 11.8354 52.8443C11.7882 52.5057 11.7213 52.0439 11.6868 51.8181C11.432 50.1521 11.0784 46.6911 11.143 46.4954C11.153 46.4653 11.1714 45.8311 11.184 45.0861C11.2239 42.7273 11.3574 41.515 11.6704 40.6701C11.9271 39.9769 12.0088 39.3136 12.021 37.8205C12.0291 36.8231 12.0348 36.7827 12.3809 35.2549C12.6289 34.1602 12.683 33.5996 12.6857 32.0942C12.6876 31.0441 12.6361 30.3314 12.4961 29.4671C12.3625 28.6431 12.3394 28.6315 12.2325 29.3348C12.1688 29.754 11.7982 31.2648 11.5153 32.2584C11.4154 32.6093 11.4035 32.7243 11.3963 33.4078C11.3919 33.8254 11.3673 34.2503 11.3416 34.3519C11.2753 34.6145 10.8838 35.7366 10.7902 35.9323C10.6543 36.2165 10.3883 36.8627 10.258 37.2253C9.67928 38.8358 9.13603 40.1871 8.69858 41.1044C8.12161 42.3142 7.84807 42.9896 7.29381 44.573C6.93922 45.586 6.68221 46.3027 6.62402 46.4407C6.60499 46.4859 6.57965 46.6059 6.56772 46.7075C6.55578 46.8091 6.52429 47.0308 6.49775 47.2001C6.46911 47.3828 6.46132 47.6332 6.4786 47.8158C6.54742 48.5437 6.55857 48.4306 6.27011 49.9299C6.09549 50.8375 6.09123 50.7456 6.37675 52.2286C6.42021 52.4543 6.46104 52.8484 6.46747 53.1042C6.47916 53.569 6.47907 53.5695 6.36226 53.6686C6.29724 53.7238 6.19224 53.7679 6.1257 53.7679C5.92097 53.7679 5.85485 53.6302 5.75372 52.993C5.70372 52.678 5.62642 52.2949 5.58195 52.1417C5.53748 51.9885 5.47093 51.7014 5.43405 51.5037C5.35295 51.069 5.28375 50.9867 5.14425 51.1591C5.0915 51.2242 5.0382 51.3345 5.02579 51.4042C5.01338 51.4738 4.99155 52.048 4.97728 52.6801C4.94106 54.2841 4.91337 54.5697 4.7815 54.6996C4.6578 54.8215 4.4279 54.8377 4.26988 54.7357C4.15064 54.6587 4.14557 54.5917 4.21057 53.9526C4.24387 53.6252 4.23807 53.4189 4.18194 52.9335C4.12377 52.4306 4.12 52.2703 4.16022 52.0099C4.21764 51.6382 4.22254 51.3871 4.17237 51.3871C4.15259 51.3871 4.12541 51.5025 4.11197 51.6436C4.09853 51.7847 4.06723 52.0757 4.04241 52.2902C4.0176 52.5046 3.98986 53.1662 3.98077 53.7604C3.96727 54.6432 3.95254 54.8583 3.9002 54.937C3.78152 55.1154 3.42154 55.1205 3.26059 54.9459C3.18641 54.8655 3.1735 54.7689 3.14158 54.0552C3.09673 53.0528 3.09488 52.3801 3.13612 52.0718C3.1574 51.9127 3.15392 51.8415 3.1257 51.8587C3.1024 51.8729 3.08333 51.9377 3.08333 52.0028C3.08333 52.0679 3.06458 52.1325 3.04167 52.1465C3.01593 52.1622 3 52.5168 3 53.0738C3 54.0322 2.97117 54.2069 2.79793 54.2982C2.64622 54.3782 2.46793 54.3499 2.32357 54.2228L2.1875 54.103L2.16182 53.1863C2.1477 52.6821 2.15278 52.1311 2.17311 51.9618C2.19344 51.7924 2.24992 51.3214 2.29863 50.915C2.39294 50.1282 2.4422 49.3346 2.39673 49.3346C2.36822 49.3346 1.94916 49.6891 1.65273 49.9639C1.35474 50.2401 0.996329 50.3618 0.48755 50.3595C0.145229 50.3579 0 50.2798 0 50.0971C0 50.0125 0.0327 49.9764 0.15625 49.9245C0.5763 49.7482 0.666667 49.7019 0.666667 49.6632C0.666667 49.6401 0.866896 49.423 1.11163 49.1807C1.35635 48.9385 1.63897 48.6292 1.73967 48.4935C2.06303 48.0578 2.09487 48.0211 2.14904 48.0211C2.17832 48.0211 2.24182 47.9716 2.29015 47.9111C2.33847 47.8505 2.45954 47.7443 2.5592 47.675C3.00996 47.3616 3.66431 46.7803 3.77503 46.595C3.96691 46.2738 4.04162 46.1022 4.04245 45.9809C4.04316 45.8764 4.10366 45.6317 4.33463 44.7988C4.37846 44.6407 4.45239 44.374 4.49893 44.2059C4.54547 44.0379 4.61199 43.739 4.64675 43.5416C4.6815 43.3442 4.7738 43.009 4.85186 42.7965C5.07855 42.1796 5.197 41.6118 5.5218 39.5856C5.74616 38.1859 5.8666 37.5033 5.9781 36.9995C6.03306 36.7512 6.13702 36.2155 6.20912 35.8091C6.33216 35.1156 6.56716 34.2085 6.75681 33.6951C6.80268 33.5709 6.91172 33.2661 6.99913 33.0178C7.08653 32.7694 7.21417 32.4462 7.28276 32.2994C7.64124 31.5326 7.78411 30.9527 7.91492 29.7339C7.96338 29.2824 8.04912 28.5435 8.10544 28.0919C8.39031 25.8084 8.39595 25.7292 8.38469 24.1718C8.36837 21.9138 8.4395 21.0924 8.7757 19.6564C8.96931 18.8295 9.17612 18.2041 9.33223 17.9736C9.63069 17.533 10.0374 17.2259 10.6285 16.9949C10.9497 16.8694 11.0913 16.7983 11.5 16.5576C11.626 16.4834 11.9134 16.3551 12.1386 16.2726C13.1063 15.918 15.3922 14.8358 15.9792 14.4545C16.3814 14.1932 16.6396 13.9424 16.7327 13.7228C16.8231 13.5097 16.9169 12.8532 16.9381 12.2843C16.9568 11.7855 16.9531 11.7564 16.839 11.4937C16.587 10.9136 16.4499 10.4362 16.3146 9.668C16.2452 9.27415 16.2289 9.23007 16.153 9.23007C16.1253 9.23007 16.0304 9.18172 15.9422 9.12263C15.7288 8.97979 15.5038 8.50245 15.3587 7.88496C15.2341 7.35492 15.2251 7.15255 15.3115 6.82585C15.3765 6.57987 15.4198 6.50735 15.5757 6.38258C15.6591 6.31589 15.6683 6.28223 15.6438 6.13602C15.6281 6.0429 15.5988 5.93572 15.5786 5.89785C15.5585 5.85998 15.5216 5.59214 15.4967 5.30264C15.4718 5.01315 15.4315 4.73553 15.4071 4.68571C15.3757 4.62151 15.3764 4.4781 15.4093 4.19313C15.4391 3.93607 15.4412 3.78619 15.4154 3.77744C15.3636 3.75989 15.3627 3.61871 15.4143 3.58735C15.4359 3.5742 15.4649 3.47613 15.4789 3.36942C15.4928 3.2627 15.5221 3.14332 15.5438 3.10411C15.5655 3.06491 15.5833 2.98383 15.5833 2.92393C15.5833 2.86404 15.6428 2.72063 15.7154 2.60525C15.7881 2.48987 15.9079 2.29105 15.9817 2.16343C16.1047 1.9508 16.466 1.49033 16.8296 1.08278C17.007 0.883975 17.3617 0.615622 17.4896 0.58347C17.5411 0.570506 17.5833 0.54262 17.5833 0.521501C17.5833 0.500382 17.6068 0.487399 17.6354 0.492648C17.6641 0.497898 17.7464 0.488441 17.8184 0.471636C17.9192 0.448102 17.9446 0.423456 17.929 0.364381C17.9118 0.299919 17.9407 0.282938 18.1099 0.257949C18.2205 0.241596 18.3732 0.202662 18.4491 0.171432C18.5249 0.140203 18.6057 0.126066 18.6287 0.140017C18.6516 0.153967 18.6965 0.14395 18.7286 0.117756C18.7606 0.0915624 18.877 0.0673524 18.9872 0.0639572C19.0973 0.0605621 19.2009 0.0388777 19.2172 0.0157681C19.2367 -0.0119073 19.3169 -0.00175652 19.4519 0.0455074C19.693 0.129865 19.8198 0.136765 19.8435 0.0668209C19.8561 0.0293303 19.8871 0.0335246 19.964 0.0831537C20.0617 0.146249 20.2212 0.14718 20.375 0.0855539C20.4094 0.0717759 20.4937 0.0559751 20.5625 0.0504405C20.6312 0.0449059 20.7511 0.0274864 20.8288 0.0117319C20.9259 -0.00794193 20.9614 -0.00299756 20.9423 0.027516C20.9235 0.0575209 20.9945 0.0715672 21.1611 0.070782C21.4256 0.0695357 21.5857 0.131592 21.7384 0.294515C21.7894 0.348848 21.9158 0.416671 22.0193 0.445234C22.1229 0.473796 22.2499 0.538553 22.3017 0.589137C22.3535 0.639721 22.4896 0.728392 22.6042 0.78618C22.9501 0.96064 23.2698 1.29478 23.8887 2.12865C23.9641 2.23024 24.0497 2.37802 24.0791 2.45704C24.1084 2.53606 24.1598 2.65133 24.1933 2.7132C24.277 2.8677 24.3429 3.2312 24.3628 3.64745C24.3827 4.06619 24.384 4.01246 24.3359 4.77629C24.2869 5.55337 24.2289 5.98059 24.1385 6.2315L24.0674 6.42876L24.1784 6.55879C24.298 6.6988 24.4583 7.15115 24.4583 7.3486C24.4583 7.55758 24.2552 8.37345 24.1142 8.73055C24.0295 8.94515 23.9261 9.1248 23.8368 9.21287C23.694 9.35362 23.6676 9.36409 23.4391 9.37036L23.3157 9.37374L23.197 9.94843C23.0224 10.7942 23.0122 10.8402 22.9685 10.9746C22.9291 11.0958 22.9336 11.6518 22.9791 12.2793C23.0139 12.7612 23.1485 13.3588 23.267 13.558C23.4158 13.8081 23.7629 14.1059 24.1484 14.3141C25.7625 15.1859 27.2933 15.9268 28.2292 16.289C28.9719 16.5766 29.1011 16.6404 29.625 16.9788C30.2277 17.368 30.7019 17.7542 30.8946 18.0128C31.2628 18.507 31.5308 19.3788 31.7531 20.8058C31.8391 21.358 31.8465 21.5612 31.8559 23.6176C31.8655 25.7384 31.9062 26.6854 32.0389 27.8763C32.2752 29.9982 32.4022 30.8856 32.5484 31.4374C32.6512 31.8257 32.669 31.8735 32.9617 32.5457C33.2197 33.1383 33.7331 34.6393 33.8743 35.2139C33.9215 35.4058 34.0168 35.9415 34.0862 36.4043C34.1555 36.8671 34.2856 37.6891 34.3753 38.231C34.5388 39.2186 34.6706 40.0801 34.752 40.6939C34.8368 41.3336 34.9247 41.8374 35.0052 42.1462C35.0978 42.5016 35.5198 43.815 35.7387 44.4293C35.8192 44.6551 35.9466 45.0522 36.0219 45.3119C36.2666 46.1558 36.3617 46.3622 36.6425 46.6579C36.7818 46.8047 37.1743 47.1646 37.5146 47.4576C37.8962 47.7862 38.1758 48.0614 38.2438 48.1755C38.3761 48.3972 38.651 48.7447 38.9196 49.0298C39.0275 49.1443 39.1555 49.3147 39.204 49.4084C39.3318 49.6551 39.5094 49.839 39.7705 49.9949C39.9735 50.1161 40 50.1474 40 50.266C40 50.47 39.8602 50.5417 39.5159 50.5145C39.0924 50.481 38.7312 50.2839 38.2604 49.8292L37.875 49.457V49.7092C37.875 49.9749 37.8928 50.1008 38.0653 51.0587C38.2408 52.0328 38.2483 52.1115 38.2492 52.979C38.2501 53.9416 38.2229 54.0602 37.9775 54.1612C37.8399 54.2178 37.8137 54.2168 37.6739 54.1495C37.469 54.0508 37.4322 53.9244 37.376 53.1259C37.3062 52.1362 37.2795 51.9625 37.141 51.5977C37.0863 51.4539 37.0417 51.2738 37.0417 51.1975C37.0417 51.1211 37.0229 51.0587 37 51.0587C36.938 51.0587 36.9496 51.3213 37.024 51.6045C37.1074 51.9216 37.121 52.7152 37.0521 53.2429C37.0234 53.4622 37 53.8797 37 54.1708C37 54.672 36.9947 54.7057 36.9004 54.806C36.7701 54.9444 36.5246 54.9916 36.3791 54.9062C36.1787 54.7885 36.1669 54.7192 36.181 53.7474C36.1938 52.8646 36.174 52.4411 36.085 51.6967C36.0127 51.0916 35.9524 51.1659 35.9841 51.8211C36.0028 52.2055 35.9966 52.4438 35.9656 52.5384C35.8949 52.7539 35.8347 53.355 35.8203 53.9891C35.808 54.5357 35.8033 54.5625 35.7063 54.6398C35.5721 54.7469 35.2648 54.7138 35.1527 54.5801C35.0802 54.4938 35.0774 54.3961 35.0998 52.7463C35.1228 51.052 35.1144 50.8945 35.0012 50.8945C34.9845 50.8945 34.9679 51.0542 34.9642 51.2494C34.9605 51.4446 34.9267 51.717 34.8891 51.8549C34.8515 51.9927 34.8171 52.1978 34.8126 52.3107C34.7989 52.6546 34.7441 53.1642 34.7037 53.3228C34.6392 53.5764 34.3236 53.6139 34.1526 53.3882C34.0389 53.2381 34.0152 52.7532 34.0891 52.0849C34.1618 51.4274 34.1619 50.6091 34.0894 50.3302C34.0586 50.2117 34.0212 50.1222 34.0063 50.1313C33.9914 50.1403 33.9752 50.0572 33.9704 49.9466C33.9656 49.8359 33.9425 49.6755 33.9192 49.59C33.773 49.0553 33.7113 48.4649 33.7201 47.6863C33.7287 46.9324 33.7244 46.8835 33.6354 46.7194C33.5839 46.6244 33.5417 46.5188 33.5417 46.4847C33.5417 46.4245 33.2466 45.7321 32.6108 44.3008C32.439 43.914 32.1957 43.3322 32.0701 43.0078C31.9445 42.6834 31.6319 41.9284 31.3755 41.3302C30.7934 39.9721 30.6834 39.6913 30.1859 38.2925C29.7866 37.1701 29.6693 36.8733 29.4235 36.3633C29.2799 36.0654 28.8763 34.9767 28.792 34.6597C28.7585 34.5339 28.7339 34.1608 28.7284 33.6951C28.7204 33.015 28.7079 32.895 28.609 32.5457C28.3771 31.7271 28.1192 30.656 28.0016 30.0228C27.9004 29.4778 27.75 28.3452 27.75 28.1277C27.75 28.0968 27.7335 28.0714 27.7133 28.0714C27.6931 28.0714 27.6451 28.2792 27.6066 28.5332C27.5681 28.7872 27.474 29.3275 27.3975 29.7339C27.0009 31.8388 26.9657 33.0144 27.2565 34.434C27.6424 36.3174 27.7004 36.7576 27.7517 38.1899C27.7735 38.7995 27.8098 39.3721 27.8322 39.4624C27.8547 39.5527 27.8735 39.7045 27.874 39.7996C27.8747 39.9257 27.8961 39.9838 27.9526 40.0136C27.9953 40.0361 28.0503 40.106 28.0749 40.169C28.1218 40.2895 28.2486 40.8949 28.2707 41.1044C28.2778 41.1721 28.3118 41.3153 28.3461 41.4225C28.3804 41.5298 28.3987 41.6175 28.3867 41.6175C28.3746 41.6175 28.3853 41.6419 28.4105 41.6717C28.4356 41.7015 28.4549 41.78 28.4535 41.8462C28.452 41.9123 28.4727 42.0588 28.4995 42.1716C28.6935 42.9887 28.7512 43.3011 28.7913 43.752C28.8434 44.3386 28.9005 44.8107 28.9799 45.3119C29.0102 45.5038 29.0677 45.9557 29.1074 46.3162C29.171 46.8916 29.1737 47.0619 29.1296 47.7118C29.0559 48.7983 28.847 50.961 28.7271 51.8797C28.6696 52.3199 28.5863 53.1973 28.5418 53.8295C28.4471 55.1772 28.1141 58.3383 28.0206 58.7785C27.9849 58.9464 27.9207 59.1945 27.878 59.33C27.6396 60.0857 27.5392 61.6123 27.6214 63.2296C27.6679 64.1432 27.7055 64.3514 28.014 65.4052C28.2027 66.0496 28.4806 67.4365 28.5611 68.1349C28.6734 69.1099 28.6418 70.7156 28.4788 72.3219C28.4156 72.9445 28.3472 74.2215 28.3116 75.4416C28.3001 75.8367 28.2718 76.4186 28.2486 76.7346C28.107 78.6685 28.0891 79.518 28.1843 79.7839C28.217 79.875 28.2342 79.9589 28.2227 79.9702C28.2111 79.9816 28.2338 80.0393 28.2732 80.0984C28.421 80.3207 28.5024 80.7364 28.5269 81.3937L28.5505 82.0299L28.7426 82.2762C28.9442 82.5348 29.2909 83.1723 29.457 83.5898C29.5109 83.7252 29.5802 83.8652 29.6109 83.9009C29.6416 83.9365 29.6667 83.9828 29.6667 84.0038C29.6667 84.0247 29.7526 84.1434 29.8575 84.2674C30.1177 84.5748 30.6175 85.3072 30.7145 85.5233C30.7582 85.6206 30.8377 85.7518 30.8911 85.8148C31.1456 86.1153 31.2493 86.4764 31.2482 87.0584C31.2474 87.4437 31.2353 87.5134 31.1341 87.7152C31.0692 87.8445 30.9763 87.9622 30.9167 87.9907C30.8026 88.0451 30.7626 88.1624 30.7549 88.4643C30.7489 88.7025 30.6326 88.8446 30.4756 88.8057C30.3809 88.7823 30.375 88.7913 30.375 88.9573C30.375 89.2059 30.2856 89.3161 30.0837 89.3161C29.939 89.3161 29.9208 89.3277 29.909 89.4276C29.8782 89.6883 29.3139 89.8386 29.102 89.6425L29.0112 89.5584L28.9868 89.6789C28.9386 89.9161 28.3119 90.0888 28 89.951Z" fill="black" />
                </svg>
                <p>{props && props.height} cm</p>
              </div>
              <p>{props && props.mass} kg</p>
            </div>
          </div>
          <RadarChart />
        </div>
      </div>
    )
  };

  render = () => {
    return (
      <section className="crt">
        {this.renderFilters()}
        {this.renderCard(this.state.activeNode)}
        <ForceGraph3D
          backgroundColor="#0E0E0E"
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
