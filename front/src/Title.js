import React, { Component } from "../node_modules/react";
import { Power2, TimelineLite } from "gsap";

import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);

    this.intro = React.createRef();
    this.logo = React.createRef();
    this.content = React.createRef();

    this.state = {
      muted: true
    };
  }

  componentDidMount() {
    const tl = new TimelineLite();

    tl
      .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, {
        opacity: 0,
        onComplete: () => {
        }
      })
      .set(this.logo.current, {
        opacity: 1,
        scale: 2.75,
        delay: 0.5
      })
      .to(this.logo.current, 8, { scale: 0.05, ease: Power2.easeOut })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5")
      .to(this.content.current, 200, { top: "-170%" });
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p>
            A long time ago, in a galaxy far,<br /> far away....
          </p>
        </section>

        <section className="crawl">
          <div className="content" ref={this.content}>
            <h1 className="title">Lorem Ipsum</h1>
            <h2 className="subtitle">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pharetra risus scelerisque tempus. Curabitur in placerat nunc, et condimentum arcu. Aliquam vulputate leo a urna ultrices vehicula. Donec eleifend felis ac enim pellentesque tincidunt. Sed tempor lacus et posuere volutpat. Aliquam fringilla sem eget erat euismod ornare. Maecenas dignissim ligula eros, et porttitor risus pretium nec. Nunc id purus urna. Aenean sit amet lacus in odio luctus gravida vitae non metus. Proin faucibus, mauris sed fringilla porttitor, lectus eros lacinia nulla, at dignissim ex sapien eget felis. Aenean venenatis diam vitae velit mattis, vel consectetur tellus varius. Nulla dignissim sed est quis mattis. Pellentesque dapibus elit ac convallis ultrices. Nam eu tortor id turpis venenatis tincidunt non eu nibh. Integer euismod fringilla ligula, vel maximus eros vestibulum et.
            </p>
            <p>
              Sed venenatis dui eu pretium luctus. Vestibulum viverra enim ipsum, quis accumsan neque imperdiet a. Proin sed ante eu libero semper lacinia. Ut sed blandit tellus. Nunc lobortis posuere faucibus. Vestibulum quis nibh luctus, tincidunt est quis, efficitur purus. Phasellus velit odio, tincidunt sed scelerisque non, molestie porttitor erat. Fusce quis imperdiet nisi.
            </p>
            <p>
              Vestibulum ut nisl ligula. Vivamus nisl nulla, blandit a egestas ac, sollicitudin a sapien. Etiam tellus dui, lobortis eget justo sit amet, tincidunt pharetra mi. Ut bibendum arcu ut tortor blandit, id tincidunt purus eleifend. Quisque molestie, tortor non venenatis volutpat, justo magna pharetra dui, in vehicula purus lectus in risus. Sed facilisis scelerisque volutpat. Pellentesque vestibulum justo non leo rhoncus porta. Sed sem lorem, aliquet vel efficitur imperdiet, vulputate et velit. Morbi vitae enim eu velit consequat mollis vitae eu est. Aenean scelerisque turpis a lobortis suscipit. Proin venenatis ac mauris fermentum sagittis. Vestibulum sed leo imperdiet, bibendum tortor eget, dignissim massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Title;