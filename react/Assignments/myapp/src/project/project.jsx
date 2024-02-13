export default function Component() {
    return (
        <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-white rounded-md shadow">
            <div className="flex items-center space-x-2">
                <button className="px-2 py-1 text-lg font-semibold bg-gray-200 rounded">-</button>
                <input aria-label="Day range slider" className="w-32" max="30" min="0" type="range" value="15" />
                <input aria-label="Day count input" className="w-12 text-center border rounded" type="number" value="15" />
                <button className="px-2 py-1 text-lg font-semibold bg-gray-200 rounded">+</button>
            </div>
            <p className="text-lg">15 days from today is Tue Jul 06 2027</p>
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Reset</button>
        </div>
    )
}

