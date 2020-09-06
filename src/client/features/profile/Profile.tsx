import * as React from "react";
import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, RootState} from "../../app/store";
import {ProfileState} from "./profile.types";
import {MainContent, SubContent} from "../../components/content";
import {Avatar} from "../../components/avatar/Avatar";
import {fetchProfile} from './profile.slice'
import {Loader} from "../../components/loader";


export const Profile: FC = () => {
    const dispatch = useDispatch<Dispatch>();
    const {profile, loading} = useSelector<RootState, ProfileState>((state) => ({
        profile: state.profileState.profile,
        loading: state.profileState.loading,
    }));

    useEffect(() => {
        dispatch(fetchProfile())
    }, []);

    return <>
        {
            !profile
                ? <div>
                    <Loader/>
                </div>
                : <>
                    <MainContent>
                        <Avatar
                            email={profile.email}
                            userName={profile.username}
                            avatar={profile.avatar}
                            onClick={() => {
                            }}
                        />
                    </MainContent>
                    <SubContent>

                    </SubContent>
                </>
        }
    </>
};