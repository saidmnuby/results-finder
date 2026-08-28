(function (global) {
  const target = global || globalThis;

  class Router {
    constructor() {
      this.routes = new Map();
    }

    register(method, path, handler) {
      this.routes.set(method.toUpperCase() + ':' + path, handler);
    }

    resolve(method, path, payload) {
      const key = method.toUpperCase() + ':' + path;
      const handler = this.routes.get(key);

      if (!handler) {
        return {
          ok: false,
          status: 'not_found',
          message: 'Route not found.'
        };
      }

      return handler(payload);
    }
  }

  const router = new Router();

  router.register('POST', '/search/index', async function (payload) {
    return target.ResultService.getSearchResult(payload);
  });

  router.register('POST', '/search/school', async function (payload) {
    return target.ResultService.getSchoolResult(payload);
  });

  router.register('GET', '/locations/regions', function () {
    return {
      ok: true,
      data: target.MetadataDatabase
        ? target.MetadataDatabase.getRegions()
        : target.SearchService.getMockData().regions
    };
  });

  router.register('GET', '/locations/districts', function (payload) {
    const region = payload?.region || '';

    if (target.MetadataDatabase) {
      return { ok: true, data: target.MetadataDatabase.getDistricts(region) };
    }

    const result = target.SearchService.getMockData().regions.find(function (item) {
      return item.name === region;
    });

    return {
      ok: true,
      data: result ? result.districts : []
    };
  });

  router.register('GET', '/locations/schools', function (payload) {
    const region = payload?.region || '';
    const district = payload?.district || '';

    if (target.MetadataDatabase) {
      return { ok: true, data: target.MetadataDatabase.getSchools(region, district) };
    }

    const regions = target.SearchService.getMockData().regions;
    const selectedRegion = regions.find(function (item) {
      return item.name === region;
    });

    if (!selectedRegion) {
      return { ok: true, data: [] };
    }

    const selectedDistrict = selectedRegion.districts.find(function (item) {
      return item.name === district;
    });

    return {
      ok: true,
      data: selectedDistrict ? selectedDistrict.schools : []
    };
  });

  target.ResultsFinderRouter = router;
})(globalThis);
