'use client'
import {ListTravelTripCarousel} from './containers/ListTravelTripCarousel'

export default function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-start'
      }}
    >
      <ListTravelTripCarousel />
      <ListTravelTripCarousel />
      <ListTravelTripCarousel />
    </div>
  )
}
