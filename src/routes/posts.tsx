import { createFileRoute } from "@tanstack/react-router";
import { postsQueryOption } from "../fetchPosts";

export const Route = createFileRoute("/posts")({
    component: RouteComponent,
    loader: ({ context: { queryClient } }) => {
        return queryClient.ensureQueryData(postsQueryOption());
    },
    pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
    const posts = Route.useLoaderData();
    return (
        <div>
            Posts
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
