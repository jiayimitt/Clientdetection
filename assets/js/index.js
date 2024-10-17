'use strict';

//Utility functions
function select(seletor,scope = document) {
    return scope.querySelector(seletor);
}  

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}  

//Get system info
function getOSInfo() {
    const userAgent = window.navigator.userAgent;
    let os = "unknown OS";

    if (userAgent.indexOf("Windows NT 10.0") !== -1) os = "Windows 10";
    else if (userAgent.indexOf("Windows NT 6.2") !== -1) os = "Windows 8";
    else if (userAgent.indexOf("Windows NT 6.1") !== -1) os = "Windows 7";
    else if (userAgent.indexOf("Windows NT 6.0") !== -1) os = "Windows Vista";
    else if (userAgent.indexOf("Windows NT 5.1") !== -1) os = "Windows XP";
    else if (userAgent.indexOf("Mac") !== -1) os = "Mac OS";
    else if (userAgent.indexOf("X11") !== -1) os = "UNIX";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
    
    return os;
}

function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browser = "unknown browser";

    if (userAgent.indexOf("Chrome") !== -1 && userAgent.indexOf("Edg") === -1) {
        browser = "Google Chrome";
    } else if (userAgent.indexOf("Firefox") !== -1) {
        browser = "Mozilla Firefox";
    } else if (userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Chrome") === -1) {
        browser = "Safari";
    } else if (userAgent.indexOf("Edg") !== -1) {
        browser = "Microsoft Edge";
    } else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) {
        browser = "Internet Explorer";
    }
    return browser;
}

// update system info
function updateDeviceInfo() {
    const osInfo = select('.os-info');
    const languageInfo = select('.language-info');
    const browserInfo = select('.browser-info');

    osInfo.innerText = `OS: ${getOSInfo()}`;
    
    languageInfo.innerText = `Language: ${navigator.language || navigator.userLanguage}`;

    browserInfo.innerText = `Browser: ${getBrowserInfo()}`;
}

window.addEventListener('load', updateDeviceInfo);

//Window info

const pageWidth = select('.page-width');
const pageHeight = select('.page-height');

function readWindow() {
    pageWidth.innerText = `Window width: ${window.innerWidth}px`;   
    pageHeight.innerText = `Window height: ${window.innerHeight}px`;
}

listen('load', window, () => {
    readWindow();
});

listen('resize', window, () => {
    readWindow();
});


// update orientation
function updateOrientation() {
    const orientationType = select('.page-orientation');

    if (screen.orientation) {
        orientationType.innerText = `Orientation: ${screen.orientation.type}`;
    } else {
        orientationType.innerText = `Orientation: ${window.orientation === 0 ? 'Portrait' : 'Landscape'}`;
    }
}

if ('onorientationchange' in window) {
    window.addEventListener('orientationchange', updateOrientation);
}

if (screen.orientation) {
    screen.orientation.addEventListener('change', updateOrientation);
}

window.addEventListener('load', updateOrientation);


//Battery info
function updateBatteryStatus(battery) {
    const batteryLevel = select('.battery-level');
    const chargingStatus = select('.charging-status');

    batteryLevel.innerText = `Level: ${Math.round(battery.level * 100)}%`;
    chargingStatus.innerText = `Status: ${battery.charging ? 'Charging' : 'Idle'}`;
}

function handleBattery(battery) {
    updateBatteryStatus(battery);

    battery.addEventListener('levelchange', () => {
        updateBatteryStatus(battery);
    });
    battery.addEventListener('chargingchange', () => {
        updateBatteryStatus(battery);
    });
}

if ('getBattery' in navigator) {
    navigator.getBattery().then(handleBattery);
} else {
    const batteryLevel = select('.battery-level');
    const chargingStatus = select('.charging-status');

    batteryLevel.innerText = 'This device can not support!';
    chargingStatus.innerText = '';
}


//Network status
const networkStatus = document.querySelector('.network-status');

function updateNetworkStatus() {
    if (navigator.onLine) {
        networkStatus.innerText = "Network Status: Online";  
        networkStatus.style.color = "white";  
    } else {
        networkStatus.innerText = "Network Status: Offline";  
        networkStatus.style.color = "red";  
    }
}

window.addEventListener('load', updateNetworkStatus);

window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);
