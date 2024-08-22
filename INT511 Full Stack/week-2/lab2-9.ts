import axios from "axios";
import { error } from "console";

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/posts')
        console.log(response.data);
        
    } catch(error) {
        console.log(error);
        
    }
}

fetchData()

