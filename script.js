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
    dateFormat: "Y-m-d H:i:S",
    allowInput: true
});