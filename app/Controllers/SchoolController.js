(function (global) {
  const target = global || globalThis;

  class SchoolController {
    static async handleSchoolSearch(payload) {
      return target.SchoolService.searchBySchool(payload);
    }

    static async getRegions() {
      return target.SchoolService.getRegions();
    }

    static async getDistricts(region) {
      return target.SchoolService.getDistricts(region);
    }

    static async getSchools(region, district) {
      return target.SchoolService.getSchools(region, district);
    }
  }

  target.SchoolController = SchoolController;
})(globalThis);
