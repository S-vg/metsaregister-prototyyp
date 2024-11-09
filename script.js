function showMainPage() {
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.main-page').style.display = 'flex';
}

function openPropertyDetails(propertyName) {
    document.querySelector('.main-page').style.display = 'none';
    document.querySelector('.property-details').style.display = 'block';
    document.querySelector('.property-details h3').textContent = propertyName + " – Detailvaade";
}

function saveNotes() {
    alert("Märkmed salvestatud!");
}
