import axios from 'axios'

const API_URL = {
  getList: `${process.env.NEXT_PUBLIC_API_URL}/api/travelTrip`,
}
export const getListTravelTrip = async () => {
  const res = await axios.get(API_URL.getList)
  return res.data.data
}
