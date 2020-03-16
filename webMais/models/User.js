class User {

    constructor(cod, name, com, alt, lar, pro, gender, country, password, photo) {

        this._id;
        this._cod = cod;
        this._name = name;
        this._com = com;
        this._alt = alt;
        this._lar = lar;
        this._pro = pro;
        this._gender = gender;
        // this._birth = birth;
        this._country = country;
        this._password = password;
        this._photo = photo;
        this._register = new Date();

    }

    get id() {
        return this._id;
    }

    get register() {
        return this._register;
    }

    get cod() {
        return this._cod;
    }

    get name() {
        return this._name;
    }

    get com() {
        return this._com;
    }

    get alt() {
        return this._alt;
    }
    get lar() {
        return this._lar;
    }
    get pro() {
        return this._pro;
    }

    get gender() {
        return this._gender;
    }

    // get birth() {
    //     return this._birth;
    // }

    get country() {
        return this._country;
    }

    get photo() {
        return this._photo;
    }

    get password() {
        return this._password;
    }



    set photo(value) {
        this._photo = value;
    }

    loadFromJSON(json) {

        for (let name in json) {

            switch (name) {

                case '_register':
                    this[name] = new Date(json[name]);
                    break;
                default:
                    this[name] = json[name];

            }


        }

    }

    static getUsersStorage() {

        let users = [];

        if (localStorage.getItem("users")) {

            users = JSON.parse(localStorage.getItem("users"));

        }

        return users;

    }

    getNewID() {

        let usersID = parseInt(localStorage.getItem("usersID"));

        if (!usersID > 0) usersID = 0;

        usersID++;

        localStorage.setItem("usersID", usersID);

        return usersID;

    }

    save() {

        let users = User.getUsersStorage();

        if (this.id > 0) {

            users.map(u => {

                if (u._id == this.id) {

                    Object.assign(u, this);

                }

                return u;

            });

        } else {

            this._id = this.getNewID();

            users.push(this);

        }

        localStorage.setItem("users", JSON.stringify(users));

    }

    remove() {

        let users = User.getUsersStorage();

        users.forEach((userData, index) => {

            if (this._id == userData._id) {

                users.splice(index, 1);

            }

        });

        localStorage.setItem("users", JSON.stringify(users));

    }

}