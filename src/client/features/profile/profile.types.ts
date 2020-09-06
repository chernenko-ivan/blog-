import {UserClient} from "../../../common/user.types";

export interface ProfileState {
    profile?: UserClient;
    loading: boolean;
}
