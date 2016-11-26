function programEngine() {
    let url = `https://baas.kinvey.com/appdata/kid_By_NcflGe`;
    let username = 'guest';
    let password = 'guest';
    let baseauth = btoa(`${username}:${password}`);
    let authHeaders = {'Authorization': `Basic ${baseauth}`, 'Content-Type': 'application/json'};

    loadCountries();
    let currentCountryId = '';
    let currentCountryName = '';

    function loadCountries() {
        let getCountriesRequest = {
            method: 'GET',
            url: `${url}/countries`,
            headers: authHeaders
        };
        $.ajax(getCountriesRequest)
            .then(displayCountries)
            .catch(displayError);
    }

    function displayCountries(countries) {
        $('#countries').find('tr:not(:first)').remove();
        countries.sort((a, b) => a.name > b.name);
        for (let country of countries) {
            $('#countries')
                .append($('<tr/>')
                    .append($('<td/>')
                        .addClass('country-info')
                        .attr('country-id', country._id)
                        .attr('country-name', country.name)
                        .text(country.name))
                    .append($('<td/>')
                        .append($('<button/>')
                            .addClass('country-edit-button')
                            .attr('country-id', country._id)
                            .attr('country-name', country.name)
                            .text('Edit'))
                        .append($('<button/>')
                            .addClass('country-delete-button')
                            .attr('country-id', country._id)
                            .text('Delete'))));
        }
        $('#countries')
            .append($('<tr/>')
                .append($('<td/>')
                    .append($('<input/>')
                        .attr('id', 'country-add-change-input')))
                .append($('<td/>')
                    .append($('<button/>')
                        .attr('id', 'country-add-change-button')
                        .text('Add'))));
        $('.country-info').click(function (event) {
            currentCountryId = $(event.currentTarget).attr('country-id');
            currentCountryName = $(event.currentTarget).attr('country-name');
            displaySelectedCountry();
            loadTowns();
        });
        $('.country-edit-button').click(editCountry);
        $('.country-delete-button').click(deleteCountry);
        $('#country-add-change-button').click(addCountry);
    }

    function addCountry() {
        let newCountry = $('#country-add-change-input').val();
        if (newCountry !== '') {
            let data = {
                name: newCountry
            };
            let addCountryRequest = {
                method: 'POST',
                url: `${url}/countries`,
                headers: authHeaders,
                data: JSON.stringify(data)
            };

            $.ajax(addCountryRequest)
                .then(loadCountries)
                .catch(displayError);
        }
    }

    function editCountry(event) {
        $('#country-add-change-button').off('click');
        let countryId = $(event.currentTarget).attr('country-id');
        let countryName = $(event.currentTarget).attr('country-name');
        $('#country-add-change-input').val(countryName);
        $('#country-add-change-button').text('Change');
        $('#country-add-change-button').click(function () {
            let changedCountryName = $('#country-add-change-input').val();
            if (changedCountryName !== '') {
                let data = {
                    name: changedCountryName
                };
                let addCountryRequest = {
                    method: 'PUT',
                    url: `${url}/countries/${countryId}`,
                    headers: authHeaders,
                    data: JSON.stringify(data)
                };

                $.ajax(addCountryRequest)
                    .then(loadCountries)
                    .catch(displayError);
            }
        });
    }

    function deleteCountry(event) {
        let countryId = $(event.currentTarget).attr('country-id');
        let deleteCountryRequest = {
            method: 'DELETE',
            url: `${url}/countries/${countryId}`,
            headers: authHeaders
        };

        $.ajax(deleteCountryRequest)
            .then(loadCountries)
            .catch(displayError);
    }

    function loadTowns(event) {
        let getTownsRequest = {
            method: 'GET',
            url: `${url}/towns?query={"country_id":"${currentCountryId}"}`,
            headers: authHeaders
        };
        $.ajax(getTownsRequest)
            .then(displayTowns)
            .catch(displayError);
    }

    function displayTowns(towns) {
        $('#towns').find('tr:not(:first)').remove();
        towns.sort((a, b) => a.name > b.name);
        for (let town of towns) {
            $('#towns')
                .append($('<tr/>')
                    .attr('town-id', town._id)
                    .attr('town-name', town.name)
                    .attr('country-id', currentCountryId)
                    .append($('<td/>')
                        .addClass('town-info')
                        .text(town.name))
                    .append($('<td/>')
                        .append($('<button/>')
                            .addClass('town-edit-button')
                            .attr('town-id', town._id)
                            .attr('town-name', town.name)
                            .attr('country-id', currentCountryId)
                            .text('Edit'))
                        .append($('<button/>')
                            .addClass('town-delete-button')
                            .attr('town-id', town._id)
                            .text('Delete'))));
        }
        $('#towns')
            .append($('<tr/>')
                .append($('<td/>')
                    .append($('<input/>')
                        .attr('id', 'town-add-change-input')))
                .append($('<td/>')
                    .append($('<button/>')
                        .attr('id', 'town-add-change-button')
                        .text('Add'))));
        $('.town-edit-button').click(editTown);
        $('.town-delete-button').click(deleteTown);
        $('#town-add-change-button').click(addTown);
    }

    function addTown() {
        let newTown = $('#town-add-change-input').val();
        if (newTown !== '') {
            let data = {
                name: newTown,
                country_id: currentCountryId
            };
            let addTownRequest = {
                method: 'POST',
                url: `${url}/towns`,
                headers: authHeaders,
                data: JSON.stringify(data)
            };

            $.ajax(addTownRequest)
                .then(loadTowns)
                .catch(displayError);
        }
    }

    function editTown(event) {
        $('#town-add-change-button').off('click');
        let townId = $(event.currentTarget).attr('town-id');
        let townName = $(event.currentTarget).attr('town-name');
        $('#town-add-change-input').val(townName);
        $('#town-add-change-button').text('Change');
        $('#town-add-change-button').click(function () {
            let changedTownName = $('#town-add-change-input').val();
            if (changedTownName !== '') {
                let data = {
                    name: changedTownName,
                    country_id: currentCountryId
                };
                let addTownRequest = {
                    method: 'PUT',
                    url: `${url}/towns/${townId}`,
                    headers: authHeaders,
                    data: JSON.stringify(data)
                };

                $.ajax(addTownRequest)
                    .then(loadTowns)
                    .catch(displayError);
            }
        });
    }

    function deleteTown(event) {
        let townId = $(event.currentTarget).attr('town-id');
        let deleteTownRequest = {
            method: 'DELETE',
            url: `${url}/towns/${townId}`,
            headers: authHeaders
        };

        $.ajax(deleteTownRequest)
            .then(loadTowns)
            .catch(displayError);
    }

    function displaySelectedCountry() {
        $('#error').html(currentCountryName);
    }

    function displayError(error) {
        $('#error').html(error);
    }

}