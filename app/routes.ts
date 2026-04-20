import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("technologies/", "routes/technologies.tsx"),
    route("projects/", "routes/projects.tsx"),
    route("projects/:slug", "routes/project-detail.tsx"),
    route("experience/", "routes/experience.tsx"),
    route("education/", "routes/education.tsx"),

    route("admin/login", "routes/admin-login.tsx"),
    route("admin", "routes/admin.tsx"),
    route("admin/projects", "routes/admin-projects.tsx"),
    route("admin/projects/new", "routes/admin-project-new.tsx"),
    route("admin/projects/:slug/edit", "routes/admin-project-edit.tsx"),
] satisfies RouteConfig;
