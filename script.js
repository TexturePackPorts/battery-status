document.getElementById('detect-battery').addEventListener('click', function() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            var batteryStatus = 'Battery level: ' + battery.level * 100 + '%';

            if (battery.charging) {
                batteryStatus += ' (charging)';
            }

            document.getElementById('battery-status').textContent = batteryStatus;
        });
    } else {
        document.getElementById('battery-status').textContent = 'Battery status not supported';
    }
})