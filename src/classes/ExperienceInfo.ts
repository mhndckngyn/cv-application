import { generateId } from '@/helpers/utils';

export default class ExperienceInfo {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  toPresent: boolean;
  responsibilities: {
    id: string;
    responsibility: string;
  }[];

  constructor() {
    this.id = generateId();
    this.jobTitle = '';
    this.company = '';
    this.startDate = '';
    this.endDate = '';
    this.toPresent = false;
    this.responsibilities = [];
  }

  static fromSampleData(
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string,
    toPresent: boolean,
    responsibilities: string[]
  ): ExperienceInfo {
    const instance = new ExperienceInfo();
    instance.jobTitle = jobTitle || '';
    instance.company = company || '';
    instance.startDate = startDate || '';
    instance.endDate = endDate || '';
    instance.toPresent = toPresent || false;
    instance.responsibilities = responsibilities.map((resp) => ({
      id: generateId(),
      responsibility: resp || '',
    }));
    return instance;
  }
}
