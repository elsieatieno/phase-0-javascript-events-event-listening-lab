input = document.getElementById('button');
sinon.spy(input, 'addEventListener');

function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        addingEventListener();
    });
}

