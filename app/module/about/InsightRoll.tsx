

const InsightRoll = () => {

    const insights = [
        'If your idea or solution is meant to run on web, then count me in.',
        'Your fantastic idea plus my skill equals real success stories.',
        '\Let\'s jointly make the stories!',

    ];

    return (
        <div className="w-full logo mt-4 text-white whitespace-nowrap overflow-hidden ">
            <div className="animate-roll py-3 flex justify-center items-center w-full font-semibold tracking-wider text-base">
                {
                    insights.map((item, i) =>(
                        <div key={i}>{item} {i + 1 !== insights.length && <span className="px-4">|</span>}</div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default InsightRoll