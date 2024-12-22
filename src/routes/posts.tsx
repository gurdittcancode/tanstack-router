import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
    component: RouteComponent,
    loader: () => "POSTS LOADER IS HERE AHHHHHHH",
});

function RouteComponent() {
    const response = Route.useLoaderData();
    return (
        <div>
            Hello "/posts"! <p>response: {response}</p>
        </div>
    );
}
