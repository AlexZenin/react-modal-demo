import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './pineapple.svg';
import activeIcon from './pineappleActive.svg';

type PineappleTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const PineappleTile: React.FC<PineappleTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Pineapple" {...props} />
  );
};

export default PineappleTile;
