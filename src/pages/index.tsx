import * as React from 'react'

import '../styles/style.css';
// import '../styles/print.css';

import {
    ContactInfo,
    EducationInfo,
    Header,
    LanguageInfo,
    Paragraphs,
    ProfileInfo,
    Section,
    SkillInfo,
    WorkInfo,
} from '../components';
import { Resume } from '../types';

const resume: Resume = require('../../resume.json');

export default function IndexPage() {
    const { basics, education, languages, skills, work } = resume;
    return <main>
        <Header basics={basics}/>
        <div id="content" className="container">
            <ContactInfo basics={basics}/>

            <Section id="about" title="About">
                <Paragraphs text={basics.summary} />
            </Section>

            <Section id="profiles" title="Profiles">
                {basics.profiles.map((profile) => (
                    <ProfileInfo profile={profile} />
                ))}
            </Section>

            <Section id="work" title="Work">
                <div className="row">
                    {work.map((entry) => (
                        <div className="col-sm-12">
                           <WorkInfo entry={entry} />
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="education" title="Education">
                <div className="row">
                    {education.map((entry) => (
                        <div className="col-sm-12">
                           <EducationInfo entry={entry} />
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="skills" title="Skills">
                <div className="row">
                    {skills.map((skill) => (
                        <div className="col-sm-6">
                            <SkillInfo entry={skill} />
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="languages" title="Languages">
                <div className="row">
                    {languages.map((entry) => (
                        <div className="col-sm-6">
                            <LanguageInfo entry={entry} />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    </main>
};
