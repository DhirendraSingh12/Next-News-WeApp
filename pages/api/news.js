import axios from "axios";

export default async function handler(req,res) {
    try{
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country:'us',
                apiKey: 'a32e4c47469c441aa7a30e675339e11e',
            },
        });
        res.status(200).json(response.data.articles);
    }  catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}