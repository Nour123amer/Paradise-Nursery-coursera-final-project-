import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("about","routes/about.jsx"),
    route("cart","routes/cart.jsx"),
    route("products","routes/products.jsx")
] satisfies RouteConfig;
