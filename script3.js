const userData = [
    // Page 1 Data
    { name: "Arnold Morrison", email: "arnold.morrison@example.com", username: "organicpanda523", country: "Australia" },
    { name: "Melvin Watkins", email: "melvin.watkins@example.com", username: "bluekoala740", country: "United States" },
    { name: "Alicia Menard", email: "alicia.menard@example.com", username: "happyelephant476", country: "Switzerland" },
    { name: "Brian Phillips", email: "brian.phillips@example.com", username: "redzebra971", country: "United States" },
    { name: "Beau Roberts", email: "beau.roberts@example.com", username: "redwolf976", country: "New Zealand" },
    
    // Page 2 Data
    { name: "Vildan Tazegül", email: "vildan.tazegul@example.com", username: "goldenswan681", country: "Turkey" },
    { name: "Sedef Aykaç", email: "sedef.aykac@example.com", username: "angrygoose177", country: "Turkey" },
    { name: "Chloe Mckinney", email: "chloe.mckinney@example.com", username: "smallbutterfly394", country: "United Kingdom" },
    { name: "Chris Peters", email: "chris.peters@example.com", username: "whitebear795", country: "United Kingdom" },
    { name: "Eduard Gonzalez", email: "eduard.gonzalez@example.com", username: "bigmeercat148", country: "Switzerland" },
    
    // Page 3 Data
    { name: "Isla Oja", email: "isla.oja@example.com", username: "bluebear848", country: "Finland" },
    { name: "Fiona Freeman", email: "fiona.freeman@example.com", username: "ticklishfrog519", country: "Ireland" },
    { name: "Ekapad Nair", email: "ekapad.nair@example.com", username: "beautifulpanda877", country: "India" },
    { name: "Albert Jørgensen", email: "albert.jorgensen@example.com", username: "whiteelephant264", country: "Denmark" },
    { name: "Ana Navarro", email: "ana.navarro@example.com", username: "beautifulwolf225", country: "Spain" }
];

let currentPage = 1;
const rowsPerPage = 5;

function displayTable(page) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = userData.slice(start, end);

    paginatedItems.forEach(user => {
        let row = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.country}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    document.getElementById('pageNumber').innerText = page;
    
    // Disable buttons if at start or end
    document.getElementById('prevBtn').disabled = (page === 1);
    document.getElementById('nextBtn').disabled = (page === 3); // 3 pages limit
}

function nextPage() {
    if (currentPage < 3) {
        currentPage++;
        displayTable(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayTable(currentPage);
    }
}

// Dark Mode Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.innerText = isDark ? 'Dark Mode' : 'Light Mode';
});

// Update HTML pagination buttons with IDs
document.querySelector('.pagination').innerHTML = `
    <button id="prevBtn" onclick="prevPage()"><i class="fas fa-chevron-left"></i></button>
    <span id="pageNumber">1</span>
    <button id="nextBtn" onclick="nextPage()"><i class="fas fa-chevron-right"></i></button>
`;

displayTable(currentPage);