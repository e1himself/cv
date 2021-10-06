import * as React from 'react';

import { Basics } from '../types';

import { Section } from './Section';

interface Props {
    basics: Basics;
}

export function ContactInfo({ basics }: Props) {
    return (
        <Section id="contact" title="Contact">
            <div className="row">
                <div className="col-sm-6">
                    <strong>Email</strong>
                    <div className="email">
                        <a href={`mailto:${basics.email}`}>{basics.email}</a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
