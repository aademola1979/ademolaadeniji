

const CardWrapper = ({ children, title }) => {
  return (
    <div className="m-4 w-full pb-8">
      <div className="container-px">
        <h3 className="text-center text-xl sm:text-2xl section-titles font-bold">{title}</h3>
        <div className="skill-wrapper gap-4">
          {children}
        </div>


      </div>
    </div>
  )
}

export default CardWrapper