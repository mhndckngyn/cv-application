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
}
