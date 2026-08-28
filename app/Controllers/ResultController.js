import { SearchService } from '../Services/SearchService.js';

export class ResultController {
  static async getResultByIndex(payload) {
    return SearchService.searchByIndex(payload);
  }

  static async getSchoolResult(payload) {
    return SearchService.searchBySchool(payload);
  }
}
