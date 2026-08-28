import { SchoolService } from '../Services/SchoolService.js';

export class SchoolController {
  static async handleSchoolSearch(payload) {
    return SchoolService.searchBySchool(payload);
  }

  static async getRegions() {
    return SchoolService.getRegions();
  }

  static async getDistricts(region) {
    return SchoolService.getDistricts(region);
  }

  static async getSchools(region, district) {
    return SchoolService.getSchools(region, district);
  }
}
