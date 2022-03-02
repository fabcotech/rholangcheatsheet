import * as React from 'react';
import { Helmet } from "react-helmet"

import { SectionComponent } from '../Section';

import sendAndReceives from '../sends_and_receives';
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

class AppComponent extends React.Component {

  changeTheme = (theme) => {
    document.body.setAttribute('class', theme)
  }

  render() {
    return <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rholang cheatsheet</title>
        <link rel="stylesheet" href="/reset.css" />
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      <h1>Rholang cheatsheet</h1>
      <a href="https://rchain.coop">rchain.coop</a>
      <div class="buttons">
        <span>Color theme : </span>
        <button onClick={() => this.changeTheme('disco')} type="button" class="button-disco">disco</button>
        <button onClick={() => this.changeTheme('boring')} type="button" class="button-boring">boring</button>
        <button onClick={() => this.changeTheme('matrix')} type="button" class="button-matrix">matrix</button>
      </div>
      <SectionComponent {...sendAndReceives} >
        <SectionComponent {...unforgeableNames} ></SectionComponent>
      </SectionComponent>
      <SectionComponent {...patternMatching} ></SectionComponent>
      <SectionComponent {...arithmetic} >
        <SectionComponent {...patterns} ></SectionComponent>
      </SectionComponent>
      <SectionComponent {...bundles} ></SectionComponent>
      <SectionComponent title="Data Structures" lines={[]} bgColor="222,90,255" classes="" >
        <SectionComponent {...strings} ></SectionComponent>
        <SectionComponent {...lists} ></SectionComponent>
        <SectionComponent {...tuples} ></SectionComponent>
        <SectionComponent {...sets} ></SectionComponent>
        <SectionComponent {...maps} ></SectionComponent>
      </SectionComponent>
    </div>
  }
}

export default AppComponent;