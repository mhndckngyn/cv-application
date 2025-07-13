import { generateId } from '@/helpers/utils';

export default class EducationInfo {
  id: string;
  school: string;
  degree: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;

  constructor() {
    this.id = generateId();
    this.school = '';
    this.degree = '';
    this.city = '';
    this.startDate = '';
    this.endDate = '';
    this.description = '';
  }

  static fromSampleData(
    school: string,
    degree: string,
    city: string,
    startDate: string,
    endDate: string,
    description: string
  ): EducationInfo {
    const instance = new EducationInfo();
    instance.school = school || '';
    instance.degree = degree || '';
    instance.city = city || '';
    instance.startDate = startDate || '';
    instance.endDate = endDate || '';
    instance.description = description || '';
    return instance;
  }
}
