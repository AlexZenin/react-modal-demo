import React from 'react';
import Tile from '../../Tile';
import defaultIcon from './vanilla.svg';
import activeIcon from './vanillaActive.svg';

type VanillaTileProps = {
  selected: boolean;
  onSelected: () => void;
};

const VanillaTile: React.FC<VanillaTileProps> = (props) => {
  return (
    <Tile defaultIconPath={defaultIcon} activeIconPath={activeIcon} label="Vanilla" {...props} />
  );
};

export default VanillaTile;
