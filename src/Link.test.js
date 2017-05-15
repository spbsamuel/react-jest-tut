import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

test('Link changes the classname when hovered', () => {
  const linkComponent = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = linkComponent.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = linkComponent.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = linkComponent.toJSON();
  expect(tree).toMatchSnapshot();
});