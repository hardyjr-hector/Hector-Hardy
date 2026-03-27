// /api/scorers.js
export default async function handler(req, res) {
    const { league } = req.query;

    if (!league) {
        return res.status(400).json({ error: "League parameter is required" });
    }

    try {
        const response = await fetch(
            `https://api.football-data.org/v4/competitions/${league}/scorers`,
            {
                headers: { "X-Auth-Token": process.env.API_KEY }
            }
        );

        if (!response.ok) {
            return res.status(response.status).json({ error: "Error fetching data" });
        }

        const data = await response.json();
        res.setHeader("Cache-Control", "s-maxage=60");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}