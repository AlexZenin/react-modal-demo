import React from 'react'
import Tile from '../../Tile'
import defaultIcon from './creative.svg'
import activeIcon from './creativeActive.svg'

type CreativeTileProps = {
  selected: boolean
  onSelected: () => void
}

const CreativeTile: React.FC<CreativeTileProps> = (props) => {
  return (
    <Tile
      defaultIconPath={defaultIcon}
      activeIconPath={activeIcon}
      label="Creative"
      {...props}
    />
  )
}

export default CreativeTile
