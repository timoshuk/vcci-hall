import { hall_data } from "../../../data_view";

export default function handler(req, res) {
  res.status(200).json(hall_data);
}
