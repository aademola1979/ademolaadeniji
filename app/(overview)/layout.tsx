import InsightRoll from "../module/about/InsightRoll"


const Layout = ({children}:{children:React.ReactNode}) => {
  
  return (
    <div>
        <InsightRoll />
        {children}
    </div>
  )
}

export default Layout