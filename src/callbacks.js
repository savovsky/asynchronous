
// Callbacks

document.querySelector('h3').textContent = 'callbacks';
const btn = document.querySelector('button');
const div = document.querySelector('div');

// helper function - rendering the text
const setText = text => {
    div.textContent = text;
};

const checkAuth = (cb) => {
    setText('Checking Auth...');
    setTimeout(() => {
        cb(true);
    }, 2000);
};

const fetchUser = (cb) => {
    setText('Fetching User...');
    setTimeout(() => {
        cb('User fetched!');
    }, 2000);
};

btn.addEventListener('click', () => {
    checkAuth((auth) => {
        if (auth) {
            fetchUser((user) => {
                setText(user);
            });
        }
    });
});
