
import * as webpack from 'webpack'
export default {
    entry: ["App/main.ts"],
    output: {
        path:"wwwroot"
    },
    devtool: "#@cheap-source-map",
    module: {
        
    }

} as webpack.Configuration