import React from 'react';
import ReactTestUtils from 'react-addons-test-utils' 

// import $ from 'cheerio';
import FooterFactory from './FooterFactory' 

const Footer = FooterFactory(React); 
const FilterLink = () => (<span>Mock filter link</span>);
const shallow = ReactTestUtils.createRenderer();

describe('footer spec', () => {

  it('should display', () => {
    shallow.render(<Footer />);
    const result = shallow.getRenderOutput();
    expect(result.type).toBe('p');
    expect(result.props.children.length).toBe(7);
  })

})
