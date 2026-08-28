import { SearchService } from '../Services/SearchService.js';
import { InputValidator } from '../Security/InputValidator.js';

export class SearchController {
  static async handleIndexSearch(payload) {
    const validation = InputValidator.validateIndexNumber(payload?.indexNumber);

    if (!validation.valid) {
      return {
        ok: false,
        status: 'validation_error',
        message: validation.message
      };
    }

    return SearchService.searchByIndex({
      examination: payload?.examination || 'CSEE',
      year: payload?.year || '2025',
      indexNumber: validation.value
    });
  }
}
