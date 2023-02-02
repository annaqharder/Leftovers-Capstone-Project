import CoffeeCard from "./CoffeeCard";

function CoffeeList({ coffees }) {
    return (
        <div>
            <div>
                {coffees.map(coffee => (
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