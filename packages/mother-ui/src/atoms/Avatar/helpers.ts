export const getInitials = (name: string) => {
    const match = name.match(/\b\w/g) || [];
    const initials = (match.shift() || '') + (match.pop() || '');

    return initials.toUpperCase();
};
