import * as webpack from 'webpack'
export default {
    entry: ["App/main.ts"],
    output: {
        path: "wwwroot",
        filename: "[name].bundle.js",
        sourceMapFilename:"[file].map"
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
                ] as webpack.NewLoader[],
                exclude:[/\.(spec|e2e).ts&/]
                
            }
        ]
       
        
    } as webpack.NewModule

} as webpack.Configuration