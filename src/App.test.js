import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';
import { restockProducts } from './components/products';
import { shallow } from 'enzyme';



describe('restockProducts component', () => {
  describe('when rendered', () => {
    it('should fetch data', () => {
      const fetchSpy = jest.spyOn(window, 'fetch');
      const items = shallow(
        <Products/>
      );
      expect(fetchSpy).toBeCalled();
    });
  });
});




// new code test

// Assuming you have imported restockProducts and doFetch from your code
// and you have a mock data file with some sample products

// Define a test suite for restockProducts
// describe('restockProducts', () => {
//   // Define a test case for checking the output of restockProducts
//   test('should return an array of products with name, country, cost and instock properties', async () => {
//     // Define a mock url
//     const mockUrl = '.api/products';

//     // Call restockProducts with the mock url
//     const result = restockProducts(mockUrl);

//     // Expect the result to be an array
//     expect(Array.isArray(result)).toBe(true);

//     // Expect the result to have the same length as the mock data
//     expect(result.length).toBe(mockResponse.length);

//     // Expect each element of the result to have the expected properties
//     result.forEach((product, index) => {
//       expect(product).toHaveProperty('name', mockResponse[index].attributes.name);
//       expect(product).toHaveProperty('country', mockResponse[index].attributes.country);
//       expect(product).toHaveProperty('cost', mockResponse[index].attributes.cost);
//       expect(product).toHaveProperty('instock', mockResponse[index].attributes.instock);
//     });
//   });
// });