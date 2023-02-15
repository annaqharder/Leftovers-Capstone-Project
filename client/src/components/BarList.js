import BarCard from './BarCard'

function BarList({ bars }) {

    const BarArray = bars.map(bar => (
        <BarCard
            key={bar.id}
            bar={bar}
        />
    ))
    return (
        <div>
            <div class="mx-20 my-10 grid grid-cols-2 gap-8">
                {BarArray}
            </div>
        </div>

    );
}

export default BarList;