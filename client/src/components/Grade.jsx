function Grade({ grade }) {
    return (
        <div className="grade">
            <h1 className={grade === 'F' ? "text-2xl font-bold p-5 border border-red-500 border-3 border-gray-300 rounded-md inline-block mb-2 text-red-500" : grade === 'A+' || grade === 'A' ? "text-2xl font-bold p-5 border border-green-500 border-3 border-gray-300 rounded-md inline-block mb-2 text-green-500" : grade === 'B' ? "text-2xl font-bold p-5 border border-blue-500 border-3 border-gray-300 rounded-md inline-block mb-2 text-blue-500" : grade === 'C' ? "text-2xl font-bold p-5 border border-yellow-500 border-3 border-gray-300 rounded-md inline-block mb-2 text-yellow-500" :  "text-2xl font-bold p-5 border border-orange-500 border-3 border-gray-300 rounded-md inline-block mb-2 text-orange-500"  }>{grade}</h1>
        </div>
    );
}

export default Grade;