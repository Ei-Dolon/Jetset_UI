
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: AppComponent,
})

function AppComponent() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">

      </header>
      <h1 className="text-3xl font-bold text-white">Welcome to Jetset.</h1>
      <p className="text-lg text-white">
        Please connect your wallet!
      </p>

    </div>
  )
}
