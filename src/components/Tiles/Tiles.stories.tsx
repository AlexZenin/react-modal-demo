import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Tile from './';

export default {
  title: 'Components/Tiles'
};

const Template: Story<{ selected: boolean }> = (args) => {
  const [val, setVal] = useState(args.selected);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h4>Effects</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Tile.Effect.CreativeTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Effect.SleepyTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Effect.FocusedTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Effect.TinglyTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Effect.EnergizedTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Effect.EuphoricTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Effect.RelaxedTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Effect.GigglyTile selected={val} onSelected={() => setVal(!val)} />
      </div>
      <h4>Flavors</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Tile.Flavor.CitrusTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Flavor.BerryTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Flavor.FloralTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Flavor.EarthyTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Flavor.SkunkTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Flavor.PineappleTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Flavor.VanillaTile selected={val} onSelected={() => setVal(!val)} />
        <Tile.Flavor.CheeseTile selected={val} onSelected={() => setVal(!val)} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
