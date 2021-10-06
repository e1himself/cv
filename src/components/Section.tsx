import * as React from 'react';
import { ReactNode } from 'react';

interface Props {
    id: string;
    title: string;
    children: ReactNode;
}

export function Section({ id, title, children }: Props) {
    return (
        <section id={id} className="row">
            <aside className="col-sm-3">
                <h3>{title}</h3>
            </aside>
            <div className="col-sm-9">
                {children}
            </div>
        </section>
    );
}
