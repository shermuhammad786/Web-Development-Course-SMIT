/**
 * v0 by Vercel.
 * @see https://v0.dev/t/btWwk38Iyw3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import Link from "@mui/material"
import { Input } from "@mui/material"
import { Button } from "@mui/material"
import { Person, Message } from "@mui/icons-material";
import myImage from "../../../Components//whatsonMin/sherimg.jpg"
// import Message from '@mui/icons-material/Message';

export default function Navbar() {
    return (
        <header className="bg-indigo-600 flex items-center justify-center h-16 w-full px-4 border-b bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-850">
            {/* <Link className="mr-4" href="#"> */}
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
            {/* </Link> */}
            <div className="flex-1 grid w-full max-w-md mx-auto items-center gap-4">
                <div className="flex items-center gap-2">
                    <SearchIcon className="h-4 w-4 opacity-25" />
                    <Input className="w-full sm:w-64" placeholder="Search" type="search" />
                </div>
            </div>
            <div className="flex gap-4">
                <p>Home </p>
                <p> Timeline</p>
            </div>
            <div className="flex items-center ml-auto space-x-4">
                <Button size="icon" variant="ghost">
                    <Person className="h-4 w-4" />
                    <span className="sr-only">Notifications</span>
                </Button>
                <Button size="icon" variant="ghost">
                    <Message className="h-4 w-4" />
                    <span className="sr-only">Notifications</span>
                </Button>
                <Button size="icon" variant="ghost">
                    <BellIcon className="h-4 w-4" />
                    <span className="sr-only">Notifications</span>
                </Button>
                <Button size="icon" variant="ghost">
                    <img
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src={myImage}
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                        width="32"
                    />
                    <span className="sr-only">Open profile menu</span>
                </Button>
            </div>
        </header>
    )
}

function BellIcon(props) {
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function MountainIcon(props) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

