import {Store} from './store';

export const Nvidia: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.buy',
      text: ['add to cart', 'buy now'],
    },
    outOfStock: {
      container: '.buy',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url:
        'https://shop.nvidia.com/en-us/geforce/store/gpu/?page=1&limit=9&locale=en-us&&category=GPU&gpu=RTX%203080%20TI&manufacturer=NVIDIA'
    }
  ],
  name: 'nvidia',
};
