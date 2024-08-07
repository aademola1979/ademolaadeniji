

const WrapperProjectCard = ({ children }:{children:React.ReactNode}) => {
    return (
      <div className="m-4 w-full pb-8">
          <div className="grid grid-cols-1 gap-4 justify-center lg:grid-cols-2 grid-rows-2">
            {children}
          </div>
      </div>
    )

}

export default WrapperProjectCard