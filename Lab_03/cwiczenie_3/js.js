const tableContent = document.getElementById('tableContent');
const searchInput = document.getElementById('searchInput');
const select = document.getElementById('select');
let products = [];
let originalOrderProducts = [];

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    products = data.products.slice(0, 30);
    originalOrderProducts = [...products]; 
    render(products);
}

function render(data) {
    tableContent.innerHTML = '';
    data.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.thumbnail}" alt="Img"></td>
            <td>${product.title}</td>
            <td>${product.description}</td>
        `;
        tableContent.appendChild(row);
    });
}

function filterProducts() {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    render(filtered);
}


function sortList() {
    const selectedOption = select.value;
    if (selectedOption === 'originalOrder') {
        products = [...originalOrderProducts];
    } else if (selectedOption === 'ascendingOrder') {
        products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedOption === 'descendingOrder') {
        products.sort((a, b) => b.title.localeCompare(a.title));
    }
    render(products);
}


searchInput.addEventListener('input', filterProducts);
select.addEventListener('change', sortList);


fetchData();