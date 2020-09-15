const version = '1';

const onInstall = () => {
    console.log(`Service Worker (v${version}) installed`);
    self.skipWaiting();
};

const handleActivation = async () => {
    await clients.claim();
	console.log(`Service Worker (v${version}) activated`);
};

const onActivate = event => {
	event.waitUntil(handleActivation());
};

const onMessage = msg => {
	sendMessage(msg.data);
};

const sendMessage = async msg => {
    const allClients = await clients.matchAll({ includeUncontrolled: true });
    return Promise.all(
		allClients.map(client => {
			const chan = new MessageChannel();
			chan.port1.onmessage = message => { console.log('message received in sw', message); };
			return client.postMessage(msg, [chan.port2]);
		})
	);
};

const resolve = async request => {
    const url = new URL(request.url);
	const reqURL = url.pathname;

    if (reqURL === '/thisRequestIsStubbedByTheSW.com') {
        return new Response("", {
            status: 200,
            statusText: 'Success'
        });
    }
    return await fetch(request).catch(console.error);
};

const onFetch = event => {
    event.respondWith(resolve(event.request));
};

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('message', onMessage);
self.addEventListener('fetch', onFetch);
