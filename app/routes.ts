import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("technologies/", "routes/technologies.tsx"),
    route("projects/", "routes/projects.tsx"),
    route("projects/:slug", "routes/project-detail.tsx"),
    route("experience/", "routes/experience.tsx"),
] satisfies RouteConfig;
