import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/post/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Posts route!</div>
}
