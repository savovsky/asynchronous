
// RxJs

document.querySelector('h3').textContent = 'RxJs';
const btn = document.querySelector('button');
const div = document.querySelector('div');

// helper function - rendering the text
const setText = text => {
    div.textContent = text;
};

const checkAuth = () => {
    return new Promise((resolve, reject) => {
        setText('Checking Auth...');
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setText('Fetching User...');
        setTimeout(() => {
            resolve('User fetched!');
        }, 2000);
    });
};

btn.addEventListener('click', () => {
    checkAuth()
        .then((isAuth) => {
            return fetchUser();
        })
        .then((user) => {
            setText(user);
        });
});
