export default async function handler(req, res) {
    const { league } = req.query;

    try {
        const response = await fetch(
            `https://api.football-data.org/v4/competitions/${league}/scorers`,
            {
                headers: {
                    "X-Auth-Token": process.env.API_KEY
                }
            }
        );

        const data = await response.json();

        res.setHeader("Cache-Control", "s-maxage=60");

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: "Error fetching scorers" });
    }
}