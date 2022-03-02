import * as React from 'react';

import { SectionComponent } from './Section';

import sendAndReceives from './sends_and_receives';
import unforgeableNames from './unforgeable_names';
import patternMatching from './pattern_matching';
import patterns from './patterns';
import bundles from './bundles';
import arithmetic from './arithmetic';
import strings from './strings';
import lists from './lists';
import tuples from './tuples';
import sets from './sets';
import maps from './maps';

export class AppComponent extends React.Component {
  render() {
    return <div>
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