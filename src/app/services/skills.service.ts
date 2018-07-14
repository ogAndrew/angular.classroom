import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: Skill[] = [
        {
            id: 0,
            name: 'Angular',
            level: Level.Beginner
        },
        {
            id: 1,
            name: 'MongoDb',
            level: Level.Intermediate
        },
        {
            id: 2,
            name: 'REACT.js',
            level: Level.Intermediate
        },
        {
          id: 3,
          name: 'Bootstrap',
          level: Level.Intermediate
        },
        { id: 4, 
          name: 'Javascript',
          level: Level.Intermediate
        },
    ];

    getSkills = (): Observable<Skill[]> => {
        return of(this.skills);
    };
    constructor() {}
}
