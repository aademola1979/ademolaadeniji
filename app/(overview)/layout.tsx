import InsightRoll from "../module/about/InsightRoll"



const Layout = ({children}:{children:React.ReactNode}) => {
  
  return (
    <div className="!max-w-full pt-[5rem]">
        <InsightRoll />
        {children}
        
    </div>
  )
}

export default Layout