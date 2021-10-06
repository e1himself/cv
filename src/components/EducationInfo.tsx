import * as React from 'react';
import { EducationEntry } from '../types';
import { Fragment } from 'react';
import { DateRange } from './DateRange';

interface Props {
    entry: EducationEntry;
}

export function EducationInfo({ entry }: Props) {
    return (
        <Fragment>
            <h4 className="strike-through">
                <span>{entry.institution}</span>
                <DateRange startDate={entry.startDate} endDate={entry.endDate} />
            </h4>
            <div className="area">
                {entry.area}
            </div>
            <div className="studyType">
                {entry.studyType}
            </div>
        </Fragment>
    );
}
