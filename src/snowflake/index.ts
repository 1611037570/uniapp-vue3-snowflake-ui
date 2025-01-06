export const snowflakeResolver = (): any => {
    return {
        type: "component",
        resolve: (name: any) => {
            if (name.startsWith("Sf")) {
                const currentName = name.slice(2).toLowerCase();
                return {
                    name: currentName,
                    from:
                        "@/snowflake/" +
                        currentName +
                        "/" +
                        currentName +
                        ".vue",
                };
            }
        },
    };
};
