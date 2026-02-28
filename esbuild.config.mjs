import esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outfile: "main.js",
    format: "cjs",
    platform: "browser",

    external: [
        "obsidian",
        "@codemirror/state",
        "@codemirror/view",
        "@codemirror/language"
    ],

    target: "es2018"
});
