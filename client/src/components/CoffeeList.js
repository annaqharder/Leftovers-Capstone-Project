import CoffeeCard from "./CoffeeCard";

function CoffeeList({ eateries }) {
    return (
        <div>
            <div>
                {eateries.map(coffee => (
                    <div>
                        <CoffeeCard
                            key={coffee.id}
                            coffee={coffee}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoffeeList;