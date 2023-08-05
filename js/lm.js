function updateTime() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    document.getElementById('current-time').textContent = `${currentTime}`;
}

function updateDate() {
    const now = new Date();
    const currentDate = now.toLocaleDateString('en-US');
    document.getElementById('current-date').textContent = `${currentDate}`;
}

// Call initial functions and update every second
setInterval(() => {
    updateTime();
}, 1000);

function tz() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offset / 60));
    const offsetMinutes = Math.abs(offset % 60);
    const offsetString = (offset >= 0 ? '-' : '+') + offsetHours.toString().padStart(2, '0') + ':' + offsetMinutes.toString().padStart(2, '0');
    
    document.getElementById('tz').textContent = `${timezone} (UTC${offsetString})`;
}

tz();