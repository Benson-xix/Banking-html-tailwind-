function removeEditableElements(wrapper) {
    if (wrapper && wrapper.parentNode) {
        wrapper.parentNode.removeChild(wrapper);
    }
}

document.querySelectorAll('[data-edit-id="editName"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.classList.add('custom-input-style');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.classList.add('custom-button-style');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('custom-button-style');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});

document.querySelectorAll('[data-edit-id="editFirstName"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.classList.add('custom-input-style');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.classList.add('custom-button-style');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('custom-button-style');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});

document.querySelectorAll('[data-edit-id="editEmail"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});

document.querySelectorAll('[data-edit-id="editLastName"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});

document.querySelectorAll('[data-edit-id="editPhone"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});

document.querySelectorAll('[data-edit-id="editCountry"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.classList.add('custom-input-style');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.classList.add('custom-button-style');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('custom-button-style');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});

document.querySelectorAll('[data-edit-id="editCityState"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});
document.querySelectorAll('[data-edit-id="editPostalCode"]').forEach((button) => {
    button.addEventListener('click', function () {
        const editId = button.getAttribute('data-edit-id');
        const targetElement = document.getElementById(editId);
        const originalContent = targetElement.textContent;

        // Add your logic for the My Profile section here

        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('value', originalContent);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', function () {
            targetElement.textContent = inputField.value;
            const wrapper = saveButton.parentNode;
            removeEditableElements(wrapper);
            localStorage.setItem(editId, inputField.value); // Update the value in local storage
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', function () {
            targetElement.textContent = originalContent;
            const wrapper = cancelButton.parentNode;
            removeEditableElements(wrapper);
        });

        // Add the logic for the My Profile section here

        const wrapper = document.createElement('div');
        wrapper.appendChild(inputField);
        wrapper.appendChild(saveButton);
        wrapper.appendChild(cancelButton);

        targetElement.textContent = '';
        targetElement.appendChild(wrapper);
    });
});

