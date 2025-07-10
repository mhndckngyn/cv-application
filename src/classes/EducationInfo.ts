import { generateId } from '@/utils';

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
}
