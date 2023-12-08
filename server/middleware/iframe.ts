/**
 * Middleware регулирующая доступ к проекту через iframe
 */
export default defineEventHandler((event) => {
    // const { ssrContext } = useNuxtApp();

    if (process.env.NODE_ENV === 'production') {
        // ssrContext?.event.res.setHeader('Content-Security-Policy', 'frame-src *.wildberries.ru/*');
        setResponseHeader(event, 'Content-Security-Policy', 'frame-src *.wildberries.ru/*');
    } else {
        // ssrContext?.event.res.setHeader('Content-Security-Policy', 'frame-src *');
        // setResponseHeader(event, 'Content-Security-Policy', 'frame-src *');
        setResponseHeader(event, 'Content-Security-Policy', 'frame-src *.wildberries.ru/*');
    }

    // console.log('to extensionMiddleware', ssrContext?.event.res.getHeaders());
    const header = getResponseHeader(event, 'Content-Security-Policy');
    console.log('defineEventHandler header', header);
});
