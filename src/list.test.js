
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
 
  ReactDOM.render(<List header = 'something'
  cards = {[{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
  { id: 'c', title: 'Third card', content: 'lorem ipsum' }]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header = 'something' cards = {[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
