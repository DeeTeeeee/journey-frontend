import React, { useEffect } from 'react'
import { useState } from 'react'
import VerticalCarousel from '../components/VerticalCarousel'
import {config} from 'react-spring'
import {windowWidth} from '../utils/constant'
import { getListTravelTrip } from '../apis/travelTrip'

// let slides = [
//   {
//     key: 1,
//     content: '1',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
//   {
//     key: 2,
//     content: '2',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
//   {
//     key: 3,
//     content: '2',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
//   {
//     key: 4,
//     content: '3',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
//   {
//     key: 5,
//     content: '4',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
//   {
//     key: 6,
//     content: '5',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
//   {
//     key: 7,
//     content: '6',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
//   {
//     key: 8,
//     content: '7',
//     imageUrl:
//       'https://my-love-journey.s3.ap-southeast-2.amazonaws.com/images/z4710226766168_bb2086d8d229e6339c4c9c99e7defe03.jpg',
//   },
// ]

export const ListTravelTripCarousel = () => {
  const [listTravelTrip, setListTravelTrip] = useState([])
  const handleGetListTravelTrip = async () => {
    const result = await getListTravelTrip()
    setListTravelTrip(result)
  }
  useEffect(() => {
    handleGetListTravelTrip()
  }, [])
  const state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  }
  return (
    <div
      style={{
        // position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: window.innerWidth / 3,
        height: '100vh',
        margin: '0 auto',
        background: '#7FfFbF',
      }}
    >
      <VerticalCarousel
        slides={listTravelTrip}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  )
}
