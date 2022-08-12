import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './focused.svg';
import activeIcon from './focusedActive.svg';

type FocusedTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const FocusedTile: React.FC<FocusedTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Focused" {...props} />
  );
};

export default FocusedTile;
