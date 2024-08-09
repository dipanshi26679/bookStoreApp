
function Cards(item) {
  console.log(item.item.image)
  return (
    <>
    <div>
      <div className="card bg-base-100 w-80 shadow-xl mb-5 mt-4 hover:scale-105 duration-200 hover:cursor-pointer dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.item.price}</div>
            <div className=" px-2 py-1 cursor-pointer rounded-lg badge-outline hover:bg-pink-500 duration-200 hover:text-white ">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Cards;
