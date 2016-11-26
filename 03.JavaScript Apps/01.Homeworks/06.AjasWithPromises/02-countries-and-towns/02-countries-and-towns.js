function programEngine() {
    let url = `https://baas.kinvey.com/appdata/kid_By_NcflGe`;
    let username = 'guest';
    let password = 'guest';
    let baseauth = btoa(`${username}:${password}`);
    let authHeaders = {'Authorization': `Basic ${baseauth}`, 'Content-Type': 'application/json'};

    loadCountries();

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
                    .addClass('country-info')
                    .attr('country-id', country._id)
                    .attr('country-name', country.name)
                    .append($('<td/>')
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

    function displayError(error) {
        $('#error').html(error);
    }
}
