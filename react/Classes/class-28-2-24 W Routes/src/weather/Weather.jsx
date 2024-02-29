/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6aXP0CwZltv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Weather() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="flex flex-row items-center space-x-2">
                <SunIcon className="w-6 h-6" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-medium">Currently</CardTitle>
                  <CardDescription className="text-sm">Right now in your area</CardDescription>
                </div>
              </div>
              <Button size="sm">Toggle</Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid gap-4 p-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <SunIcon className="w-6 h-6" />
                    <div className="grid gap-0.5">
                      <h2 className="text-lg font-semibold leading-none">Clear</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Sunny all day</p>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold leading-none">72°</h1>
                </div>
                <div className="grid gap-1.5">
                  <div className="flex flex-row items-center">
                    <UmbrellaIcon className="w-4 h-4" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">0% Precipitation</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <DropletIcon className="w-4 h-4" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">40% Humidity</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <WindIcon className="w-4 h-4" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">10 mph Wind</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <CalendarIcon className="w-6 h-6" />
              <CardTitle className="text-base font-medium">Forecast</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid gap-4 p-4">
                <div className="flex flex-row items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold">Tomorrow</h3>
                    <SunIcon className="w-8 h-8" />
                    <p className="text-sm text-center">Sunny</p>
                    <p className="text-sm font-medium">72° / 60°</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold">Thursday</h3>
                    <CloudIcon className="w-8 h-8" />
                    <p className="text-sm text-center">Cloudy</p>
                    <p className="text-sm font-medium">68° / 55°</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold">Friday</h3>
                    <CloudSunIcon className="w-8 h-8" />
                    <p className="text-sm text-center">Partly Cloudy</p>
                    <p className="text-sm font-medium">70° / 58°</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CloudSunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  )
}


function DropletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function UmbrellaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  )
}


function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}
