import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { Tree } from 'src';

describe('Tree', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('should render the ul element', () => {
    render(<Tree nodes={[]} />, node, () => {
      expect(node.firstChild.tagName).toEqual('UL');
    });
  });
});
