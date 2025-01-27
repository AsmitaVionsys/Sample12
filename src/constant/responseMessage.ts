export default {
    SUCCESS: 'The operation has been successful completed',
    NOT_FOUND: (entity: string) => {
        return `${entity} not found`;
    },
    SOMETHING_WENT_WRONG: 'Something went wrong.',
    TOO_MANY_REQUESTS: 'Too many requests'
};
