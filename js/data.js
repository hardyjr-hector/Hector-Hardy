export function initData() {

    const leagueSelect = document.getElementById("leagueSelect");
    const viewSelect = document.getElementById("viewSelect");
    const output = document.getElementById("dataOutput");

    if (!leagueSelect) return;

    async function getData(league) {
        const res = await fetch(`/api/data?league=${league}`);
        return await res.json();
    }

    function render(view, data) {
        output.innerHTML = "";

        const table = data.standings.standings[0].table;
        const scorers = data.scorers.scorers;

        if (view === "table") {
            table.forEach(t => addRow(`${t.position}. ${t.team.name}`, `${t.points} pts`));
        }

        if (view === "attack") {
            [...table]
                .sort((a, b) => b.goalsFor - a.goalsFor)
                .slice(0, 10)
                .forEach(t => addRow(t.team.name, `${t.goalsFor} goles`));
        }

        if (view === "defense") {
            [...table]
                .sort((a, b) => a.goalsAgainst - b.goalsAgainst)
                .slice(0, 10)
                .forEach(t => addRow(t.team.name, `${t.goalsAgainst} encajados`));
        }

        if (view === "scorers") {
            scorers.slice(0, 10)
                .forEach(p => addRow(p.player.name, `${p.goals} goles`));
        }
    }

    function addRow(left, right) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${left}</span><span>${right}</span>`;
        output.appendChild(li);
    }

    async function load() {
        output.innerHTML = "Cargando...";
        try {
            const data = await getData(leagueSelect.value);
            render(viewSelect.value, data);
        } catch {
            output.innerHTML = "Error";
        }
    }

    leagueSelect.addEventListener("change", load);
    viewSelect.addEventListener("change", load);

    load();
}