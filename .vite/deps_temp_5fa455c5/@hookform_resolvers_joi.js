import { appendErrors, get, set } from "./react-hook-form.js";
//#region node_modules/@hookform/resolvers/dist/resolvers.mjs
var r = (t, r, o) => {
	if (t && "reportValidity" in t) {
		const s = get(o, r);
		t.setCustomValidity(s && s.message || ""), t.reportValidity();
	}
}, o = (e, t) => {
	for (const o in t.fields) {
		const s = t.fields[o];
		s && s.ref && "reportValidity" in s.ref ? r(s.ref, o, e) : s && s.refs && s.refs.forEach((t) => r(t, o, e));
	}
}, s = (r, s) => {
	s.shouldUseNativeValidation && o(r, s);
	const n = {};
	for (const o in r) {
		const f = get(s.fields, o), c = Object.assign(r[o] || {}, { ref: f && f.ref });
		if (i(s.names || Object.keys(r), o)) {
			const r = Object.assign({}, get(n, o));
			set(r, "root", c), set(n, o, r);
		} else set(n, o, c);
	}
	return n;
}, i = (e, t) => {
	const r = n$1(t);
	return e.some((e) => n$1(e).match(`^${r}\\.\\d+`));
};
function n$1(e) {
	return e.replace(/\]|\[/g, "");
}
//#endregion
//#region node_modules/@hookform/resolvers/joi/dist/joi.mjs
var n = function(n, o$2, a) {
	return void 0 === o$2 && (o$2 = { abortEarly: !1 }), void 0 === a && (a = {}), function(i, s$1, u) {
		try {
			var c = function() {
				return l.error ? {
					values: {},
					errors: s((n = l.error, o$1 = !u.shouldUseNativeValidation && "all" === u.criteriaMode, n.details.length ? n.details.reduce(function(e, r) {
						var n = r.path.join(".");
						if (e[n] || (e[n] = {
							message: r.message,
							type: r.type
						}), o$1) {
							var a = e[n].types, i = a && a[r.type];
							e[n] = appendErrors(n, o$1, e, r.type, i ? [].concat(i, r.message) : r.message);
						}
						return e;
					}, {}) : {}), u)
				} : (u.shouldUseNativeValidation && o({}, u), {
					errors: {},
					values: l.value
				});
				var n, o$1;
			}, v = Object.assign({}, o$2, { context: s$1 }), l = {}, f = function() {
				if ("sync" === a.mode) l = n.validate(i, v);
				else {
					var e = function(e, r) {
						try {
							var t = e();
						} catch (e) {
							return r(e);
						}
						return t && t.then ? t.then(void 0, r) : t;
					}(function() {
						return Promise.resolve(n.validateAsync(i, v)).then(function(e) {
							l.value = e;
						});
					}, function(e) {
						l.error = e;
					});
					if (e && e.then) return e.then(function() {});
				}
			}();
			return Promise.resolve(f && f.then ? f.then(c) : c());
		} catch (e) {
			return Promise.reject(e);
		}
	};
};
//#endregion
export { n as joiResolver };

//# sourceMappingURL=@hookform_resolvers_joi.js.map