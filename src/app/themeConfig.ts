import type { ThemeConfig } from 'antd';
import { Goblin_One } from 'next/font/google';

const goblinOne = Goblin_One({
    weight: '400',
    subsets: ['latin'],
  })


const colorPrimary = '#1677ff'

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary,
    fontFamily: goblinOne.style.fontFamily
  },
};

export default theme;