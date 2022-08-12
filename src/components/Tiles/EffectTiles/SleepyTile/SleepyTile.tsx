import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './sleepy.svg';
import activeIcon from './sleepyActive.svg';

type SleepyTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const SleepyTile: React.FC<SleepyTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Sleepy" {...props} />
  );
};

export default SleepyTile;
