import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './cheese.svg';
import activeIcon from './cheeseActive.svg';

type CheeseTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const CheeseTile: React.FC<CheeseTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Cheese" {...props} />
  );
};

export default CheeseTile;
