export const users = (req, res) => res.send("USERS");
export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.send("LOGOUT");

export const userDetail = (req, res) => res.send("USER DETAIL");
export const editDetail = (req, res) => res.send("EDIT DETAIL");
export const changePassword = (req, res) => res.send("CHANGE PASSWORD");
