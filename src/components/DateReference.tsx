import * as React from 'react';

interface Props {
    date: Date;
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export function DateReference({ date }: Props) {
    const [iso] = date.toISOString().split('T');
    return (
        <time dateTime={iso}>{`${months[date.getMonth()]} ${date.getFullYear()}`}</time>
    );
}
