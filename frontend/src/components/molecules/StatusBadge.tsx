import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import { Badge, Icon } from '../atoms'

interface StatusBadgeProps {
  deployed: boolean
  size?: 'sm' | 'md' | 'lg'
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ deployed, size = 'sm' }) => {
  return (
    <>
      {deployed && (
        <Badge
          variant={'success'}
          size={size}
          className='space-x-1'
        >
          <Icon
            icon={CheckCircle}
            size={12}
            color={'white'}
          />
          <span>{'Desplegado'}</span>
        </Badge>
      )}
    </>
  )
}

export default StatusBadge
