import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './skunk.svg';
import activeIcon from './skunkActive.svg';

type SkunkTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const SkunkTile: React.FC<SkunkTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Skunk" {...props} />
  );
};

export default SkunkTile;
