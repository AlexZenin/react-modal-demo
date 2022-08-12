import React from 'react'
import Tile from '../../Tile'
import DefaultIcon from 'url:./berry.svg'
import ActiveIcon from 'url:./berryActive.svg'

type BerryTileProps = {
  selected: boolean
  onSelected: () => void
}

const BerryTile: React.FC<BerryTileProps> = (props) => {
  return (
    <Tile
      defaultIconPath={DefaultIcon}
      activeIconPath={ActiveIcon}
      label="Berry"
      {...props}
    />
  )
}

export default BerryTile
