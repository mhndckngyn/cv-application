import { generateId } from '@/helpers/utils';

export default class TechnicalInfo {
  id: string;
  groupName: string;
  skills: {
    id: string;
    skill: string;
  }[];

  constructor() {
    this.id = generateId();
    this.groupName = '';
    this.skills = [];
  }

  static fromSampleData(groupName: string, skills: string[]): TechnicalInfo {
    const instance = new TechnicalInfo();
    instance.groupName = groupName || '';
    instance.skills = skills.map((skill) => ({
      id: generateId(),
      skill: skill || '',
    }));
    return instance;
  }
}
