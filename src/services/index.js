import axios from "axios";

export const getAllPackages = async ({q, size = 10, from = 0}) => {
  let res =  await axios.get('https://api.npms.io/v2/search', {
    params: {q, from, size}
  })

  return res.data
}
