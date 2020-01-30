// pop up window
export function popUpWindow(elemForAppending, responseFromDB) {
    if (!document.getElementById('showSeasonsDiv')) {
        let showSeasonsDiv = document.createElement('div');
        let showSeasonsUl = document.createElement('ul');
        showSeasonsDiv.appendChild(showSeasonsUl);
        showSeasonsDiv.setAttribute('id', 'showSeasonsDiv');
        showSeasonsDiv.classList.add('showSeasonsDiv');

        for (let season of responseFromDB) {
            let showSeasonsLi = document.createElement('li');
            showSeasonsUl.appendChild(showSeasonsLi);
            showSeasonsLi.textContent = season['title'];
        }
        elemForAppending.appendChild(showSeasonsDiv);
    } else {
        document.getElementById('showSeasonsDiv').remove();
    }
    // change color of a background
    let wrapper = document.getElementsByClassName('card')[1].classList.toggle('wrapper');
}

// create table of shows by a genre
export function createTableSHowsByGenre(showGenreLi, responseData) {
    for (let show of responseData) {
        let showsTable = document.getElementById('shows_table');
        let showRow = document.createElement('tr');
        console.log();
        showRow.classList.add('showInfo');
        showRow.innerHTML = `
            <tr>
                <td>${show['title']}</td>
                <td>${show['year'].slice(0,4)}</td>
                <td>${show['rating'].slice(0,3)}</td>
                <td>${show['runtime']}</td>
                <td>${show['trailer']}</td>
                <td>${show['homepage']}</td>
            </tr>
        `;
        showsTable.appendChild(showRow);
    }
    document.getElementById('genre_name').innerHTML =`"${showGenreLi.getAttribute('data-genre')}"`;
    showGenreLi.style.backgroundColor = '#3fdae8';
}

// delete old shows for displaying new info
export function removeElemByClass(elemClass) {
    let elemsByClass = document.getElementsByClassName(elemClass);
    if (elemsByClass) {
        for (let i = elemsByClass.length-1; i >= 0; i--) {
            elemsByClass[i].remove();
        }
    }
}

// create table of all shows
export function createTableAllShows(responseData) {
    for(let show of responseData) {
        let showsTable = document.getElementById('shows_table');
        let showRow = document.createElement('tr');
        console.log();
        showRow.classList.add('showInfo');
        showRow.innerHTML = `
            <tr>
                <td>${show['title']}</td>
                <td>${show['year'].slice(0,4)}</td>
                <td>${show['rating'].slice(0,3)}</td>
                <td>${show['runtime']}</td>
                <td>${show['trailer']}</td>
                <td>${show['homepage']}</td>
            </tr>
        `;
        showsTable.appendChild(showRow);
    }
}