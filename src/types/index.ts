export interface Resume {
    basics: {
        name: string;
        label: string;
        email: string;
        url: string;
        summary: string;
        location: {
            countryCode: string;
            city: string;
        },
        profiles: {
            network: string;
            username: string;
            url: string;
        }[],
    },
    work: {
        name: string;
        url: string;
        position: string;
        location: string;
        startDate: string;
        endDate?: string;
        summary: string;
        highlights: string[];
    }[],
    skills: {
        name: string;
        level: string;
        keywords: string[];
    }[],
    education: {
        institution: string;
        url: string;
        area: string;
        studyType: string;
        startDate: string;
        endDate: string;
    }[],
    languages: {
        language: string;
        fluency: string;
    }[],
}

export type Basics = Resume['basics'];
export type EducationEntry = Resume['education'][number];
export type LanguageEntry = Resume['languages'][number];
export type Profile = Resume['basics']['profiles'][number];
export type SkillEntry = Resume['skills'][number];
export type WorkEntry = Resume['work'][number];
