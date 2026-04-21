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
    route("admin/technologies", "routes/admin-technologies.tsx"),
    route("admin/technologies/new", "routes/admin-technology-new.tsx"),
    route("admin/technologies/:slug/edit", "routes/admin-technology-edit.tsx"),
    route("admin/experience", "routes/admin-experience.tsx"),
    route("admin/experience/new", "routes/admin-experience-new.tsx"),
    route("admin/experience/:slug/edit", "routes/admin-experience-edit.tsx"),
    route("admin/education", "routes/admin-education.tsx"),
    route("admin/education/new", "routes/admin-education-new.tsx"),
    route("admin/education/:slug/edit", "routes/admin-education-edit.tsx"),
] satisfies RouteConfig;

