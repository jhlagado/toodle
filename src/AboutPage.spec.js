import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import $ from 'cheerio';

import AboutPage from './AboutPage'

const aboutPage = AboutPage(React);

describe('about page', () => {
  it('should display', () => {
    const component = aboutPage({});
    const html = render(component);
    const div = $('div', html);
    expect(div.html()).toEqual('<h1>About</h1>')
  })
})
