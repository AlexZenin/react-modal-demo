import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './giggly.svg';
import activeIcon from './gigglyActive.svg';

type GigglyTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const GigglyTile: React.FC<GigglyTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Giggly" {...props} />
  );
};

export default GigglyTile;
