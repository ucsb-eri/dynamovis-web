
export function long2tile(lon, zoom) { return ((lon + 180) / 360 * Math.pow(2, zoom)); }
export function lat2tile(lat, zoom) { return ((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom)); }
