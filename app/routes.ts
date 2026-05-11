import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/app.jsx"),
    route("about","routes/about-us.jsx"),
    route("cart","routes/CartItem.jsx"),
    route("products","routes/productList.jsx")
] satisfies RouteConfig;
