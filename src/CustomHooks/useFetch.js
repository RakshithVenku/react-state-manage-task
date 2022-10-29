
import axios from "axios";
export async function request(method, url, body, reqHeaders) {
  try {
    const output =  await axios({
      method: method || "GET",
      url: url,
      data: body || {},
      headers: reqHeaders || { "Content-Type": "application/json" },
    })
    return output?.data
    
  } catch (error) {
    return error;
  }
}
