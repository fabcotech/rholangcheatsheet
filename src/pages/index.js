import * as React from 'react';
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

import { SectionComponent } from '../Section';

import sendAndReceives from '../sends_and_receives';
import quotingAndUnquoting from '../qoting_unquoting';
import unforgeableNames from '../unforgeable_names';
import patternMatching from '../pattern_matching';
import patterns from '../patterns';
import bundles from '../bundles';
import arithmetic from '../arithmetic';
import strings from '../strings';
import lists from '../lists';
import tuples from '../tuples';
import sets from '../sets';
import maps from '../maps';
import any from '../any';
import powerBoxes from '../power_boxes';

class AppComponent extends React.Component {

  changeTheme = (theme) => {
    document.body.setAttribute('class', theme)
  }

  render() {
    console.log(this.props);
    return <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rholang cheatsheet</title>
        <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon.png`)} />
        <link rel="stylesheet" href={withPrefix(`/reset.css`)} />
        <link rel="stylesheet" href={withPrefix(`/style.css`)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rchain_coop" />
        <meta name="twitter:creator" content="@rchain_coop" />
        <meta name="og:image:height" content="565" />
        <meta name="og:image:width" content="1080" />
        <meta name="og:image" content="https://fabcotech.github.io/rholangcheatsheet/cheatsheet.jpg" />
        <meta name="og:url" content="https://fabcotech.github.io/rholangcheatsheet/" />
        <meta name="og:title" content="Rholang Cheat Sheet" />
        <meta name="og:description" content="Rholang Cheat Sheet" />
        <meta name="description" content="Rholang Cheat Sheet" />
      </Helmet>
      <h1>Rholang cheatsheet</h1>
      <a href="https://rchain.coop">rchain.coop</a>
      <div class="buttons">
        <span>Color theme : </span>
        <button onClick={() => this.changeTheme('disco')} type="button" class="button-disco">disco</button>
        <button onClick={() => this.changeTheme('boring')} type="button" class="button-boring">boring</button>
        <button onClick={() => this.changeTheme('matrix')} type="button" class="button-matrix">matrix</button>
      </div>
      <div className="sections">
        <SectionComponent {...sendAndReceives} >
          <SectionComponent {...unforgeableNames} ></SectionComponent>
          <SectionComponent {...quotingAndUnquoting} ></SectionComponent>
        </SectionComponent>
        <SectionComponent {...patternMatching} ></SectionComponent>
        <SectionComponent {...arithmetic} >
          <SectionComponent {...patterns} ></SectionComponent>
        </SectionComponent>
        <SectionComponent {...bundles} ></SectionComponent>
        <SectionComponent {...powerBoxes} ></SectionComponent>
        <SectionComponent title="Data Structures" lines={[]} bgColor="222,90,255" classes="" >
          <SectionComponent {...strings} ></SectionComponent>
          <SectionComponent {...lists} ></SectionComponent>
          <SectionComponent {...tuples} ></SectionComponent>
          <SectionComponent {...sets} ></SectionComponent>
          <SectionComponent {...maps} ></SectionComponent>
          <SectionComponent {...any} ></SectionComponent>
        </SectionComponent>
      </div>
    </div>
  }
}

export default AppComponent;