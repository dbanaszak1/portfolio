import React from 'react'

interface props{
    icon: React.JSX.Element;
    size: number;
    color: string;
}

const Icon = (icon:props) => {
  return (
    <div className={`h-${icon.size} w-${icon.size} text-${icon.color}`}>
      {icon.icon}
    </div>
  )
}

export default Icon
