import { hall_data } from "../../../data_view";

export default function handler({ query: { id } }, res) {
  const filtred = hall_data.filter((data) => data.name === id);

  if (filtred.length > 0) {
    res.status(200).json(filtred[0]);
  } else {
    res.status(404).json({ message: `Page ${id} is not found` });
  }
}
