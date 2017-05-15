import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';
import renderer from 'react-test-renderer';

test('CheckboxWithLabel renders default component with off', () => {
  const checkbox = renderer.create(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  let tree = checkbox.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[0].props.onChange();
  tree = checkbox.toJSON();
  expect(tree).toMatchSnapshot();
});

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});