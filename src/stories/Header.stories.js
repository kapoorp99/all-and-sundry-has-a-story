import React from 'react';

import Header from '../components/Header/Header';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Primary = () => <Header
  navLink_title1='Products'
  navLink_title2='Categories'
  navLink_title3='Contact'
  bgColor="#C9E7F2"
  textColor="#58697A" />;