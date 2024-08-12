import InsightRoll from "../module/about/InsightRoll"



const Layout = ({children}:{children:React.ReactNode}) => {
  
  return (
    <div className="!max-w-full pt-[3.5rem] lg:pt-[3rem]">
        <InsightRoll />
        {children}
        
    </div>
  )
}

export default Layout