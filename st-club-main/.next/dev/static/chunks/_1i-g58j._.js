(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/assets/Apis.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPlans",
    ()=>getAllPlans,
    "getAllUsers",
    ()=>getAllUsers,
    "getUserFromToken",
    ()=>getUserFromToken,
    "handleAuth",
    ()=>handleAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
;
const handleAuth = async (user)=>{
    try {
        const res = await fetch("https://mahinproject.runasp.net/api/Auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                PhoneNumber: user.PhoneNumber,
                Password: user.Password
            })
        });
        if (!res.ok) {
            console.log("error in auth");
        }
        const data = await res.json();
        if (data?.token) {
            localStorage.setItem("token", data?.token);
        }
        if (!res.ok) {
            console.log("SERVER ERRORS DETAILS:");
            return {
                success: false,
                errors: data.errors
            };
        }
        console.log("Logged in successfully:");
        return {
            success: true,
            data
        };
    } catch (err) {
        console.error("Network error:", err);
    }
};
const getUserFromToken = (token)=>{
    try {
        // 2. إعطاء الـ Generic Type للدالة
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(token);
        return {
            id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            fullName: decoded.FullName,
            email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            isActive: decoded.IsActive === "true",
            exp: decoded.exp
        };
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
};
const getAllUsers = async ()=>{
    try {
        const response = await fetch("https://mahinproject.runasp.net/api/User/get-all-user");
        if (response.ok) {
            const results = await response.json();
            return results;
        }
        if (!response.ok) {
            console.log("errrrrrroooooor");
        }
    } catch (err) {
        console.error(err);
    }
};
const getAllPlans = async ()=>{
    try {
        const response = await fetch("https://mahinproject.runasp.net/api/Subscription/get-all-plans");
        if (response.ok) {
            const results = await response.json();
            return results;
        }
        if (!response.ok) {
            console.log("errrrrrroooooor");
        }
    } catch (err) {
        console.error(err);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/contexts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditProvider",
    ()=>EditProvider,
    "FormProvider",
    ()=>FormProvider,
    "MenuProvider",
    ()=>MenuProvider,
    "ThemeProvider",
    ()=>ThemeProvider,
    "UpdatedUserProvider",
    ()=>UpdatedUserProvider,
    "useEditContext",
    ()=>useEditContext,
    "useFormContext",
    ()=>useFormContext,
    "useMenuContext",
    ()=>useMenuContext,
    "useThemeContext",
    ()=>useThemeContext,
    "useUpdatedUserContext",
    ()=>useUpdatedUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
// change form context
"use client";
;
const FormContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useFormContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormContext);
    if (!context) {
        throw new Error("form provider");
    }
    return context;
};
_s(useFormContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const FormProvider = ({ children })=>{
    _s1();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormContext.Provider, {
        value: {
            form,
            setForm
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/assets/contexts.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(FormProvider, "HoPTbScY2GvDEiJjvHQJMr3GVYg=");
_c = FormProvider;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useThemeContext = ()=>{
    _s2();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error("theme provider");
    }
    return context;
};
_s2(useThemeContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ThemeProvider = ({ children })=>{
    _s3();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/assets/contexts.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ThemeProvider, "Glfw/8zE4tbGhjo0vJvRk5mXZhY=");
_c1 = ThemeProvider;
const MenuContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useMenuContext = ()=>{
    _s4();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within a MenuProvider");
    }
    return context;
};
_s4(useMenuContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const MenuProvider = ({ children })=>{
    _s5();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuContext.Provider, {
        value: {
            isOpen,
            setIsOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/assets/contexts.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s5(MenuProvider, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c2 = MenuProvider;
const EditContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useEditContext = ()=>{
    _s6();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EditContext);
    if (!context) {
        throw new Error("useEditContext must be used within an EditProvider");
    }
    return context;
};
_s6(useEditContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const EditProvider = ({ children })=>{
    _s7();
    const [isEdit, setIsEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditContext.Provider, {
        value: {
            isEdit,
            setIsEdit
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/assets/contexts.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s7(EditProvider, "IoDxBt6oZLuuzPcHAVPOspg3K60=");
_c3 = EditProvider;
const UpdatedUserContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useUpdatedUserContext = ()=>{
    _s8();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UpdatedUserContext);
    if (!context) {
        throw new Error("useUpdatedUserContext must be used within an UpdatedUserProvider");
    }
    return context;
};
_s8(useUpdatedUserContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const UpdatedUserProvider = ({ children })=>{
    _s9();
    const [UpdatedUser, setUpdatedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        fullName: "",
        phoneNumber: "",
        email: "",
        photoUrl: "",
        ageGroup: "",
        gender: "",
        isActive: false,
        activeSubscription: {
            id: 0,
            subscriptionPlanId: 0,
            planName: "",
            price: 0,
            startDate: 0,
            endDate: 0,
            isActive: false
        },
        nfcUrl: "",
        role: ""
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UpdatedUserContext.Provider, {
        value: {
            UpdatedUser,
            setUpdatedUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/assets/contexts.tsx",
        lineNumber: 159,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}; // paid users
_s9(UpdatedUserProvider, "SaecQXzjxUQEIAAQ0qX8oXckTfg=");
_c4 = UpdatedUserProvider;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "FormProvider");
__turbopack_context__.k.register(_c1, "ThemeProvider");
__turbopack_context__.k.register(_c2, "MenuProvider");
__turbopack_context__.k.register(_c3, "EditProvider");
__turbopack_context__.k.register(_c4, "UpdatedUserProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/contexts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/image.png.mjs { IMAGE => "[project]/public/images/image.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$tiktok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tiktok$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/tiktok.js [app-client] (ecmascript) <export default as Tiktok>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$whatsapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Whatsapp$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/whatsapp.js [app-client] (ecmascript) <export default as Whatsapp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Footer() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].footer, {
        initial: {
            y: 20,
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        viewport: {
            amount: .3,
            once: true
        },
        transition: {
            duration: 1
        },
        className: `   py-10 px-2.5 md:px-20 grid grid-cols-1 md:grid-cols-4 text-center gap-2.5 border-t-4 border-blue-600 ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"} `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-80  col-span-1 md:col-span-2 w-full bg-blue-600 [clip-path:polygon(38%_0%,62%_0%,62%_28%,100%_28%,100%_52%,62%_52%,62%_100%,38%_100%,38%_52%,0%_52%,0%_28%,38%_28%)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "img",
                    width: 300,
                    height: 300,
                    className: "h-full w-full   ",
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-5xl text-blue-600 mb-2.5",
                        children: "  روابط سريعه "
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-2xl  mb-1 inline-block hover:text-blue-600 hover:translate-x-1",
                                    href: "/",
                                    children: " الصفحه الرئيسيه "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-2xl  mb-1 inline-block hover:text-blue-600 hover:translate-x-1",
                                    href: "/subs",
                                    children: " الباقات المتاحه "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-5xl text-blue-600 mb-2.5",
                        children: "  سوشيال ميديا "
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `   flex  justify-center gap-2.5  mb-3 items-center p-3 rounded-3xl ${theme === "light" ? "bg-gray-400" : "bg-gray-700  text-[23px]"} `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: " فيسبوك "
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `   flex  justify-center gap-2.5  mb-3 items-center p-3 rounded-3xl ${theme === "light" ? "bg-gray-400" : "bg-gray-700  text-[23px]"} `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$tiktok$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tiktok$3e$__["Tiktok"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: " تيك توك "
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `   flex   justify-center gap-2.5 mb-3 items-center p-3 rounded-3xl ${theme === "light" ? "bg-gray-400" : "bg-gray-700 text-[23px]"} `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$whatsapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Whatsapp$3e$__["Whatsapp"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: " واتساب "
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 64,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(Footer, "t7COSjsZdJ9RMdMk4Arwe+e0dLU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$moon$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonFill$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/moon-fill.js [app-client] (ecmascript) <export default as MoonFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$brightness$2d$high$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrightnessHighFill$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/brightness-high-fill.js [app-client] (ecmascript) <export default as BrightnessHighFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/contexts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$WhatsApp__Image__2026$2d$08$2d$15__at__5$2e$55$2e$47__AM$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$WhatsApp__Image__2026$2d$08$2d$15__at__5$2e$55$2e$47__AM$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/WhatsApp Image 2026-08-15 at 5.55.47 AM.jpeg.mjs { IMAGE => "[project]/public/images/WhatsApp Image 2026-08-15 at 5.55.47 AM.jpeg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/images.png.mjs { IMAGE => "[project]/public/images/images.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Apis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Apis.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
/* eslint-disable react-hooks/set-state-in-effect */ "use client";
;
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"])();
    const [ThemeIcon, setThemeIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$moon$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonFill$3e$__["MoonFill"]);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { UpdatedUser, setUpdatedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdatedUserContext"])();
    const { isOpen, setIsOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuContext"])();
    const handleToggleTheme = ()=>{
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            setThemeIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$brightness$2d$high$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrightnessHighFill$3e$__["BrightnessHighFill"]);
            document.querySelector("body")?.classList.remove("light-mode");
            document.querySelector("body")?.classList.add("dark-mode");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
            setThemeIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$moon$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonFill$3e$__["MoonFill"]);
            document.querySelector("body")?.classList.remove("dark-mode");
            document.querySelector("body")?.classList.add("light-mode");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const currentTheme = localStorage.getItem("theme");
            if (currentTheme === "dark") {
                setTheme("dark");
                setThemeIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$brightness$2d$high$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrightnessHighFill$3e$__["BrightnessHighFill"]);
                document.querySelector("body")?.classList.remove("light-mode");
                document.querySelector("body")?.classList.add("dark-mode");
            } else {
                setTheme("light");
                setThemeIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$moon$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonFill$3e$__["MoonFill"]);
                document.querySelector("body")?.classList.remove("dark-mode");
                document.querySelector("body")?.classList.add("light-mode");
            }
        }
    }["Header.useEffect"], [
        setTheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const fetchUserData = {
                "Header.useEffect.fetchUserData": async ()=>{
                    const token = localStorage.getItem("token");
                    if (!token) {
                        return;
                    }
                    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Apis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserFromToken"])(token);
                    const userId = decoded?.id;
                    if (!userId) {
                        setIsLoggedIn(false);
                        return;
                    }
                    try {
                        const res = await fetch(`https://mahinproject.runasp.net/api/User/get-user/${userId}`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                            }
                        });
                        if (!res.ok) {
                            const errorData = await res.text();
                            throw new Error(`Server status ${res.status}: ${errorData}`);
                        }
                        const data = await res.json();
                        setUpdatedUser(data);
                        setIsLoggedIn(true);
                    } catch (err) {
                        console.error(err);
                    }
                }
            }["Header.useEffect.fetchUserData"];
            fetchUserData();
        }
    }["Header.useEffect"], [
        setUpdatedUser
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].header, {
        initial: {
            y: -50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 1
        },
        className: `   ${theme === "light" ? "text-black" : "text-white"}  bg-black/15 backdrop-blur-md  w-full h-20 px-5 md:px-20 text-[20px] fixed text-black flex items-center justify-between top-0 left-0 z-30`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$WhatsApp__Image__2026$2d$08$2d$15__at__5$2e$55$2e$47__AM$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$WhatsApp__Image__2026$2d$08$2d$15__at__5$2e$55$2e$47__AM$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "img",
                    width: 300,
                    height: 300,
                    className: "w-18 h-18 rounded-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `
            absolute top-full left-0 w-1/2 md:w-auto
            ${isOpen ? "h-37.5" : "h-0"} 
            md:flex md:items-center md:flex-row 
            ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"} 
            overflow-hidden rounded-3xl flex flex-col items-center justify-center gap-3  md:p-0 md:static
            md:bg-transparent md:justify-between md:h-auto
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>{
                                setIsOpen(false);
                            },
                            className: "hover:text-blue-600 capitalize text-[25px]",
                            href: "/",
                            children: "  الصفحه الرئيسيه "
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 121,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>{
                                setIsOpen(false);
                            },
                            className: "hover:text-blue-600 capitalize text-[25px]",
                            href: "/subs",
                            children: "الباقات"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 124,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, this),
                    isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: `${UpdatedUser?.role === "Admin" ? "block" : "hidden"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>{
                                setIsOpen(false);
                            },
                            className: "hover:text-blue-600 capitalize text-[25px]",
                            href: "/dashboard",
                            children: " صفحه الادمن "
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this) : ""
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/viewProfile/${UpdatedUser?.id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: UpdatedUser?.photoUrl ? UpdatedUser.photoUrl : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "img",
                            width: 300,
                            height: 300,
                            className: "w-15 h-15 rounded-full "
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 138,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "px-5 py-2.5 capitalize bg-blue-600 hover:bg-blue-800 rounded-3xl",
                        href: "/register",
                        children: "تسجيل الدخول"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeIcon, {
                        onClick: handleToggleTheme,
                        className: "hover:text-blue-600 text-2xl"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                        className: "hover:text-blue-600 text-2xl block md:hidden",
                        onClick: ()=>{
                            setIsOpen(!isOpen);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(Header, "b2PLkjv3nxeQeYW4opkMf+vsPRo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdatedUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuContext"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/WhatsApp Image 2026-08-15 at 5.55.47 AM.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/WhatsApp Image 2026-08-15 at 5.55.47 AM.3dzc_wx5lg4z1.jpeg");}),
"[project]/public/images/WhatsApp Image 2026-08-15 at 5.55.47 AM.jpeg.mjs { IMAGE => \"[project]/public/images/WhatsApp Image 2026-08-15 at 5.55.47 AM.jpeg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$WhatsApp__Image__2026$2d$08$2d$15__at__5$2e$55$2e$47__AM$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/WhatsApp Image 2026-08-15 at 5.55.47 AM.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$WhatsApp__Image__2026$2d$08$2d$15__at__5$2e$55$2e$47__AM$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1254,
    height: 1254,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDi5JNIbRgieWiIOFIyZM989iP61zRcm9Tf3EmrH//Z"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/image.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/image.01lj3e_dlohqa.png");}),
"[project]/public/images/image.png.mjs { IMAGE => \"[project]/public/images/image.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/image.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1172,
    height: 882,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AD2U226q4G2r5E2f5kie6E6i6mOn5Xyz6ABTnd98pMp6sudmpNhuq956t+18pcl6qNEAbabZhpaigLDahoF3qaOXoMTlmqSrmqm4AI2qxZOGdJaRh4hsTZp7WKKWh5V7YJiVkAB6dW93XUB5XkFyXURlUz5oUDV3WDiGak0AVkMuWUUuUTskXkYsX0kyWEQwWkQte1o65qNKKx6I8jEAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/images.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/images.2p38p8jq-hskm.png");}),
"[project]/public/images/images.png.mjs { IMAGE => \"[project]/public/images/images.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/images.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 554,
    height: 554,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAcElEQVR42lWMsQnAIBBFrxSEDBjIDlrYOEHATazcwVmsFTsxJjkvJNHX3P//wcH1chJfheeklHYCwyS89wuBYRIhhJXA8Iucs3NOSimEsNbGGLuotWqtOedAMMaUUjhCKcUYsw1gxbG/aq0dA1hxvAHYFZFRR6MhMgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1i-g58j._.js.map