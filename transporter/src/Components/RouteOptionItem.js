import React from 'react'

const RouteOptionItem = (props) => {
  const { item } = props
  return (
    <div>
      <div>
        {item.timeToDestination}
      </div>
      <div>
        <div>
          <div>
            Time
          </div>
          <div>
            Price
          </div>
        </div>
        <div>
          <div>
            Transportation line
          </div>
        </div>
        <div>
          <div>
            time from the stop
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouteOptionItem