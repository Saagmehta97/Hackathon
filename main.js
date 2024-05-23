// asynchronous fetching of data possibly? Depends on our chrome extension
async function getSportsData() {
    const url = 'https://allsportsapi2.p.rapidapi.com/api/motorsport/team/191417/stage/season/188803/races';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aeb566f723mshae7a1cef8cccfbbp1aa0b2jsnce7dca99c57f',
            'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        let result = await response.text();
        //result = JSON.parse(result)
        console.log(JSON.parse(result, null, 2));
        //for (const data in JSON.stringify(result)) {
            //console.log(data)
            document.getElementById("teamraces").innerHTML = data.races.stage;
        //}
        //document.getElementById("teamraces").innerHTML = result.races.map((item) => `<li${item.name}</li>`)
    } catch (error) {
        console.error(error);
    }
}
getSportsData();