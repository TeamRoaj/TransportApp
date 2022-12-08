import React from 'react'
import '../Styles/options.css'

const RouteOptionComponent = (props) => {
  const {routeOptions, selectedRoute, setSelectedRoute} = props

  const showSteps = (item) => {
    item.steps.map((step) => {
      console.log(step)
      return(
        <div>
          <div>
            <p>{step.html_instructions}</p>
          </div>
          <div>
            <p>{step.transit_details.line.name}</p>
            <p>{step.transit_details.line.color}</p>
          </div>
          <div>
            <p>{step.transit_details.departure_stop.name}</p>
            <p>{step.transit_details.departure_time.text}</p>
          </div>
          <div>
            <p>{'->'} {step.transit_details.arrival_stop.name}</p>
            <p>{step.transit_details.arrival_time.text}</p>
          </div>
          <div>
            <p>{step.duration.text}</p>
            <p>{step.distance.text}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {
        routeOptions.routes.length === 0 ? null : routeOptions.routes.map((item) => {
          if(item.fare){
            return(
              <div>
                <div onClick={() => {setSelectedRoute(item.overview_polyline.points)}} className='optionContainer'>
                  <div className='fareContainer'>
                    <p className='fareText'>{item.fare.text}</p>
                  </div>
                  <div className='contentContainer'>
                    <div className='row'>
                      <div>
                        <p>{item['legs'][0]['duration']['text']}</p>
                      </div>
                      <div>
                        <p>{item['legs'][0]['distance']['text']}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div>
                        <p>{item['legs'][0]['steps'][0]['html_instructions']}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div>
                        <p>{item['legs'][0]['start_address']} {'->'}</p>
                        <p>{item['legs'][0]['end_address']}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  selectedRoute === item.overview_polyline.points ? showSteps(item['legs'][0]) : null
                }
              </div>
            )
          } else {
            return(
              <div>
                <div onClick={() => {setSelectedRoute(item.overview_polyline.points)}} className='optionContainer'>
                  <div className='fareContainer'>
                    <p className='fareText'>$--</p>
                  </div>
                  <div className='contentContainer'>
                    <div className='row'>
                      <div>
                        <p>{item['legs'][0]['duration']['text']}</p>
                      </div>
                      <div>
                        <p>{item['legs'][0]['distance']['text']}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div>
                        <p>{item['legs'][0]['steps'][0]['html_instructions']}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div>
                        <p>{item['legs'][0]['start_address']} {'->'}</p>
                        <p>{item['legs'][0]['end_address']}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  selectedRoute === item.overview_polyline.points ? showSteps(item['legs'][0]) : null
                }
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default RouteOptionComponent