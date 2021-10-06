import * as React from 'react';
import { Fragment } from 'react';

interface Props {
    text: string;
}

export function Paragraphs({ text }: Props) {
    const paragraphs = text.split(/\n/g);

    return (
        <Fragment>
            {paragraphs.map((paragraph: string) => (
                <p>{paragraph}</p>
            ))}
        </Fragment>
    );
}
