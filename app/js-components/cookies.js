const currentURL = window.location.href;
const head = document.getElementsByTagName("head")[0];

function setScriptTags() {
    const URLs = {
        iubenda: {
            url: "//cdn.iubenda.com/cs/tcf/stub.js",
            async: !1
        },
        iubendaAsync: {
            url: "//cdn.iubenda.com/cs/iubenda_cs.js",
            async: !0
        },
    };

    const services = Object.values(URLs);

    services.forEach(service => {
        let tag = createTag(service);
        head.appendChild(tag);
    });
}

function createTag(service) {
    const tag = document.createElement("script");

    if (service.async === true) {
        tag.setAttribute('defer', 'defer');
    }

    tag.setAttribute("src", service.url);
    tag.setAttribute("type", "text/javascript");
    tag.setAttribute("charset", "UTF-8");

    return tag;
}


export function setCookies() {
    if (!currentURL.includes("roadtripexplorers")) {

        setScriptTags();
    }
}