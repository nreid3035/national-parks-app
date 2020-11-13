let apiCall = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE'

let apiKey = 'pmXj1DLKVyiqtm77nXHP1KklozWmwQHwUUNy89Vp'

/***FUNCTIONALITY STORY*
 * listen for submit of the form
 * extract the checked boxes and the maxresults from the form
 * make a params object to hold these values
 * fetch from the nps using these values dynamically as parameters
 * console.log the nps data 
 * display the nps data (full name, description, website url, address)
 * results must be replaced on new search
 */


let params = {
    states: [],
    maxResults: 10
}

function formatQueryParams(params) {
    let result = ['stateCode='];
    for (let i = 0; i < params.states.length; i++) {
        result.push(`${params.states[i]}%2C`);
    } 
    let joinedResult = result.join('')
    console.log(joinedResult);
    return joinedResult
    
}
function fetchParks(fetchParam) {
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&${fetchParam}&limit=${params.maxResults}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson))
      .catch(error => console.log(error))
}



 function getDataFromForm() {
     $('form').on('submit', function(event) {
        event.preventDefault();
        params.maxResults = $('#max-results').val();
        $.each($("input[name='states']:checked"), function() {
            params.states.push($(this).val());
        })
        let fetchParam = formatQueryParams(params)
        fetchParks(fetchParam);
     })
 }

 $(getDataFromForm)