import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: ["./src/base58.ts"],
    output: [
      {
        dir: "./",
        format: "es",
      },
    ],
    external: ["@vandeurenglenn/base-x"],

    plugins: [typescript()],
  },
];
