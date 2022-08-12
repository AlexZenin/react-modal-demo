import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chip from './Chip';
import Icons from '../assets/icons';

export default {
  title: 'Components/Chip',
  component: Chip
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  text: 'THC 19%'
};

export const LeftIconText = Template.bind({});
LeftIconText.args = {
  text: 'THC 19%',
  iconLeft: Icons.remove
};

export const RightIconText = Template.bind({});
RightIconText.args = {
  text: 'THC 19%',
  iconRight: Icons.check
};
