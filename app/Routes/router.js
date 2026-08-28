(function (global) {
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
    return global.ResultService.getSearchResult(payload);
  });

  router.register('POST', '/search/school', async function (payload) {
    return global.ResultService.getSchoolResult(payload);
  });

  router.register('GET', '/locations/regions', function () {
    return {
      ok: true,
      data: global.SearchService.getMockData().regions
    };
  });

  router.register('GET', '/locations/districts', function (payload) {
    const region = payload?.region || '';
    const result = global.SearchService.getMockData().regions.find(function (item) {
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
    const regions = global.SearchService.getMockData().regions;
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

  global.ResultsFinderRouter = router;
})(window);
