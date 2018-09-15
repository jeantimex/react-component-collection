import React, {Component} from 'react';
import {render} from 'react-dom';
import { Tree } from '../../src';
import { treeNodes } from './data';

import './styles.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>React Component Collection</h1>
        <Tree nodes={treeNodes} />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
