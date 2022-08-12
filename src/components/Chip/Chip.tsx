import React from 'react';
import './chip.scss';

type ChipProps = {
  iconLeft?: JSX.Element;
  text: string;
  iconRight?: JSX.Element;
};

const Chip: React.FC<ChipProps> = ({ iconLeft, text, iconRight }) => {
  return (
    <div className="chip-container">
      {iconLeft}
      <p>{text}</p>
      {iconRight}
    </div>
  );
};

export default Chip;
