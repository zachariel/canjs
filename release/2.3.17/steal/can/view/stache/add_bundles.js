/*!
 * CanJS - 2.3.17
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Fri, 19 Feb 2016 22:54:51 GMT
 * Licensed MIT
 */

/*can@2.3.17#view/stache/add_bundles*/
steal('@loader', 'can/util/can.js', function (loader, can) {
    return function (dynamicImports, parentName) {
        if (!dynamicImports.length) {
            return Promise.resolve();
        }
        var localLoader = loader.localLoader || loader;
        var bundle = localLoader.bundle;
        if (!bundle) {
            bundle = localLoader.bundle = [];
        }
        var bundleNormalizes = [];
        can.each(dynamicImports, function (moduleName) {
            var bundleNormalize = loader.normalize(moduleName, parentName).then(function (moduleName) {
                if (!~bundle.indexOf(moduleName)) {
                    bundle.push(moduleName);
                }
            });
            bundleNormalizes.push(bundleNormalize);
        });
        return Promise.all(bundleNormalizes);
    };
});