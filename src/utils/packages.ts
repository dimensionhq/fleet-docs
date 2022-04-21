const dependencies = [
    {
        name: "tokio",
        version: "v1.17.0",
    },
    {
        name: "serde",
        version: "v1.0.136",
    },
    {
        name: "serde_json",
        version: "v1.0",
    },
    {
        name: "serde_json",
        version: "v0.5.9",
    },
    {
        name: "rand",
        version: "0.8.5",
    },
    {
        name: "rand_core",
        version: "0.6.3",
    },
    {
        name: "syn",
        version: "1.0.91",
    },
    {
        name: "clap",
        version: "3.1.10",
    },
    {
        name: "parking_lot",
        version: "0.12.0",
    },
    {
        name: "lazy_static",
        version: "1.3.0",
    },
    {
        name: "winreg",
        version: "0.10.1",
    },
    {
        name: "hostname",
        version: "0.3.1",
    },
    { name: "oro-diagnostics-derive", version: "v0.1.0" },
    { name: "miette-derive", version: "v3.2.0" },
    { name: "strum_macros", version: "v0.22.0" },
    { name: "speedy-derive", version: "v0.8.0" },
    { name: "crossbeam-deque", version: "v0.8.1" },
    { name: "digest", version: "v0.10.3" },
    { name: "sha-1", version: "v0.9.8" },
    { name: "sha2", version: "v0.9.9" },
    { name: "sha2", version: "v0.8.2" },
    { name: "serde_derive", version: "v1.0.130" },
    { name: "futures-util", version: "v0.3.17" },
    { name: "thiserror", version: "v1.0.30" },
    { name: "pin-project", version: "v1.0.8" },
    { name: "clap_derive", version: "v3.0.0" },
    { name: "speedy", version: "v0.8.0" },
    { name: "unicode-linebreak", version: "v0.1.2" },
    { name: "rayon-core", version: "v1.9.1" },
    { name: "crossbeam", version: "v0.8.1" },
    { name: "sha2", version: "v0.10.2" },
    { name: "sha-1", version: "v0.10.0" },
    { name: "log", version: "v0.4.14" },
    { name: "tempfile", version: "v3.2.0" },
    { name: "curl", version: "v0.4.41" },
    { name: "oro-diagnostics", version: "v0.1.0" },
    { name: "rayon", version: "v1.5.1" },
    { name: "futures-executor", version: "v0.3.17," },
    { name: "tracing", version: "v0.1.29" },
    { name: "mio", version: "v0.8.1" },
    { name: "polling", version: "v2.2.0" },
    { name: "lock_api", version: "v0.4.5" },
    { name: "async-mutex", version: "v1.4.0" },
    { name: "async-lock", version: "v2.4.0" },
    { name: "tinyvec", version: "v1.5.1" },
    { name: "form_urlencoded", version: "v1.0.1" },
    { name: "http", version: "v0.2.5" },
    { name: "block-padding", version: "v0.1.5" },
    { name: "base64", version: "v0.10.1" },
    { name: "regex-automata ", version: "v0.1.10" },
    { name: "heck", version: "v0.3.3" },
    { name: "walkdir", version: "v2.3.2" },
    { name: "addr2line", version: "v0.17.0" },
    { name: "rustls-pemfile", version: "v0.3.0" },
    { name: "yaml-rust", version: "v0.4.5" },
    { name: "minifier ", version: "v0.0.42" },
    { name: "unicode-normalization ", version: "v0.1.19" },
    { name: "http-body", version: "v0.4.4" },
    { name: "matchers", version: "v0.1.0" },
    { name: "async-channel", version: "v1.6.1" },
    { name: "futures-lite", version: "v1.12.0" },
    { name: "aho-corasick", version: "v0.7.18" },
    { name: "object ", version: "v0.27.1" },
    { name: "os_str_bytes", version: "v6.0.0" },
    { name: "socket2", version: "v0.4.4" },
    { name: "num_cpus ", version: "v1.13.0" },
    { name: "atty ", version: "v0.2.14" },
    { name: "signal-hook-registry", version: "v1.4.0" },
    { name: "getrandom", version: "v0.2.3" },
    { name: "dirs-sys", version: "v0.3.6" },
    { name: "terminal_size ", version: "v0.1.17" },
    { name: "term_size", version: "v0.3.2" },
    { name: "filetime ", version: "v0.2.15" },
    { name: "memmap", version: "v0.7.0" },
    { name: "xattr", version: "v0.2.2" },
    { name: "crossbeam-channel", version: "v0.5.1" },
    { name: "quote ", version: "v1.0.10" },
    { name: "generic-array", version: "v0.12.4" },
    { name: "bitvec ", version: "v0.19.6" },
    { name: "idna", version: "v0.2.3" },
    { name: "sluice", version: "v0.5.5" },
    { name: "regex", version: "v1.5.4" },
    { name: "blocking", version: "v1.1.0" },
    { name: "async-executor", version: "v1.4.1" },
    { name: "colored", version: "v2.0.0" },
    { name: "supports-hyperlinks", version: "v1.2.0" },
    { name: "supports-color", version: "v1.3.0" },
    { name: "supports-unicode", version: "v1.0.2" },
    { name: "rand_core", version: "v0.6.3" },
    { name: "dirs", version: "v3.0.2" },
    { name: "dirs", version: "v4.0.0" },
    { name: "parking_lot ", version: "v0.11.2" },
    { name: "tar ", version: "v0.4.37" },
    { name: "mimalloc ", version: "v0.1.27" },
    { name: "libdeflater", version: "v0.7.3" },
    { name: "block-buffer", version: "v0.7.3" },
    { name: "digest", version: "v0.8.1" },
    { name: "crypto-common", version: "v0.1.3" },
    { name: "block-buffer ", version: "v0.10.0" },
    { name: "digest", version: "v0.9.0" },
    { name: "block-buffer", version: "v0.9.0" },
    { name: "url", version: "v2.2.2" },
    { name: "crossbeam-deque", version: "v0.8.1" },
    { name: "webpki ", version: "v0.22.0" },
    { name: "sct", version: "v0.7.0" },
    { name: "console ", version: "v0.15.0" },
    { name: "git-config", version: "v0.1.8" },
    { name: "rand_chacha", version: "v0.3.1" },
    { name: "sha2", version: "v0.8.2" },
    { name: "sha-1", version: "v0.8.2" },
    { name: "unicode-linebreak", version: "v0.1.2" },
    { name: "digest ", version: "v0.10.3" },
    { name: "sha2", version: "v0.9.9" },
    { name: "sha-1", version: "v0.9.8" },
    { name: "crossbeam", version: "v0.8.1" },
    { name: "webpki-roots ", version: "v0.22.2" },
    { name: "ctor ", version: "v0.1.21" },
    { name: "tracing-attributes ", version: "v0.1.18" },
    { name: "thiserror-impl ", version: "v1.0.30" },
    { name: "tokio-macros", version: "v1.7.0" },
    { name: "pin-project-internal", version: "v1.0.8" },
    { name: "miette-derive", version: "v3.2.0" },
    { name: "strum_macros ", version: "v0.22.0" },
    { name: "speedy-derive", version: "v0.8.0" },
    { name: "indicatif v0.17", version: ".0-rc.4" },
    { name: "rand", version: "v0.8.4" },
    { name: "sha2 ", version: "v0.10.2" },
    { name: "sha-1 ", version: "v0.10.0" },
    { name: "thiserror", version: "v1.0.30" },
    { name: "tempfile", version: "v3.2.0" },
    { name: "pin-project", version: "v1.0.8" },
    { name: "clap_derive", version: "v3.0.0" },
    { name: "jwalk", version: "v0.6.0" },
    { name: "dialoguer ", version: "v0.10.0" },
    { name: "futures-executor ", version: "v0.3.17" },
    { name: "mio", version: "v0.8.1" },
    { name: "tracing ", version: "v0.1.29" },
    { name: "polling", version: "v2.2.0" },
    { name: "want", version: "v0.3.0" },
    { name: "mio ", version: "v0.7.14" },
    { name: "kv-log-macro", version: "v1.0.7" },
    { name: "tracing-log", version: "v0.1.2" },
    { name: "textwrap ", version: "v0.14.2" },
    { name: "futures ", version: "v0.3.17" },
    { name: "tokio ", version: "v1.17.0" },
    { name: "tracing-futures", version: "v0.2.5" },
    { name: "speedy", version: "v0.8.0" },
    { name: "async-io", version: "v1.6.0" },
    { name: "tracing-subscriber", version: "v0.3.2" },
    { name: "signal-hook-mio", version: "v0.2.1" },
    { name: "miette", version: "v3.2.0" },
    { name: "async-process", version: "v1.3.0" },
    { name: "async-global-executor", version: "v2.0.2" },
    { name: "crossterm ", version: "v0.22.1" },
    { name: "async-std ", version: "v1.10.0" },
    { name: "comfy-table", version: "v5.0.0" },
    { name: "tokio-util", version: "v0.6.9" },
    { name: "tokio-rustls ", version: "v0.23.2" },
    { name: "h2 ", version: "v0.3.12" },
];

const f_lines = [
    `Compiling lazy_static v1.4.0
    <p class="p-0 m-0">Building [>\xa0\xa0\xa0\xa0\xa0] 1/6:</p>
    `,
    `Compiling serde v1.0.0
    <p class="p-0 m-0">Building [=>\xa0\xa0\xa0\xa0] 2/6:</p>
    `,
    `Compiling serde_json v1.0.89
    <p class="p-0 m-0">Building [==>\xa0\xa0\xa0] 3/6:</p>
    `,
    `Compiling nom v6.1.2
    <p class="p-0 m-0">Building [===>\xa0\xa0] 4/6:</p>
    `,
    `Compiling num_cpus v1.13.0
    <p class="p-0 m-0">Building [====>\xa0] 5/6:</p>
    `,
    `Compiling console v0.15.0
    <p class="p-0 m-0">Building [=====>] 6/6:</p>
    `,
    "Finished dev [unoptimized + debuginfo] target(s) in 3.5s",
];

// convert dependencies to an array like f_lines
const f_lines_deps = () => {
    let length = 100;
    let len = 0;

    let final_deps = [];
    for (let index = 0; index < length; index++) {
        const element = dependencies[index];
        let line = `Compiling ${element.name} ${element.version}\n`;

        let progress_length = index % 10 === 0;
        if (progress_length) {
            len += 1;
        }

        let progress_bar = "";

        for (let index = 0; index <= len; index++) {
            progress_bar += "=";
        }

        progress_bar += ">";
        let remaining_length = 10 - len;

        for (let index = 0; index <= remaining_length; index++) {
            progress_bar += "&nbsp";
        }
        line += '<p class="p-0 m-0">' + `<span class="text-green-600">Building</span> [${progress_bar}] (${index}/${length}): ${element.name}` + "</p>";
        final_deps.push(line);
    }
    final_deps.push("Finished dev [unoptimized + debuginfo] target(s) in 3.5s")
    return final_deps;
};

export default f_lines_deps();