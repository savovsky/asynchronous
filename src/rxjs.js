// RxJs

document.querySelector('h3').textContent = 'RxJs';
const btn = document.querySelector('button');
const div = document.querySelector('div');

// helper function - rendering the text
const setText = text => {
    div.textContent = text;
};

const checkAuth = () => {
    return rxjs.Observable.create((observer) => {
        setText('Checking Auth...');
        setTimeout(() => {
            observer.next(true);
        }, 2000);
    });
};

const fetchUser = () => {
    return rxjs.Observable.create((observer) => {
        setText('Fetching User...');
        setTimeout(() => {
            observer.next('User fetched!');
        }, 2000);
    });
};

rxjs.fromEvent(document, 'click')
    .pipe(
        rxjs.operators.switchMap(() => checkAuth()),
        rxjs.operators.switchMap((isAuth) => {
            if (isAuth) {
                return fetchUser();
            }
        })
    )
    .subscribe((user) => {
        setText(user);
    });

