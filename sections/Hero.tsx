import RobotModel from "@/components/RobotModel"

export default function Hero() {
    return (
        <div className="bg-[#FAF9F0] dark:bg-black text-black dark:text-white min-h-screen flex flex-col md:flex-row items-center justify-center pl-6">
            <div className="flex flex-col items-start">
                <h1 className="text-xl md:text-4xl font-bold mb-6">Learning, Building, and Improving — <br />One Project at a Time.</h1>
                <p className="text-md md:text-xl mb-1 text-center">Hi, I’m MONISHA</p>
                <p className="text-md md:text-xl mb-6 w-md">A full-stack developer who enjoys clean code, simple design, and understanding how things work under the hood.</p>
            </div>
            <div id="3dModels" className="h-md w-md md:h-lg md:w-lg">
                <figure className="right-0 bottom-0 absolute w-screen h-[60vh] md:w-[60vw] md:h-screen overflow-hidden">
                    <RobotModel />
                </figure>
            </div>
        </div>
    )
}