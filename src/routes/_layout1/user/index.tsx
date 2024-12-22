import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/user/')({
  component: User,
})

function User() {
  return <div>User route!</div>
}
