// asynchronous fetching of data possibly? Depends on our chrome extension
async function getSportsData() {
  const url =
    'https://allsportsapi2.p.rapidapi.com/api/motorsport/stage/203968/standings/team';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e95d8113b4msh8b1b196c4cd13c4p113f3fjsn24b346e193d1',
      'x-rapidapi-host': 'allsportsapi2.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    let result = await response.text();
    const raceData = JSON.parse(result);
    console.log(raceData);

    let str = '<ul>';

    for (let i = 0; i < raceData.standings.length - 1; i++) {
      console.log(raceData.standings[i]);
      str +=
        '<li>' +
        (i + 1) +
        ' :  ' +
        JSON.stringify(raceData.standings[i].team.name) +
        '</li>';
    }
    str += '</ul>';
    document.getElementById('teamraces').innerHTML = str;
  } catch (error) {
    console.error(error);
  }
}
getSportsData();

// JSON.stringify(
// raceData.standings[i]

// `<li${item}</li>`

//document.getElementById('teamraces').innerHTML +=
