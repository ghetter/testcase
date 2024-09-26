async function loadEmployees() {
    const response = await fetch('4kb.json');
    const data = await response.json();
    return data;
}

function displayEmployees(employees) {
    const container = document.getElementById('cards__list');
    container.innerHTML = '';

    employees.forEach(employee => {
        const card = document.createElement('div');
        card.className = 'cards__item card';
        card.style.backgroundColor = `${employee.hexcolor}`;
        card.innerHTML = `
            <div class="card__text-content">
                                    <h3 class="card__title card__customer-name c-name">
                                        ${employee.name} 
                                    </h3>
                                    <div class="card__section card__customer-phone">
                                        <div class="card__section-header">
                                            <div class="card__section-header_body">
                                                <img src="icons/phone.png" alt="">
                                                Телефон
                                            </div>
                                        </div>
                                        <div class="card__section-info c-phone">
                                            ${employee.phoneNumber}
                                        </div>
                                    </div>
                                    
                                    <div class="card__section card__customer-email">
                                        <div class="card__section-header">
                                            <div class="card__section-header_body">    
                                                <img src="icons/email.png" alt="">
                                                Email
                                            </div>
                                        </div>
                                        <div class="card__section-info c-email">
                                            ${employee.email}
                                        </div>
                                    </div>
                                    <div class="card__section card__customer-address">
                                        <div class="card__section-header">
                                            <div class="card__section-header_body">
                                                <img src="icons/address.png" alt="">
                                                Адрес
                                            </div>
                                        </div>
                                        <div class="card__section-info c-address">
                                            ${employee.address}
                                        </div>
                                    </div>
                                </div> 
        `;
        container.appendChild(card);
    });

}

function filterEmployees(employees) {
    const searchInput = document.getElementById('cards__search');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredEmployees = employees.filter(employee =>
            (employee.name && employee.name.toLowerCase().includes(searchTerm)) ||
            (employee.email && employee.email.toLowerCase().includes(searchTerm)) ||
            (employee.phoneNumber && employee.phoneNumber.toLowerCase().includes(searchTerm)) ||
            (employee.address && employee.address.toLowerCase().includes(searchTerm))
        );
        
        displayEmployees(filteredEmployees);
    });
}

async function main() {
    const employees = await loadEmployees();
    displayEmployees(employees);
    filterEmployees(employees);
}

main();

