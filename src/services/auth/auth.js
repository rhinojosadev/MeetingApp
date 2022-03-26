import  Error  from '../../utils/error';

export const auth = (name, password) => {
    return fetch('users.json').then(response => {
        return response.json();
      }).then(data => {
        let user = data.users.find(user => user.name === name);
        if (user) {
            if (password === user.password) {
                return true;
            } else {
                return Error.message("the password for the user doesn't match");
            }
        } else {
            return Error.message("user does not exist");
        }
      }).catch(err => {
        return Error.message(err);
      });
}