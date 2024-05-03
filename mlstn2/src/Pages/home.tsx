

function HomeComponent() {

    return(
        <div className="">
            <h1 className="text-3xl font-bold bg-black text-white py-3">Database</h1>
            <div className="flex align-center justify-center min-h-screen w-full ">
                <form className="flex flex-col align-center justify-center w-1/4 bg-gray-500 px-10 gap-5">
                    <h2 className="text-2xl font-bold text-white">Login Information</h2>
                    <input type="text" placeholder="Input Your Name" className="border border-2 border-black p-1 rounded-md"/>
                    <input type="password" placeholder="Input Your Password" className="border border-2 border-black p-1 rounded-md"/>
                    <button type="submit" className="bg-black text-white p-1 rounded-md font-semibold">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default HomeComponent;