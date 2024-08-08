import InsightRoll from "../module/about/InsightRoll"


const Layout = ({children}:{children:React.ReactNode}) => {
  
  return (
    <div className="!max-w-full pt-20">
        <InsightRoll />
        {children}
    </div>
  )
}

export default Layout