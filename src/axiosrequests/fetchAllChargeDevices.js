import axios from "axios";
import express , {response} from "express";


const router = express.Router();

router.get('/', async (req, res) => {
  try {
		const response = await axios({
			url: "http://localhost:8080/api/v1/points/all",
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
})

export {router};