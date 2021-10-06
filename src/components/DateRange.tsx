import * as React from 'react';
import { DateReference } from './DateReference';

interface Props {
    startDate: string;
    endDate?: string;
}

export function DateRange({ startDate, endDate }: Props) {
    return (
        <span className='date'>
            <DateReference date={new Date(startDate)} />
            —
            {endDate ? <DateReference date={new Date(endDate)} /> : 'Present'}
        </span>
    );
}
