import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './euphoric.svg';
import activeIcon from './euphoricActive.svg';

type EuphoricTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const EuphoricTile: React.FC<EuphoricTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Euphoric" {...props} />
  );
};

export default EuphoricTile;
