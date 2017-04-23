"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    entry: ["App/main.ts"],
    output: {
        path: "wwwroot",
        filename: "[name].bundle.js",
        sourceMapFilename: "[file].map"
    },
    devtool: "#@cheap-source-map",
    module: {
        rules: [
            {
                test: /\.ts&/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                    }
                ],
                exclude: [/\.(spec|e2e).ts&/]
            }
        ]
    }
};
//# sourceMappingURL=webpack.config.js.map