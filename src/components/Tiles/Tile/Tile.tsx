import classNames from 'classnames';
import React, { useState } from 'react';
import './tile.scss';

type TileProps = {
  selected: boolean;
  defaultIconPath: string;
  activeIconPath: string;
  label: string;
  onSelected: () => void;
};

const Tile: React.FC<TileProps> = ({
  selected,
  defaultIconPath,
  activeIconPath,
  label,
  onSelected
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`tile-container tile-container-${selected ? 'selected' : 'default'}`}
      onClick={() => {
        onSelected();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <span>
        <img id="animate" src={defaultIconPath} alt="animate" />
        <img src={activeIconPath} alt="active" />
      </span>
      <p className={classNames({ 'tile-label-bold': hover || selected })}>{label}</p>
    </div>
  );
};

export default Tile;
