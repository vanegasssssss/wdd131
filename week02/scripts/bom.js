    const inputchart = document.querySelector("#favchap");
    const buttonA = document.querySelector("button");
    const listing = document.querySelector("#list");

    function addItem() {
        if (inputchart.value.trim() === '') {
            alert('Please enter a book and chapter.');
            inputchart.focus();
            return;  // Stop the function if the input is empty
        }


    const liCreation = document.createElement('li');
    const dontknowspan = document.createElement('span');
    const deleteButton = document.createElement('button');

    listing.appendChild(liCreation);

    dontknowspan.textContent = inputchart.value;
    liCreation.appendChild(dontknowspan);

    deleteButton.textContent = "❌";
    liCreation.appendChild(deleteButton);

    deleteButton.onclick = function() {
        liCreation.remove();
    }

    inputchart.value = '';

    inputchart.focus();

    }

    buttonA.onclick = addItem;

    inputchart.addEventListener ('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
    })

