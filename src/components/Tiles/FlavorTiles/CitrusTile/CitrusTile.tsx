import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './citrus.svg';
import activeIcon from './citrusActive.svg';

type CitrusTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const CitrusTile: React.FC<CitrusTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Citrus" {...props} />
  );
};

export default CitrusTile;
