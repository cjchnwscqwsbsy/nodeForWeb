/**
 * Created by xrk on 18-1-31.
 */
exports.getMime = (value) => {
    switch (value) {
        case '.html':
            return 'text/html';
        case '.js':
            return 'text/javascript';
        case '.css':
            return 'text/css';
        default:
            return 'text/html';
    }
};