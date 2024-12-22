import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
    component: About,
});

function About() {
    return (
        <div className="p-2">
            <h3>Welcome About!</h3>
        </div>
    );
}
