import { createFileRoute } from "@tanstack/react-router";

type ProductSearchSortOptions = "newest" | "oldest" | "price";

type ProductSearch = {
    page: number;
    filter: string;
    sort: ProductSearchSortOptions;
};

export const Route = createFileRoute("/search")({
    component: RouteComponent,
    validateSearch: (search: Record<string, unknown>): ProductSearch => {
        return {
            page: Number(search?.page ?? 1),
            filter: (search.filter as string) || "none",
            sort: (search.sort as ProductSearchSortOptions) || "newest",
        };
    },
});

function RouteComponent() {
    const { filter, sort, page } = Route.useSearch();
    return (
        <div>
            Hello "/search"!
            <div>
                filter: {filter}
                <br />
                sort: {sort}
                <br />
                page: {page}
            </div>
        </div>
    );
}
