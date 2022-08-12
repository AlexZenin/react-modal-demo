import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './earthy.svg';
import activeIcon from './earthyActive.svg';

type EarthyTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const EarthyTile: React.FC<EarthyTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Earthy" {...props} />
  );
};

export default EarthyTile;
