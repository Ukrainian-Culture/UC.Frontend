
import axios from "axios";


async function getUserSubscription(email,state){
    const response = await axios.get(`${state.startSettings.domain}/api/account/endDate/${email}`)
    return response?.data
}
export default getUserSubscription