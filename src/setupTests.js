import '@testing-library/jest-dom';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import fetch from './__mocks__/fetch';
 
global.fetch = fetch;
 
configure({adapter: new Adapter()});


componentDidMount() {
  return fetch(`${apiUrl}/tasks`)
    .then(tasksResponse => tasksResponse.json())
    .then(tasksData => {
      this.setState({
        tasks: tasksData
      })
    })
    .catch(error => {
      console.log(error);
    })
}

// import React from 'react';
// import { shallow } from 'enzyme';
// import Products from './components/products';
// import axios from 'axios';
// import fetch from './__mocks__/fetch';
 
// jest.mock('axios');
 
// describe('Products component', () => {
//   describe('when rendered', () => {
//     it('should fetch a list of data', () => {
//       const getSpy = jest.spyOn(axios, 'get');
//       const ProductsInstance = shallow(
//         <Products/>
//       );
//       expect(getSpy).toBeCalled();
//     });
//   });
// });