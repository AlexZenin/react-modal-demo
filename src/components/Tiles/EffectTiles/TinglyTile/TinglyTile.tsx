import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './tingly.svg';
import activeIcon from './tinglyActive.svg';

type TinglyTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const TinglyTile: React.FC<TinglyTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Tingly" {...props} />
  );
};

export default TinglyTile;
