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
 function getDataFromForm() {
     $('form').on('submit', function(event) {
        event.preventDefault();
        params.maxResults = $('#max-results').val();
        $.each($("input[name='states']:checked"), function() {
            params.states.push($(this).val());
        })
        console.log(params) 
     })
 }

 $(getDataFromForm)