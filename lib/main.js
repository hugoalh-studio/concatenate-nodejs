const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @private
 * @function concatenatePlainObject
 * @param {...object} items
 * @returns {object}
 */
function concatenatePlainObject(...items) {
	let result = {};
	for (let item of items) {
		for (let itemKey in item) {
			if (Object.prototype.hasOwnProperty.call(item, itemKey)) {
				if (Array.isArray(item[itemKey])) {
					result[itemKey] = Array.isArray(result[itemKey]) ? [].concat(result[itemKey], item[itemKey]) : item[itemKey];
				} else if (advancedDetermine.isPlainObject(item[itemKey])) {
					result[itemKey] = advancedDetermine.isPlainObject(result[itemKey]) ? concatenatePlainObject(result[itemKey], item[itemKey]) : item[itemKey];
				} else {
					result[itemKey] = item[itemKey];
				};
			};
		};
	};
	return result;
};
/**
 * @function concatenate
 * @description Concatenate multiple items into one item.
 * @param {...(any[]|Map<any,any>|object|Set<any>|string)} items Items that need to concatenate into one.
 * @returns {(any[]|Map<any,any>|object|Set<any>|string)} A concatenated item.
 */
function concatenate(...items) {
	if (items.length === 0) {
		throw new Error(`Argument \`items\` is not defined!`);
	};
	if (items.every((item) => {
		return Array.isArray(item);
	})) {
		return [].concat(...items);
	};
	if (items.every((item) => {
		return item instanceof Map;
	})) {
		let result = new Map();
		for (let item of items) {
			for (let [itemKey, itemValue] of item.entries()) {
				result.set(itemKey, itemValue);
			};
		};
		return result;
	};
	if (items.every((item) => {
		return advancedDetermine.isPlainObject(item);
	})) {
		return concatenatePlainObject(...items);
	};
	if (items.every((item) => {
		return item instanceof Set;
	})) {
		let result = new Set();
		for (let item of items) {
			for (let itemValue of item.values()) {
				result.add(itemValue);
			};
		};
		return result;
	};
	if (items.every((item) => {
		return (typeof item === "string");
	})) {
		return items.join("");
	};
	throw new TypeError(`Argument \`items\` must be type of arrays, maps, plain objects, sets, or strings!`);
};
module.exports = concatenate;
