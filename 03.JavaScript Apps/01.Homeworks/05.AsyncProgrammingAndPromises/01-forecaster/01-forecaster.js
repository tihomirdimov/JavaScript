function attachEvents () {
    const weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    $('#submit').click(getWeatherReport);

    function getWeatherReport () {
        let getLocationId = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/locations.json`
        };

        $.ajax(getLocationId)
            .then(getLocationCode)
            .catch(displayError);
    }

    function getForecast (locationCode) {
        let getCurrentForecast = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`
        };

        let getUpcomingForecast = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`
        };

        $.ajax(getCurrentForecast)
            .then(currentCondition)
            .catch(displayError);

        $.ajax(getUpcomingForecast)
            .then(upcomingForecast)
            .catch(displayError);
    }

    function currentCondition (currentConditionData) {
        let conditionSymbol = weatherSymbols[currentConditionData.forecast.condition];
        let locationName = currentConditionData.name;
        let foreCastLow = currentConditionData.forecast.low;
        let foreCastHigh = currentConditionData.forecast.high;
        let forecastCondition = currentConditionData.forecast.condition;

        $('#forecast').css('display', '');
        let currentConditionsHtml = `
            <div class="label">Current conditions</div>
            <span class="condition symbol">${conditionSymbol}</span>
            <span class="condition"></span>
            <span class="forecast-data">${locationName}</span>
            <span class="forecast-data">${foreCastLow}/${foreCastHigh}</span>
            <span class="forecast-data">${forecastCondition}</span>`;
        $('#current').html(currentConditionsHtml);
    }

    function upcomingForecast (upcomingDaysData) {
        let forecast = upcomingDaysData.forecast;
        let html = '';
        for (let day of forecast) {
            let conditionSymbol = weatherSymbols[day.condition];
            html += `
                    <span class="upcoming">
                        <span class="symbol">${conditionSymbol}</span>
                        <span class="forecast-data">${day.low}/${day.high}</span>
                        <span class="forecast-data">${day.condition}</span>
                    </span>`;
        }

        $('#upcoming').html(html);
    }

    function getLocationCode (locations) {
        let locationCode = '';
        let currentLocationName = $('#location').val();
        $('#location').val('');

        for (let location of locations) {
            if (location.name === currentLocationName) {
                getForecast(location.code);
            }
        }
    }

    function displayError (err) {
        $('#forecast').css('display', '').html('Error');
    }
}