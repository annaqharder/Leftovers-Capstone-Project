
function VisitEntry({visit}) {

    console.log(visit)

    const {date, occasion, notes, drink, appetizer, food, dessert, other_consumables, visit_img, rating } = visit


    return (
        <div>
            <p>{date}</p>
            <p>Occasion: {occasion}</p>
            <p>Drink: {drink}</p>
            <p>Appetizer: {appetizer}</p>
            <p>Food: {food}</p>
            <p>Dessert: {dessert}</p>
            <p>Other Consumables: {other_consumables}</p>
            <p>Notes: {notes}</p>
            <p>Rating: {rating} ⭐</p>
        </div>
    );
}

export default VisitEntry;