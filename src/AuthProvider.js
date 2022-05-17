// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: ({username, password}) => {
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('username', username);
            return Promise.resolve();
        }
        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
};
