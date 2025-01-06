export const snowflakeResolver = (): any => {
    return {
        type: "component",
        resolve: (name: any) => {
            if (name.startsWith("Sf"))
                return {
                    name: name.slice(2),
                    from: "@/snowflake/" + name.slice(2).toLowerCase(),
                };
        },
    };
};
