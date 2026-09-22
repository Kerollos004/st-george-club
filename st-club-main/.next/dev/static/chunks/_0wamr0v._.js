(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/profileViewComponents/ProfileData.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pen$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenFill$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/pen-fill.js [app-client] (ecmascript) <export default as PenFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$trash3$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash3Fill$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/trash3-fill.js [app-client] (ecmascript) <export default as Trash3Fill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/contexts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/images.png.mjs { IMAGE => "[project]/public/images/images.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProfileData() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"])();
    const { UpdatedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdatedUserContext"])();
    const { setIsEdit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `  ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"} p-5 border  mt-5  border-blue-500 rounded-3xl grid grid-cols-1 items-center md:grid-cols-[40%_60%]  `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex  mb-5  flex-col items-center justify-center gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: UpdatedUser.photoUrl ? UpdatedUser.photoUrl : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "img",
                        width: 300,
                        height: 300,
                        className: `  border-4 ${UpdatedUser?.isActive ? "border-green-600" : "border-red-600"} w-75 h-75 rounded-full `
                    }, void 0, false, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `rounded-3xl border-2  ${theme === "light" ? "bg-gray-400" : "bg-gray-600"}  ${UpdatedUser?.isActive ? "border-green-600" : "border-red-600"} px-3 py-2  `,
                        children: UpdatedUser?.isActive ? "نشط" : "غير نشط"
                    }, void 0, false, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-2.5 items-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "الاسم"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.fullName
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "التليفون"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.phoneNumber
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "المرحله العمريه"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.ageGroup
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "nfc"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.nfcUrl
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "الباقه المتاحه"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.activeSubscription ? UpdatedUser.activeSubscription?.planName.replace("_", " ") : "غير مشترك في باقه"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "سعر الباقة"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.activeSubscription ? UpdatedUser.activeSubscription.price : "غير معروف"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "بدايه  الاشتراك"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.activeSubscription ? UpdatedUser.activeSubscription?.startDate : "غير   معروف"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card   p-3 rounded-3xl border border-blue-600  flex flex-col ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "نهايه الاشتراك"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: UpdatedUser.activeSubscription ? UpdatedUser.activeSubscription?.endDate : "غير   معروف"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `    ${UpdatedUser.role === "User" ? "hidden" : "grid"} col-span-1 md:col-span-2  grid-cols-1 md:grid-cols-2 gap-2.5 `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex gap-2 justify-center items-center p-3 rounded-3xl bg-blue-600 hover:bg-red-800",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$trash3$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash3Fill$3e$__["Trash3Fill"], {}, void 0, false, {
                                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                        lineNumber: 58,
                                        columnNumber: 127
                                    }, this),
                                    " delete user"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsEdit(true);
                                },
                                className: "flex gap-2 justify-center items-center p-3 rounded-3xl bg-blue-600 hover:bg-blue-800",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pen$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenFill$3e$__["PenFill"], {}, void 0, false, {
                                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                        lineNumber: 59,
                                        columnNumber: 162
                                    }, this),
                                    " edit user"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/profileViewComponents/ProfileData.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(ProfileData, "TxrbODSQLh+MJh/cG+ZQiXZrAXA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdatedUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditContext"]
    ];
});
_c = ProfileData;
var _c;
__turbopack_context__.k.register(_c, "ProfileData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/profileViewComponents/ProfileInputs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileInputs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Apis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Apis.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$circle$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleFill$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/x-circle-fill.js [app-client] (ecmascript) <export default as XCircleFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/contexts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/images.png.mjs { IMAGE => "[project]/public/images/images.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
// /* eslint-disable react-hooks/set-state-in-effect */
"use client";
;
;
;
;
;
;
function ProfileInputs({ member }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"])();
    const { isEdit, setIsEdit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditContext"])();
    const { setUpdatedUser, UpdatedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdatedUserContext"])();
    const [allSubs, setAllSubs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPlanId, setSelectedPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        price: 0,
        isActive: false,
        startDate: "",
        endDate: ""
    });
    const [updatedImage, setUpdatedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subLoading, setSubLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: member.id,
        fullName: member.fullName || "",
        phoneNumber: member.phoneNumber || "",
        email: member.email || "",
        ageGroup: member.ageGroup || "",
        gender: member.gender || "",
        activeSubscription: member.activeSubscription,
        photoUrl: member.photoUrl || "",
        isActive: member.isActive,
        role: member.role,
        nfcUrl: member.nfcUrl
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileInputs.useEffect": ()=>{
            setUpdatedUser(member);
        }
    }["ProfileInputs.useEffect"], [
        setUpdatedUser,
        member
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileInputs.useEffect": ()=>{
            const fetchPlans = {
                "ProfileInputs.useEffect.fetchPlans": async ()=>{
                    try {
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Apis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPlans"])();
                        setAllSubs(results);
                    } catch (err) {
                        console.error("❌ خطأ في جلب الباقات:", err);
                    }
                }
            }["ProfileInputs.useEffect.fetchPlans"];
            fetchPlans();
        }
    }["ProfileInputs.useEffect"], []);
    const handleImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setUpdatedImage(file);
        }
    };
    const handleEditUser = async ()=>{
        setLoading(true);
        const token = localStorage.getItem("token");
        const currentId = member?.id || userData?.id || "";
        const formData = new FormData();
        formData.append("Id", currentId);
        formData.append("id", currentId);
        formData.append("FullName", userData.fullName);
        formData.append("PhoneNumber", userData.phoneNumber);
        formData.append("Email", userData.email);
        formData.append("AgeGroup", String(userData.ageGroup));
        formData.append("Gender", String(userData.gender));
        if (updatedImage) {
            formData.append("PhotoUrl", updatedImage);
        }
        try {
            const res = await fetch(`https://mahinproject.runasp.net/api/User/update-user/${currentId}`, {
                method: "PUT",
                headers: {
                    ...token ? {
                        "Authorization": `Bearer ${token}`
                    } : {}
                },
                body: formData
            });
            if (res.ok) {
                const data = await res.json();
                console.log("✅ تم تحديث بيانات المستخدم:", data);
                setUpdatedUser(data);
                setIsEdit(false);
            } else {
                const errorDetails = await res.json();
                console.error("❌ خطأ من السيرفر:", errorDetails);
            }
        } catch (err) {
            console.error("❌ خطأ شبكة:", err);
        } finally{
            setLoading(false);
        }
    };
    const handleSelectChange = (e)=>{
        const planId = e.target.value;
        setSelectedPlanId(planId);
        const selectedPlanTarget = allSubs.find((s)=>String(s.id) === String(planId));
        if (selectedPlanTarget) {
            const now = new Date();
            const endTime = new Date(now);
            endTime.setDate(now.getDate() + 30);
            setSelectedPlan({
                id: String(selectedPlanTarget.id),
                name: selectedPlanTarget.name,
                price: selectedPlanTarget.price || 0,
                isActive: true,
                startDate: now.toISOString(),
                endDate: endTime.toISOString()
            });
        }
    };
    const handlePostSub = async ()=>{
        if (!selectedPlanId) return;
        setSubLoading(true);
        const token = localStorage.getItem("token");
        const currentId = member?.id || userData?.id || "";
        try {
            const res = await fetch("https://mahinproject.runasp.net/api/Subscription/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...token ? {
                        "Authorization": `Bearer ${token}`
                    } : {}
                },
                body: JSON.stringify({
                    UserId: currentId,
                    SubscriptionPlanId: Number(selectedPlan?.id),
                    UserName: userData.fullName,
                    UserPhoneNumber: userData.phoneNumber,
                    PlanName: selectedPlan?.name,
                    Price: selectedPlan.isActive ? selectedPlan.price : selectedPlan.price + 20,
                    IsActive: selectedPlan?.isActive,
                    StartDate: selectedPlan?.startDate,
                    EndDate: selectedPlan?.endDate
                })
            });
            if (res.ok) {
                const subData = await res.json();
                console.log("✅ تم إسناد الباقة بنجاح:", subData);
            } else {
                const errorData = await res.json();
                console.error("❌ خطأ أثناء إسناد الباقة:", errorData);
            }
        } catch (err) {
            console.error("❌ خطأ شبكة أثناء إسناد الباقة:", err);
        } finally{
            setUpdatedUser({
                ...UpdatedUser,
                ...selectedPlan
            });
            setSubLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: ` ${isEdit ? "grid" : "hidden"} ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"} relative p-6 rounded-2xl border border-blue-600 grid-cols-1 md:grid-cols-2 gap-3 items-center`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "الاسم"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: userData.fullName,
                                onChange: (e)=>setUserData({
                                        ...userData,
                                        fullName: e.target.value
                                    }),
                                type: "text",
                                className: "p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 184,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "التليفون"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: userData.phoneNumber,
                                onChange: (e)=>setUserData({
                                        ...userData,
                                        phoneNumber: e.target.value
                                    }),
                                type: "text",
                                className: "p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 194,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "الايميل"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: userData.email,
                                onChange: (e)=>setUserData({
                                        ...userData,
                                        email: e.target.value
                                    }),
                                type: "email",
                                className: "p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 204,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "المرحله العمريه"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: userData.ageGroup,
                                onChange: (e)=>setUserData({
                                        ...userData,
                                        ageGroup: e.target.value
                                    }),
                                type: "text",
                                className: "p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "الفئه"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: userData.gender,
                                onChange: (e)=>setUserData({
                                        ...userData,
                                        gender: e.target.value
                                    }),
                                type: "text",
                                className: "p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 224,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 222,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "الباقه المختاره"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 233,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPlanId,
                                onChange: handleSelectChange,
                                className: "p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "اختر الباقة"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                        lineNumber: 239,
                                        columnNumber: 25
                                    }, this),
                                    allSubs.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: sub.id,
                                            children: sub.name.replace("_", " ")
                                        }, sub.id, false, {
                                            fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                            lineNumber: 241,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 234,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: subLoading || !selectedPlanId,
                                onClick: async (e)=>{
                                    e.preventDefault();
                                    await handlePostSub();
                                },
                                className: `p-3 ${selectedPlanId ? "block" : "hidden"} rounded-3xl w-full text-center bg-blue-600 hover:bg-blue-800 text-white font-bold transition-all disabled:bg-gray-400`,
                                children: subLoading ? "جاري الإسناد..." : "إسناد الباقة"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 232,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col my-4 gap-2.5 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: userData.photoUrl ? userData.photoUrl : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$images$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$images$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "Profile",
                        width: 300,
                        height: 300,
                        className: `w-40 h-40 object-cover rounded-full border-4 ${member.isActive ? "border-green-600" : "border-red-600"}`
                    }, void 0, false, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 261,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5 w-full max-w-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "الصوره الشخصيه"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 269,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: handleImageChange,
                                className: "p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                        lineNumber: 268,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: loading,
                onClick: async (e)=>{
                    e.preventDefault();
                    await handleEditUser();
                },
                className: "col-span-1 md:col-span-2 p-3 rounded-3xl w-full text-center bg-blue-600 hover:bg-blue-800 text-white font-bold transition-all disabled:bg-gray-400",
                children: loading ? "جاري الحفظ..." : "حفظ التغييرات"
            }, void 0, false, {
                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$circle$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleFill$3e$__["XCircleFill"], {
                onClick: ()=>setIsEdit(false),
                className: "absolute top-3 right-3 text-[18px] cursor-pointer hover:text-red-600 transition-colors"
            }, void 0, false, {
                fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
                lineNumber: 290,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/profileViewComponents/ProfileInputs.tsx",
        lineNumber: 180,
        columnNumber: 9
    }, this);
}
_s(ProfileInputs, "PWUIY5IMfS1bjvS73F/xvret5WA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$contexts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdatedUserContext"]
    ];
});
_c = ProfileInputs;
var _c;
__turbopack_context__.k.register(_c, "ProfileInputs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/react-bootstrap-icons/dist/icons/pen-fill.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var PenFill = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-pen-fill',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"
    }));
});
PenFill.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = PenFill;
}),
"[project]/node_modules/react-bootstrap-icons/dist/icons/pen-fill.js [app-client] (ecmascript) <export default as PenFill>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PenFill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pen$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pen$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/pen-fill.js [app-client] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap-icons/dist/icons/trash3-fill.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var Trash3Fill = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-trash3-fill',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
    }));
});
Trash3Fill.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = Trash3Fill;
}),
"[project]/node_modules/react-bootstrap-icons/dist/icons/trash3-fill.js [app-client] (ecmascript) <export default as Trash3Fill>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash3Fill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$trash3$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$trash3$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/trash3-fill.js [app-client] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap-icons/dist/icons/x-circle-fill.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var XCircleFill = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-x-circle-fill',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
    }));
});
XCircleFill.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = XCircleFill;
}),
"[project]/node_modules/react-bootstrap-icons/dist/icons/x-circle-fill.js [app-client] (ecmascript) <export default as XCircleFill>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircleFill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$circle$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$circle$2d$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap-icons/dist/icons/x-circle-fill.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0wamr0v._.js.map