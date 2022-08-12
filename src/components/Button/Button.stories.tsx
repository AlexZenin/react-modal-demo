import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import Icons from '../assets/icons';

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

export const Layout: ComponentStory<typeof Button> = (args) => {
  const sizeArray: ButtonProps['size'][] = ['lg', 'md', 'sm', 'xs'];
  const variantArray: ButtonProps['variant'][] = ['solid', 'ghost', 'text'];
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          margin: '10px'
        }}>
        {sizeArray.map((size, indexS) => (
          <div
            key={indexS}
            style={{ display: 'flex', justifyContent: 'space-around', margin: '10px' }}>
            {variantArray.map((variant, indexV) => (
              <Button key={indexV} size={size} variant={variant}>
                Button
              </Button>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '10px'
        }}>
        <Button iconLeft={Icons.smile}>Button</Button>
        <Button iconRight={Icons.smile}>Button</Button>
      </div>
    </>
  );
};
