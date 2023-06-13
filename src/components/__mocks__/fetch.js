// import { setupWorker, rest } from 'msw'

// api simulation//

export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve( [ {
                id: '1',
                attributes: {
                  name: 'Product A',
                  country: 'USA',
                  cost: 10,
                  instock: 5,
                },
              },
              {
                id: '2',
                attributes: {
                  name: 'Product B',
                  country: 'UK',
                  cost: 20,
                  instock: 10,
                },
              },
            ]),
            });
          }

      //  const worker =  setupWorker(
      //   rest.get('api.products', (req, res, ctx) => {
      //    return rest(ctx.json({
      //       data: [
      //       {
      //         id: '1',
      //         attributes: {
      //           name: 'Product A',
      //           country: 'USA',
      //           cost: 10,
      //           instock: 5,
      //         },
      //       },
      //       {
      //         id: '2',
      //         attributes: {
      //           name: 'Product B',
      //           country: 'UK',
      //           cost: 20,
      //           instock: 10,
      //         },
      //       },
      //     ],
      //   }
      //   )) 
      // }
      // ))   
      // worker.start()
