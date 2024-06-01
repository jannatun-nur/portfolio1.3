

const ExCard = ({ expers }) => {

    const {logo, name } = expers;
    return (
        <div 
    
         className="bg-gray-700 justify-center flex gap-2 items-center rounded-lg p-2">
            
            <img   className="h-6 lg:h-10" src={logo} alt="" />
            <p  className="text-xs lg:text-sm text-center text-black font-bold">{name}</p>
        </div>
    );
};

export default ExCard;