import * as React from 'react';
import { SkillEntry } from '../types';
import { Fragment } from 'react';

interface Props {
    entry: SkillEntry;
}

export function SkillInfo({ entry }: Props) {
    return (
        <Fragment>
            <div className="name">
                <h4>Software architecture</h4>
            </div>
            <ul className="keywords">
                {entry.keywords.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </Fragment>
    );
}
