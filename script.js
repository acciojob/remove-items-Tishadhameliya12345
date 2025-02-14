//your JS code here. If required.

    const colorSelect = document.getElementById("colorSelect");
    const removeButton = document.querySelector('input');

    removeButton.addEventListener("click", ()=> {
        const selectedOption = colorSelect.selectedIndex;
		colorSelect.remove(selectedOption);
    });
