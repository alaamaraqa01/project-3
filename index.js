const countriesList = document.querySelector('#countries-list');


countriesData.forEach(country => {
    const listItem = document.createElement('div');
    listItem.textContent = country;
    countriesList.appendChild(listItem);
});

function StartsWith() {
    const hiddens = document.getElementById('hidden')
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        const filteredCountries = countriesData.filter(country => {
            return country.toLowerCase().startsWith(searchTerm);
        });
        
        hiddens.textContent = `The countries starts with ${searchTerm} are ${filteredCountries.length}`


        populateCountryList(filteredCountries);
    });

    const start = document.getElementById('start')
    const filterButt = document.getElementById('filter')
    const any = document.getElementById("any")
    start.style.backgroundColor = 'rgb(7, 7, 53)'
    filterButt.style.backgroundColor = '#4c4caf'
    any.style.backgroundColor = '#4c4caf'
}

function populateCountryList(countries) {
    const countriesList = document.querySelector('#countries-list ');
    countriesList.innerHTML = '';

    countries.forEach(country => {
        const listItem = document.createElement('div');
        listItem.textContent = country;
        countriesList.appendChild(listItem);
    });
}


function include() {
    const searchInput = document.getElementById('search');
    const hiddens = document.getElementById('hidden')
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        const filteredCountries = countriesData.filter(country => {
            return country.toLowerCase().includes(searchTerm);

        });
        hiddens.textContent = `countries contain ${searchTerm} are ${filteredCountries.length} `



        populateCountryList(filteredCountries);

    });
    const start = document.getElementById('start')
    const filterButt = document.getElementById('filter')
    const any = document.getElementById("any")
    any.style.backgroundColor = 'rgb(7, 7, 53)'
    filterButt.style.backgroundColor = '#4c4caf'
    start.style.backgroundColor = '#4c4caf'



}


let sortOrder = 'asc';

function filter() {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

    const sortedCountries = sortOrder === 'asc' ?
        countriesData.slice().sort() :
        countriesData.slice().sort().reverse();

    populateCountryList(sortedCountries);
    const start = document.getElementById('start')
    const any = document.getElementById('any')
    const filterButt = document.getElementById('filter')
    filterButt.style.backgroundColor = 'rgb(7, 7, 53)'
    any.style.backgroundColor = '#4c4caf'
    start.style.backgroundColor = '#4c4caf'


}

populateCountryList(countriesData);


