

const CardWrapper = ({ children, title }) => {
  return (
    <div className="m-4 max-w-full pb-8">
      <div className="container-px max-w-full">
        <h3 className="text-center text-xl sm:text-2xl text-white mb-4 font-bold">{title}</h3>
        <div className="skill-wrapper flex-wrap gap-2 sm:gap-4 ">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CardWrapper