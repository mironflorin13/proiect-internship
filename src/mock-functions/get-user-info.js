import { getUser } from "../data/users";

const getUserInfo = id => Promise.resolve(getUser(id));

export default getUserInfo;
