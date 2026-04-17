
import { defineConfig } from "vite";
import {dirname, resolve} from "path";
import { resolveSoa } from "dns";

export default defineConfig({
    base: './Honline-Ecommerce-Store/',
    build:{
        rollupOptions: {
            input:{
                main: resolve(__dirname,"index.html"),
                about: resolve(__dirname,"about.html"),
                contact: resolve(__dirname,"contact.html"),
                products: resolve(__dirname,"products.html"),
                addTocart: resolve(__dirname,"addTocart.html")
            }
        }
    }
})