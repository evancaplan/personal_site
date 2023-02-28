exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 3468:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(2700);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 4465:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(2700);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 227:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 9749:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(6689));
var _head = _interop_require_default(__webpack_require__(3121));
var _imageBlurSvg = __webpack_require__(4486);
var _imageConfig = __webpack_require__(5843);
var _imageConfigContext = __webpack_require__(744);
var _warnOnce = __webpack_require__(618);
var _imageLoader = _interop_require_default(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number" || typeof x === "undefined") {
        return x;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentNode) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current(_extends({}, event, {
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            }));
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
const ImageElement = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , className , imgStyle , blurStyle , isLazy , fill , placeholder , loading , srcString , config , unoptimized , loader , onLoadRef , onLoadingCompleteRef , setBlurComplete , setShowAltText , onLoad , onError  } = _param, rest = _object_without_properties_loose(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "fill",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadRef",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setShowAltText",
        "onLoad",
        "onError"
    ]);
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, {
        // @ts-ignore - TODO: upgrade to `@types/react@17`
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: _extends({}, imgStyle, blurStyle)
    }, imgAttributes, {
        ref: (0, _react).useCallback((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })));
});
const Image = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { src , sizes , unoptimized =false , priority =false , loading , className , quality , width , height , fill , style , onLoad , onLoadingComplete , placeholder ="empty" , blurDataURL , layout , objectFit , objectPosition , lazyBoundary , lazyRoot  } = _param, all = _object_without_properties_loose(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "className",
        "quality",
        "width",
        "height",
        "fill",
        "style",
        "onLoad",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL",
        "layout",
        "objectFit",
        "objectPosition",
        "lazyBoundary",
        "lazyRoot"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return _extends({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageLoader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        var _tmp;
        _tmp = (obj)=>{
            const { config: _  } = obj, opts = _object_without_properties_loose(obj, [
                "config"
            ]);
            return customImageLoader(opts);
        }, loader = _tmp, _tmp;
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = _extends({}, style, layoutStyle);
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const [blurComplete, setBlurComplete] = (0, _react).useState(false);
    const [showAltText, setShowAltText] = (0, _react).useState(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,${(0, _imageBlurSvg).getImageBlurSvg({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        })}")`
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const linkProps = {
        // @ts-expect-error upgrade react types to react 18
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin
    };
    const onLoadRef = (0, _react).useRef(onLoad);
    (0, _react).useEffect(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = _extends({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs, {
        ref: forwardedRef
    })), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src
    }, linkProps))) : null);
});
var _default = Image;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 1551:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
var _resolveHref = __webpack_require__(7782);
var _isLocalUrl = __webpack_require__(1109);
var _formatUrl = __webpack_require__(3938);
var _utils = __webpack_require__(9232);
var _addLocale = __webpack_require__(4465);
var _routerContext = __webpack_require__(4964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(9246);
var _getDomainLocale = __webpack_require__(227);
var _addBasePath = __webpack_require__(3468);
const prefetched = new Set();
function prefetch(router, href, as, options, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _isLocalUrl).isLocalURL(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _isLocalUrl).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        // @ts-expect-error startTransition exists.
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formatUrl).formatUrl(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    const pagesRouter = _react.default.useContext(_routerContext.RouterContext);
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    const { href , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolveHref).resolveHref(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolveHref).resolveHref(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) { var ref; }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils).isAbsoluteUrl(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getDomainLocale).getDomainLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2700:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 4686:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 9246:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(6689);
var _requestIdleCallback = __webpack_require__(4686);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react).useState(false);
    const elementRef = (0, _react).useRef(null);
    const setElement = (0, _react).useCallback((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 2749:
/***/ (() => {



/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(9749)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1551)


/***/ }),

/***/ 9339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NJ": () => (/* binding */ getTags),
/* harmony export */   "Vl": () => (/* binding */ split)
/* harmony export */ });
/* unused harmony export getStaticTags */
// src/utils/get-tags.ts
function split(tags = "") {
  return (Array.isArray(tags) ? tags : tags.split(",")).map((s) => s.trim());
}
var flattenPageMap = (page, result = []) => {
  if (Array.isArray(page.children)) {
    page.children.forEach((p) => flattenPageMap(p, result));
  }
  result.push(page);
};
var flattenPageMaps = (pages, result = []) => {
  pages.forEach((v) => flattenPageMap(v, result));
};
var getStaticTags = (pageMap) => {
  const result = [];
  flattenPageMaps(pageMap, result);
  return Array.from(new Set(result.map(getTags).flat(1).filter(Boolean)));
};
function getTags(page) {
  if (!page.frontMatter) {
    return [];
  }
  return split(page.frontMatter.tag);
}




/***/ }),

/***/ 6807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FF": () => (/* binding */ useBlogContext),
/* harmony export */   "JW": () => (/* binding */ BlogProvider),
/* harmony export */   "Tl": () => (/* binding */ sortDate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// src/blog-context.tsx


// src/utils/date.ts
var sortDate = (a, b) => {
  var _a, _b;
  if (!((_a = a.frontMatter) == null ? void 0 : _a.date) || !((_b = b.frontMatter) == null ? void 0 : _b.date))
    return -1;
  return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
};
var DATE_REGEX = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?(:\d{2}\.\d{3}Z)?$/;
var DATE_REGEX_WITH_SLASH = /^\d{4}\/\d{1,2}\/\d{1,2}( \d{1,2}:\d{1,2})?$/;
var isValidDate = (date) => DATE_REGEX.test(date) || DATE_REGEX_WITH_SLASH.test(date);

// src/blog-context.tsx

var BlogContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var BlogProvider = ({
  config,
  children,
  opts
}) => {
  const { date } = opts.frontMatter;
  if (date && !isValidDate(date)) {
    throw new Error(
      `Invalid date "${date}". Provide date in "YYYY/M/D", "YYYY/M/D H:m", "YYYY-MM-DD", "[YYYY-MM-DD]T[HH:mm]" or "[YYYY-MM-DD]T[HH:mm:ss.SSS]Z" format.`
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlogContext.Provider, {
    value: { config, opts },
    children
  });
};
var useBlogContext = () => {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BlogContext);
  if (!value) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return value;
};




/***/ }),

/***/ 1605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EZ": () => (/* binding */ __spreadProps),
/* harmony export */   "S0": () => (/* binding */ __objRest),
/* harmony export */   "ih": () => (/* binding */ __spreadValues)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




/***/ }),

/***/ 3242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6807);
/* harmony import */ var _chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9339);
/* harmony import */ var _chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1605);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextra_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1181);
/* harmony import */ var nextra_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5053);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nextra_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9081);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_icons__WEBPACK_IMPORTED_MODULE_2__, nextra_hooks__WEBPACK_IMPORTED_MODULE_3__, nextra_mdx__WEBPACK_IMPORTED_MODULE_8__, nextra_components__WEBPACK_IMPORTED_MODULE_10__]);
([nextra_icons__WEBPACK_IMPORTED_MODULE_2__, nextra_hooks__WEBPACK_IMPORTED_MODULE_3__, nextra_mdx__WEBPACK_IMPORTED_MODULE_8__, nextra_components__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// src/index.tsx


// src/meta.tsx


// src/theme-switch.tsx




function ThemeSwitch() {
  const { setTheme, resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_3__.useMounted)();
  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
    role: "button",
    "aria-label": "Toggle Dark Mode",
    className: "nx-cursor-pointer nx-p-2 nx-text-current",
    tabIndex: 0,
    onClick: toggleTheme,
    onKeyDown: (e) => {
      if (e.key === "Enter")
        toggleTheme();
    },
    children: mounted && isDark ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_2__.MoonIcon, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_2__.SunIcon, {})
  });
}

// src/utils/traverse.ts
function traverse(pageMap, matcher) {
  for (const pageMapItem of pageMap) {
    if (matcher(pageMapItem)) {
      return pageMapItem;
    }
  }
  for (const item of pageMap) {
    if (item.kind === "Folder") {
      const matched = traverse(item.children, matcher);
      if (matched) {
        return matched;
      }
    }
  }
  return null;
}

// src/utils/parent.ts
var getParent = ({ opts }) => {
  let back = null;
  const parentPages = [];
  const { route } = opts;
  traverse(opts.pageMap, (page) => {
    if ("route" in page && route !== page.route && (route + "/").startsWith(page.route === "/" ? "/" : page.route + "/")) {
      parentPages.push(page);
    }
  });
  const parentPage = parentPages.reverse().find(
    (page) => "frontMatter" in page && page.frontMatter && page.frontMatter.type === "posts"
  );
  if (parentPage) {
    back = parentPage.route;
  }
  return { parentPage, back };
};

// src/meta.tsx

function Meta() {
  var _a;
  const { opts, config } = (0,_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .useBlogContext */ .FF)();
  const { author, date, tag } = opts.frontMatter;
  const { back } = getParent({ opts, config });
  const tags = tag ? (0,_chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_6__/* .split */ .Vl)(tag) : [];
  const tagsEl = tags.map((t) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/tags/[tag]",
    as: `/tags/${t}`,
    passHref: true,
    legacyBehavior: true,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      className: "\n          nx-select-none\n          nx-rounded-md\n          nx-bg-gray-200\n          nx-px-1\n          nx-text-sm\n          nx-text-gray-400\n          nx-transition-colors\n          hover:nx-bg-gray-300\n          hover:nx-text-gray-500\n          dark:nx-bg-gray-600\n          dark:nx-text-gray-300\n          dark:hover:nx-bg-gray-700\n          dark:hover:nx-text-gray-200\n        ",
      children: t
    })
  }, t));
  const readingTime = (_a = opts.readingTime) == null ? void 0 : _a.text;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "nx-mb-8 nx-flex nx-gap-3 " + (readingTime ? "nx-items-start" : "nx-items-center"),
    children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "nx-grow nx-text-gray-400",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "nx-not-prose nx-flex nx-flex-wrap nx-items-center nx-gap-1",
            children: [
              author,
              author && date && ",",
              date && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("time", {
                dateTime: new Date(date).toISOString(),
                children: new Date(date).toDateString()
              }),
              (author || date) && (readingTime || tags.length > 0) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "nx-px-1",
                children: "\u2022"
              }),
              readingTime || tagsEl
            ]
          }),
          readingTime && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "nx-not-prose nx-mt-1 nx-flex nx-flex-wrap nx-items-center nx-gap-1",
            children: tagsEl
          })
        ]
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "nx-flex nx-items-center nx-gap-3 print:nx-hidden",
        children: [
          back && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: back,
            passHref: true,
            legacyBehavior: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              children: "Back"
            })
          }),
          config.darkMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ThemeSwitch, {})
        ]
      })
    ]
  });
}

// src/mdx-theme.tsx






var HeadingContext = (0,react__WEBPACK_IMPORTED_MODULE_7__.createContext)((0,react__WEBPACK_IMPORTED_MODULE_7__.createRef)());
var H1 = ({ children }) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(HeadingContext);
  const { opts } = (0,_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .useBlogContext */ .FF)();
  const [showHeading, setShowHeading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (ref.current && opts.hasJsxInH1) {
      setShowHeading(true);
    }
  }, [opts.hasJsxInH1, ref]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: showHeading && (0,react_dom__WEBPACK_IMPORTED_MODULE_9__.createPortal)(children, ref.current)
  });
};
function HeadingLink(_a) {
  var _b = _a, {
    tag: Tag,
    children,
    id
  } = _b, props = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__objRest */ .S0)(_b, [
    "tag",
    "children",
    "id"
  ]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Tag, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
    className: `subheading-${Tag}`
  }, props), {
    children: [
      children,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "nx-absolute -nx-mt-7",
        id
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
        href: id && `#${id}`,
        className: "subheading-anchor",
        "aria-label": "Permalink for this section"
      })
    ]
  }));
}
var A = (_a) => {
  var _b = _a, { children } = _b, props = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__objRest */ .S0)(_b, ["children"]);
  var _a2, _b2;
  const isExternal = ((_a2 = props.href) == null ? void 0 : _a2.startsWith("https://")) || ((_b2 = props.href) == null ? void 0 : _b2.startsWith("http://"));
  if (isExternal) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
      target: "_blank",
      rel: "noreferrer"
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "nx-sr-only",
          children: " (opens in a new tab)"
        })
      ]
    }));
  }
  return props.href ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: props.href,
    passHref: true,
    legacyBehavior: true,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({}, props), {
      children
    }))
  }) : null;
};
var useComponents = () => {
  const { config } = (0,_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .useBlogContext */ .FF)();
  return (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
    h1: H1,
    h2: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
      tag: "h2"
    }, props)),
    h3: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
      tag: "h3"
    }, props)),
    h4: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
      tag: "h4"
    }, props)),
    h5: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
      tag: "h5"
    }, props)),
    h6: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
      tag: "h6"
    }, props)),
    a: A,
    pre: (_a) => {
      var _b = _a, { children } = _b, props = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__objRest */ .S0)(_b, ["children"]);
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "nx-not-prose",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(nextra_components__WEBPACK_IMPORTED_MODULE_10__.Pre, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({}, props), {
          children
        }))
      });
    },
    tr: nextra_components__WEBPACK_IMPORTED_MODULE_10__.Tr,
    th: nextra_components__WEBPACK_IMPORTED_MODULE_10__.Th,
    td: nextra_components__WEBPACK_IMPORTED_MODULE_10__.Td,
    table: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(nextra_components__WEBPACK_IMPORTED_MODULE_10__.Table, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({
      className: "nx-not-prose"
    }, props)),
    code: nextra_components__WEBPACK_IMPORTED_MODULE_10__.Code
  }, config.components);
};
var MDXTheme = ({
  children
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(nextra_mdx__WEBPACK_IMPORTED_MODULE_8__.MDXProvider, {
    components: useComponents(),
    children
  });
};

// src/basic-layout.tsx



var BasicLayout = ({ children }) => {
  var _a;
  const { config, opts } = (0,_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .useBlogContext */ .FF)();
  const title = `${opts.title}${config.titleSuffix || ""}`;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("article", {
    className: "nx-container nx-prose-sm dark:nx-prose-dark md:nx-prose",
    dir: "ltr",
    children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
            children: title
          }),
          (_a = config.head) == null ? void 0 : _a.call(config, { title, meta: opts.frontMatter })
        ]
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(HeadingContext.Provider, {
        value: ref,
        children: [
          opts.hasJsxInH1 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
            ref
          }) : null,
          opts.hasJsxInH1 ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
            children: opts.title
          }),
          children,
          config.footer
        ]
      })
    ]
  });
};

// src/article-layout.tsx

var ArticleLayout = ({ children }) => {
  const { config } = (0,_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .useBlogContext */ .FF)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(BasicLayout, {
    children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Meta, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(MDXTheme, {
        children: [
          children,
          config.postFooter,
          config.comments
        ]
      })
    ]
  });
};

// src/posts-layout.tsx



// src/nav.tsx


// src/utils/collect.ts
var isNav = (page) => {
  var _a;
  const type = "frontMatter" in page && ((_a = page.frontMatter) == null ? void 0 : _a.type);
  return type && ["page", "posts"].includes(type);
};
var isPost = (page) => {
  var _a;
  if (page.kind === "Folder" || page.kind === "Meta" || page.name.startsWith("_"))
    return false;
  const type = (_a = page.frontMatter) == null ? void 0 : _a.type;
  return !type || type === "post";
};
var collectPostsAndNavs = ({ opts }) => {
  const posts = [];
  const navPages = [];
  const { route } = opts;
  traverse(opts.pageMap, (page) => {
    if (isNav(page)) {
      navPages.push((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({}, page), { active: page.route === route }));
    }
    if (isPost(page)) {
      posts.push(page);
    }
  });
  posts.sort(_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .sortDate */ .Tl);
  navPages.sort(_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .sortDate */ .Tl);
  return { posts, navPages };
};

// src/nav.tsx

function Nav() {
  var _a;
  const { opts, config } = (0,_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .useBlogContext */ .FF)();
  const { navPages } = collectPostsAndNavs({ opts, config });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "nx-mb-8 nx-flex nx-items-center nx-gap-3",
    children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "nx-flex nx-grow nx-flex-wrap nx-items-center nx-justify-end nx-gap-3",
        children: [
          navPages.map((page) => {
            var _a2, _b;
            if (page.active) {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "nx-cursor-default nx-text-gray-400",
                children: ((_a2 = page.frontMatter) == null ? void 0 : _a2.title) || page.name
              }, page.route);
            }
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: page.route,
              passHref: true,
              legacyBehavior: true,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                children: ((_b = page.frontMatter) == null ? void 0 : _b.title) || page.name
              })
            }, page.route);
          }),
          (_a = config.navs) == null ? void 0 : _a.map((nav) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: nav.url,
            passHref: true,
            legacyBehavior: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              children: nav.name
            })
          }, nav.url))
        ]
      }),
      config.darkMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ThemeSwitch, {})
    ]
  });
}

// src/posts-layout.tsx

var PostsLayout = ({ children }) => {
  const { config, opts } = (0,_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .useBlogContext */ .FF)();
  const { posts } = collectPostsAndNavs({ config, opts });
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
  const { type } = opts.frontMatter;
  const tagName = type === "tag" ? router.query.tag : null;
  const postList = posts.map((post) => {
    var _a, _b, _c;
    if (tagName) {
      const tags = (0,_chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_6__/* .getTags */ .NJ)(post);
      if (!Array.isArray(tagName) && !tags.includes(tagName)) {
        return null;
      }
    } else if (type === "tag") {
      return null;
    }
    const postTitle = ((_a = post.frontMatter) == null ? void 0 : _a.title) || post.name;
    const date = ((_b = post.frontMatter) == null ? void 0 : _b.date) && new Date(post.frontMatter.date);
    const description = (_c = post.frontMatter) == null ? void 0 : _c.description;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "post-item",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: post.route,
            passHref: true,
            legacyBehavior: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              className: "!nx-no-underline",
              children: postTitle
            })
          })
        }),
        description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: "nx-mb-2 nx-text-gray-400",
          children: [
            description,
            config.readMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: post.route,
              passHref: true,
              legacyBehavior: true,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                className: "post-item-more nx-ml-2",
                children: config.readMore
              })
            })
          ]
        }),
        date && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("time", {
          className: "nx-text-sm nx-text-gray-300",
          dateTime: date.toISOString(),
          children: date.toDateString()
        })
      ]
    }, post.route);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(BasicLayout, {
    children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Nav, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXTheme, {
        children
      }),
      postList
    ]
  });
};

// src/page-layout.tsx

var PageLayout = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(BasicLayout, {
    children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Nav, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXTheme, {
        children
      })
    ]
  });
};

// src/constants.tsx

var DEFAULT_THEME = {
  footer: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
    className: "nx-mt-32 nx-block",
    children: [
      "CC BY-NC 4.0 ",
      new Date().getFullYear(),
      " \xA9 Shu Ding."
    ]
  }),
  readMore: "Read More \u2192"
};

// src/index.tsx


var layoutMap = {
  post: ArticleLayout,
  page: PageLayout,
  posts: PostsLayout,
  tag: PostsLayout
};
var BlogLayout = ({
  config,
  children,
  opts
}) => {
  const type = opts.frontMatter.type || "post";
  const Layout2 = layoutMap[type];
  if (!Layout2) {
    throw new Error(
      `nextra-theme-blog does not support the layout type "${type}" It only supports "post", "page", "posts" and "tag"`
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chunk_JRWTBRJB_js__WEBPACK_IMPORTED_MODULE_5__/* .BlogProvider */ .JW, {
    opts,
    config,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Layout2, {
      children
    })
  });
};
function Layout(_a) {
  var _b = _a, {
    children
  } = _b, context = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__objRest */ .S0)(_b, [
    "children"
  ]);
  const extendedConfig = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_11__/* .__spreadValues */ .ih)({}, DEFAULT_THEME), context.themeConfig);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(next_themes__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BlogLayout, {
      config: extendedConfig,
      opts: context.pageOpts,
      children
    })
  });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;