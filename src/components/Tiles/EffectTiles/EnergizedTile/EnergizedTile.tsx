import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './energized.svg';
import activeIcon from './energizedActive.svg';

type EnergizedTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const EnergizedTile: React.FC<EnergizedTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Energized" {...props} />
  );
};

export default EnergizedTile;
