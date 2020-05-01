class UserPojo {
    constructor() {
        this._id = "_id";
        this.name = "name";
        this.email = "email";
        this.isActive = "isActive";
    }
    setId(_id){ this._id = _id;}
    setUserId(userId){ this.userId = userId;}
    setName(name){ this.name = name;}
    setEmail(email){ this.email = email;}
    setStatus(isActive){ this.isActive = isActive;}
}
export {UserPojo};
