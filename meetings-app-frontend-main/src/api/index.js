import { BASE_URL } from "../utils/constants";
import axios from "axios";

export async function updateFreeSlot(payload) {
  const url = `${BASE_URL}/freeslot`;
  try {
    const res = await axios.post(url, payload.data, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
}
