class User {
    constructor() {

    }

    validateUseremail(user_email) {

        return user_email.include("@") ? false : true;

    }

    validatePassword(password) {

        return password.length < 8 ? false : true;
    }

    async signUp(n, m, e, p) {
        //check if user is submitting valid username adn password.
        //u-username.
        //p-password.
        let isValidated = this.validateUseremail(u) && this.validatePassword(p);

        if (isValidated) {
            this.user_name = n;
            this.user_mobile_number = m;
            this.user_email = e;
            this.user_password = p;


            //url-https://masai-api-mocker.herokuapp.com/auth/register

            const register_api = "https://masai-api-mocker.herokuapp.com/auth/register"

            const response = await fetch(register_api, {

                method: "POST",
                body: JSON.stringify(this),

                headers: {
                    'Content-Type': 'application/json',
                },


            });

            const data = await response.json();
            console.log('data:', data);


        }
    }
}

let user = new User()


const Register = () => {

    const new_user = document.getElementById("new_user");

    const name = new_user.user_name.value
    const mobile = new_user.user_mobile_number.value
    const email = new_user.user_email.value
    const password = new_user.user_password.value


    user.signUp(name, mobile, email, password);
    console.log('user:', user);
};