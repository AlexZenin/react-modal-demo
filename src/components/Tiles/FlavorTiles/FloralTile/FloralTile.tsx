import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './floral.svg';
import activeIcon from './floralActive.svg';

type FloralTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const FloralTile: React.FC<FloralTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Floral" {...props} />
  );
};

export default FloralTile;
