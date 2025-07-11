import { generateId } from '@/helpers/utils';

export default class CertificationInfo {
  id: string;
  name: string;
  issuer: string;
  date: string;

  constructor() {
    this.id = generateId();
    this.name = '';
    this.issuer = '';
    this.date = '';
  }
}
