import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '../components/Header'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Header />
      <div className="p-2 flex gap-2">
        <Link to='/' activeProps={{
          className: 'font-bold',
        }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
      <TanStackRouterDevtools />
    </>
  )
}
