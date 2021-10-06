import * as React from 'react';
import { Fragment } from 'react';

import { LanguageEntry } from '../types';

interface Props {
    entry: LanguageEntry;
}

export function LanguageInfo({ entry }: Props) {
    return (
       <Fragment>
           <div className="language">
               <strong>{entry.language}</strong>
           </div>
           <div className="fluency">
               {entry.fluency}
           </div>
       </Fragment>
    );
}
