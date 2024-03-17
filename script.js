function convertTime() {
    const datetime = document.getElementById('datetime').value;
    const sourceTimezone = document.getElementById('sourceTimezone').value;
    const targetTimezone = document.getElementById('targetTimezone').value;

    const sourceDatetime = moment.tz(datetime, sourceTimezone);
    const targetDatetime = sourceDatetime.clone().tz(targetTimezone);

    document.getElementById('result').innerText = `Converted Date/Time: ${targetDatetime.format('YYYY-MM-DD HH:mm:ss')}`;
}

flatpickr("#datetime", {
    enableTime: true,
    dateFormat: "Y-m-d H:i:S"
});

function showSelected() {
    const selectedTimezone = document.getElementById('sourceTimezone').value;
}

function filterTimezones() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const options = document.getElementById('sourceTimezone').options;

    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].text.toUpperCase();
        if (optionText.indexOf(input) > -1) {
            options[i].style.display = '';
        } else {
            options[i].style.display = 'none';
        }
    }
}