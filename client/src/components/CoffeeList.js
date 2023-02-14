import CoffeeCard from "./CoffeeCard";

function CoffeeList({ coffees }) {

    console.log(coffees)
    const CoffeeArray = coffees.map(coffee => (
        <CoffeeCard
            key={coffee.id}
            coffee={coffee}
        />
    ))

    return (
        <div>
            <div class="mx-20 my-10 grid grid-cols-2 gap-8">
                {CoffeeArray}
            </div>
        </div>
    );
}

export default CoffeeList;