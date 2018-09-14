import React, { Component } from 'react';
import cx from 'classnames';
import Tree from './Tree';
import './Tree.css';

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }

  toggleCollapse = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  render() {
    const {
      id,
      name,
      type,
      hasCollaborations,
      extension,
      children,
    } = this.props.node;
    const { isCollapsed } = this.state;
    const isFolder = type === 'folder';
    const treeClassName = cx({ 'is-collapsed': isCollapsed });

    let collapseIndicator = null;
    if (isFolder) {
      collapseIndicator =
        <button className="toggler" onClick={this.toggleCollapse}>
          {isCollapsed ? '+' : '-'}
        </button>;
    }

    return (
      <li className="tree-node">
        <div className="header">
          {collapseIndicator}
          <p className="name">{name}</p>
        </div>
        {children && <Tree nodes={children} className={treeClassName} />}
      </li>
    );
  }
}

export default TreeNode;
