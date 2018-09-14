import React, { Component } from 'react';
import TreeNode from './TreeNode';
import './Tree.css';

class Tree extends Component {
  render() {
    const nodes = this.props.nodes || [];
    const className = `tree ${this.props.className}`;
    const TreeNodes = nodes.map((node, index) =>
      <TreeNode node={node} key={index} />
    );

    return (
      <ul className={className}>
        {TreeNodes}
      </ul>
    );
  }
}

export default Tree;
