

const InsightRoll = () => {

    const insights = [
        'If \it\'s going to run on web, then \it\'s my job.',
        'Your fantastic idea plus my skill equals a solution.',
        '\Let\'s jointly build success stories!',

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