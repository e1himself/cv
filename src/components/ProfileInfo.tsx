import * as React from 'react';
import { Profile } from '../types';

interface Props {
    profile: Profile;
}

export function ProfileInfo({ profile }: Props) {
    return (
        <div className="col-sm-6">
            <strong className="network">{profile.network}</strong>
            <div className="username">
                <div className="url">
                    <a href={profile.url}>{profile.username}</a>
                </div>
            </div>
        </div>
    );
}
