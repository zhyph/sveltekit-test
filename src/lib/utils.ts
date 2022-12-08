type DataType<T> = {
	[key in keyof T]: { error: boolean; message: string };
};

export const weirdStuff = <T extends DataType<T>>(
	errors: Record<string, { error: boolean; message: string }>,
	data: T
): T => {
	for (const key of Object.keys(data)) {
		const indexKey = key as keyof T;
		data[indexKey].error = !!errors[key]?.error;
		data[indexKey].message = errors[key]?.message ?? '';
	}

	return data;
};
