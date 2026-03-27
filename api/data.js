export default async function handler(req, res) {
    const { league } = req.query;

    try {
        const [standingsRes, scorersRes] = await Promise.all([
            fetch(`https://api.football-data.org/v4/competitions/${league}/standings`, {
                headers: { "X-Auth-Token": process.env.API_KEY }
            }),
            fetch(`https://api.football-data.org/v4/competitions/${league}/scorers`, {
                headers: { "X-Auth-Token": process.env.API_KEY }
            })
        ]);

        const data = {
            standings: await standingsRes.json(),
            scorers: await scorersRes.json()
        };

        res.setHeader("Cache-Control", "s-maxage=60");
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
}