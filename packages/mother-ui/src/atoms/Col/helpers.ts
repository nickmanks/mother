export const getSize = (context: any): number => {
    if (context) {
        if (context.count) {
            return 12 / context.count;
        }
    }

    return 0;
};
