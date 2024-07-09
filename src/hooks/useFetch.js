import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  
  const [change, setChange] = useState()

  const getApi = () => {
    axios.get(url)
    .then(res => setChange(res.data))
    .catch(err => console.log(err))
  }

  return [change, getApi]

}

export default useFetch