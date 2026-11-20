/** Prefix an internal path with the configured `base` (e.g. `/portfolio`). */
export function url(path = ''): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const clean = path.replace(/^\//, '');
	return clean ? `${base}/${clean}` : `${base}/`;
}
