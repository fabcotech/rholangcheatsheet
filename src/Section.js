import * as React from 'react';

const darken = (color) => {
  let c1 = parseInt(color.split(',')[0]);
  let c2 = parseInt(color.split(',')[1]);
  let c3 = parseInt(color.split(',')[2]);
  
  c1 = c1 - ((255 - c1) * 2);
  c2 = c2 - ((255 - c2) * 2.2);
  c3 = c3 - ((255 - c3) * 1.4);

  return `${c1},${c2},${c3}`
}

export class SectionComponent extends React.Component {
  render() {
    if (this.props.lines) {
      return <div className={`section ${this.props.classes}`} style={
        { background: `linear-gradient(215deg, rgba(${this.props.bgColor},1), rgba(${darken(this.props.bgColor)},1))`,
        color: `rgba(${this.props.textColor},1)`
      }}>
        {
          this.props.title &&
          <div className="title">
            <h2>{this.props.title}</h2>
          </div>
        }
        <div className={`${this.props.classes} inner`}>
          {
            this.props.lines.map(l => {
              return <div className="g2 line">
                <p dangerouslySetInnerHTML={{ __html: l[0] }}></p>
                <p dangerouslySetInnerHTML={{ __html: l[1] }}></p>
              </div>
            })
          }
        </div>
        {this.props.children}
      </div>
    } else if (this.props.sections) {
      return <div className={`section ${this.props.classes}`} style={
        { background: `linear-gradient(215deg, rgba(${this.props.bgColor},1), rgba(${darken(this.props.bgColor)},1))`,
        color: `rgba(${this.props.textColor},1)`
      }}>
        <div className="title">
          <h2>{this.props.title}</h2>
        </div>
        <div className={`${this.props.classes} inner`}>
          {
            Object.keys(this.props.sections).map(l => {
              return <div key={l} className="one-column">
                <p className="level1" dangerouslySetInnerHTML={{ __html: l}} ></p>
                {
                  this.props.sections[l].map(li => {
                    return <p className="level2" dangerouslySetInnerHTML={{ __html: li}}></p>
                  })
                }
              </div>
            })
          }
        </div>
        {this.props.children}
      </div>
    } else if (this.props.html) {
      return <div className={`section ${this.props.classes}`} style={
        { background: `linear-gradient(215deg, rgba(${this.props.bgColor},1), rgba(${darken(this.props.bgColor)},1))`,
        color: `rgba(${this.props.textColor},1)`
      }}>
        <div className="title">
          <h2>{this.props.title}</h2>
        </div>
        <div className={`inner`} dangerouslySetInnerHTML={{ __html: this.props.html }}>

        </div>
        {this.props.children}
      </div>
    }
    return <div>hello</div>
  }
}