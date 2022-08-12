import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './berry.svg';
import activeIcon from './berryActive.svg';

type BerryTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const BerryTile: React.FC<BerryTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Berry" {...props} />
  );
};

export default BerryTile;
