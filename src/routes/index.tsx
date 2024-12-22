import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
            <Link
                to="/search"
                search={{
                    filter: "name",
                    page: 10,
                    sort: "price",
                }}
            >
                Search something!
            </Link>
        </div>
    );
}
