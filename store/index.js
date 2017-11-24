import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [
        {
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          category: 'women',
          sale: false,
          article: 'shoe',
          img: 'shoe1.png'
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 39.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket1.png'
        },
        {
          name: 'Parka and Quilted Liner Jacket',
          price: 49.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'jacket2.png'
        },
        {
          name: 'Cotton Black Cap',
          price: 12.99,
          category: 'men',
          sale: true,
          article: 'hats',
          img: 'hat1.png'
        },
        {
          name: 'Knit Sweater with Zips',
          price: 29.99,
          category: 'women',
          sale: false,
          article: 'sweater',
          img: 'sweater1.png'
        },
        {
          name: 'Long Linen-blend Shirt',
          price: 18.99,
          category: 'men',
          sale: false,
          article: 'shirt',
          img: 'shirt1.png'
        },
        {
          name: 'Knit Orange Sweater',
          price: 28.99,
          category: 'men',
          sale: false,
          article: 'sweater',
          img: 'sweater2.png'
        },
        {
          name: 'Cotton Band-collar Blouse',
          price: 49.99,
          category: 'men',
          sale: true,
          article: 'shirt',
          img: 'shirt2.png'
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 59.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket3.png'
        },
        {
          name: 'Golden Pilot Jacket',
          price: 129.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket4.png'
        }
      ]
    }
  });
};

export default createStore;
