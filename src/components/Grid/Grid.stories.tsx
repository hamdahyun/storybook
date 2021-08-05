import React from 'react';
import { Story, Meta } from '@storybook/react';
import Grid from './Grid';
import Box from '../Box/Box';


export default {
  title: 'Gird',
  component: Grid,
} as Meta<typeof Grid>;

export const Basic: Story<typeof Grid> = (args) => <Grid container spacing="lg" {...args}>
  <Grid item cols={6}>
    <Box>box1</Box>
  </Grid>
  <Grid item cols={6}>
    <Box>box1</Box>
  </Grid>
  <Grid item cols={6}>
    <Box>box1</Box>
  </Grid>
  <Grid item cols={6}>
    <Box>box1</Box>
  </Grid>
</Grid>
