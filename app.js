var isWebkit = 'WebkitAppearance' in document.documentElement.style

if (!isWebkit) {
    document.getElementById("nowebkit").style.display = 'block';
    document.getElementById("wolf").style.display = 'none';
}

