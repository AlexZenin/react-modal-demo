import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './relaxed.svg';
import activeIcon from './relaxedActive.svg';

type RelaxedTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const RelaxedTile: React.FC<RelaxedTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Relaxed" {...props} />
  );
};

export default RelaxedTile;
