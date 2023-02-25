const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const URL = '';

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(URL);

    const $ = cheerio.load(data);
    const items = [];

    $('.product-card__wrapper').each((i, el) => {
      const item = {
        // name: $(el).find('.product-card__name').text().trim(),
        // title: $(el).find('.product-card__title').text().trim(),
        // price: $(el).find('.product-card__price').text().trim(),
      };
      items.push(item);
    });

    if (items.length === 0) {
      throw new Error('No items found');
    }
				console.log(items);

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
