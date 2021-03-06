import {Student} from './studentClass';

export class Section {
  id: number;
  name: string;
  courseNum: number;
  roster: Array<Student>;
  topics: Array<String>;

  constructor(name: string, coursNum: number,topics: Array<String>, roster?: Array<Student>) {
    this.name = name;
    this.courseNum = coursNum;
    this.roster = roster;
    this.topics = topics;
  }
}

