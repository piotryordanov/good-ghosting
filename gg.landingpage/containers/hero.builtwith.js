export default () => (
    <div className="h-24 py-0 pt-4 text-center border-t border-gray-400">
        <div className='flex flex-col md:flex-row h-64 md:h-5 w-full md:w-1/2 m-auto'>
            <div className="w-full md:w-1/4 pt-2 font-paragraph text-gray-700">
                Built with:
                </div>
            <div className="w-full md:w-1/4 flex-1">
                <img className="m-auto pt-2" src="/eth.svg" width="25px" />
            </div>
            <div className="w-full md:w-1/4 flex-1">
                <img className="m-auto" src="/maker.svg" width="60px" />
            </div>
            <div className="w-full md:w-1/4 flex-1">
                <img className="m-auto pt-4" src="/aave.svg" width="100px" />
            </div>
        </div>
    </div>
)