import * as React from 'react';
import { Fragment } from 'react';

import { WorkEntry } from '../types';

import { DateRange } from './DateRange';
import { Paragraphs } from './Paragraphs';

interface Props {
    entry: WorkEntry;
}

export function WorkInfo({ entry }: Props) {
    return (
        <Fragment>
            <h4 className="strike-through">
                <span>{entry.name}</span>
                <DateRange startDate={entry.startDate} endDate={entry.endDate} />
            </h4>

            {entry.url && (
                <div className="website pull-right">
                    <a href={entry.url}>{entry.url}</a>
                </div>
            )}

            <div className="position">
                {entry.position}
            </div>

            <div className="summary">
                <Paragraphs text={entry.summary} />
            </div>

            {entry.highlights?.length > 0 && (
                <Fragment>
                    <h4>Highlights</h4>
                    <ul className="highlights">
                        {entry.highlights.map((highlight) => (
                            <li className="bullet">{highlight}</li>
                        ))}
                    </ul>
                </Fragment>
            )}
        </Fragment>
    );
}
